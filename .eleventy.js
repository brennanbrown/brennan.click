import fs from "node:fs";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import matter from "gray-matter";
import EleventyInterlinkerPlugin from "@photogabble/eleventy-plugin-interlinker";

/**
 * Slugify a wikilink target name: "Colour Theory" -> "colour-theory"
 */
function slugify(name) {
  return String(name)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Title-case a slug: "colour-theory" -> "Colour Theory"
 */
function titleCase(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Strip markdown/HTML down to plain text words, for word counts and excerpts.
 */
function toPlainText(content) {
  return (content || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Read a note's raw markdown body straight off disk and reduce it to a
 * short plain-text excerpt. Used for the build-time, CSS-only transclusion
 * hover previews (§6, approach A), cheap, no runtime JS required.
 */
function excerptFromFile(inputPath, wordLimit = 40) {
  try {
    const raw = fs.readFileSync(inputPath, "utf8");
    const { content } = matter(raw);
    const plain = toPlainText(
      content
        .replace(/^#{1,6}\s+/gm, "")
        .replace(/^[-*>]\s+/gm, "")
        .replace(/[*_`]/g, "")
        .replace(/\[\[([^\]|]+)(\|([^\]]+))?\]\]/g, (_, name, __, alias) => alias || name)
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    );
    const words = plain.split(/\s+/).filter(Boolean);
    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "…" : "");
  } catch {
    return "";
  }
}

export default function (eleventyConfig) {
  // ---------------------------------------------------------------------
  // Passthrough copy
  // ---------------------------------------------------------------------
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ LICENSE: "LICENSE", "LICENSE-CONTENT": "LICENSE-CONTENT" });

  // ---------------------------------------------------------------------
  // Markdown-it: footnotes with a CSS-hover-friendly render override
  // ---------------------------------------------------------------------
  const md = markdownIt({ html: true }).use(markdownItFootnote);

  // markdown-it-footnote assembles each footnote's rendered body at the very
  // end of the token stream (after `footnote_tail` runs), keyed only by
  // position, not reachable from `footnote_ref` at render time. Walk the
  // finalized token stream once per document and cache each footnote's
  // rendered HTML by id, so the ref override below can look it up.
  md.core.ruler.after("footnote_tail", "extract_footnote_contents", (state) => {
    const contents = {};
    let currentId = null;
    let buffer = [];
    for (const token of state.tokens) {
      if (token.type === "footnote_open") {
        currentId = token.meta.id;
        buffer = [];
        continue;
      }
      if (token.type === "footnote_close") {
        contents[currentId] = md.renderer.render(buffer, md.options, state.env);
        currentId = null;
        continue;
      }
      if (currentId !== null && token.type !== "footnote_anchor") {
        buffer.push(token);
      }
    }
    state.env.footnoteContents = contents;
  });

  // Default footnote ref renders: <sup class="footnote-ref"><a ...>n</a></sup>
  // Override it to also emit a hidden sibling span with the footnote's own
  // text, so `.fn-wrapper:hover .fn-content` can reveal it without JS.
  const defaultFootnoteRefRender =
    md.renderer.rules.footnote_ref ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.footnote_ref = (tokens, idx, options, env, self) => {
    const original = defaultFootnoteRefRender(tokens, idx, options, env, self);
    const id = tokens[idx].meta.id;
    const text = (env.footnoteContents && env.footnoteContents[id]) || "";
    const hidden = `<span class="fn-content" aria-hidden="true">${text}</span>`;
    return `<span class="fn-wrapper">${original}${hidden}</span>`;
  };

  eleventyConfig.setLibrary("md", md);

  // ---------------------------------------------------------------------
  // Wiki-links, backlinks, stub generation (§3)
  //
  // The `default` resolving function is overridden so every resolved
  // wikilink also carries a hidden sibling span with a build-time excerpt
  // of its target note: a CSS-only transclusion hover preview (§6, approach A).
  // ---------------------------------------------------------------------
  eleventyConfig.addPlugin(EleventyInterlinkerPlugin, {
    defaultLayout: "layouts/stub.njk",
    // JSON report doubles as the stub-generation seed list (§2.4), consumed
    // by scripts/generate-stubs.mjs.
    deadLinkReport: "json",
    resolvingFns: new Map([
      [
        "default",
        async (link) => {
          const title = link.title || link.name;
          if (!link.exists || !link.page) {
            // Points at where scripts/generate-stubs.mjs will create the
            // stub file on the next build, see §2.4.
            return `<span class="wikilink-wrapper"><a class="wikilink wikilink--broken" href="/${slugify(link.name)}/">${title}</a></span>`;
          }
          const excerpt = excerptFromFile(link.page.inputPath);
          const preview = excerpt
            ? `<span class="wikilink-preview" aria-hidden="true">${excerpt}</span>`
            : "";
          return `<span class="wikilink-wrapper"><a class="wikilink" href="${link.href}">${title}</a>${preview}</span>`;
        },
      ],
    ]),
  });

  // ---------------------------------------------------------------------
  // eleventyComputed: filename = slug = title parity (§2.2)
  // ---------------------------------------------------------------------
  // Note: the flattened `/slug/` permalink override lives in
  // src/notes/notes.11tydata.js, scoped to that directory only, so it
  // doesn't clobber other templates' own permalinks (e.g. urlminder.txt).
  eleventyConfig.addGlobalData("eleventyComputed", {
    title: (data) => data.title || titleCase(data.page.fileSlug || ""),
  });

  // ---------------------------------------------------------------------
  // Filters
  // ---------------------------------------------------------------------
  eleventyConfig.addFilter("wordCount", (content) => {
    const text = toPlainText(content);
    if (!text) return 0;
    return text.split(/\s+/).filter(Boolean).length;
  });

  eleventyConfig.addFilter("excerpt", (content, wordLimit = 40) => {
    const text = toPlainText(content);
    const words = text.split(/\s+/).filter(Boolean);
    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "…" : "");
  });

  // Forward links: every internal wikilink found in a page's own rendered
  // content (§4). Backlinks come for free from the interlinker plugin's
  // own `backlinks` template variable.
  eleventyConfig.addFilter("forwardLinks", (content) => {
    const matches = [
      ...(content || "").matchAll(/<a class="wikilink[^"]*" href="([^"]+)">([^<]*)<\/a>/g),
    ];
    return matches.map(([, href, text]) => ({ url: href, title: text }));
  });

  eleventyConfig.addFilter("dateDisplay", (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  });

  // ---------------------------------------------------------------------
  // Collections: `type` frontmatter doubles as an 11ty tag (§2.3)
  // ---------------------------------------------------------------------
  eleventyConfig.addCollection("notesAll", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/notes/*.md")
  );

  eleventyConfig.addCollection("notesPublished", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/notes/*.md")
      .filter((note) => note.data.type !== "stub")
  );

  for (const type of ["note", "quote", "bookmark", "diary", "snippet", "stub"]) {
    eleventyConfig.addCollection(`type_${type}`, (collectionApi) =>
      collectionApi
        .getFilteredByGlob("src/notes/*.md")
        .filter((note) => note.data.type === type)
    );
  }

  // ---------------------------------------------------------------------
  // Ignore inbox (also covered by .eleventyignore)
  // ---------------------------------------------------------------------
  eleventyConfig.ignores.add("src/inbox/**");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "11ty.js", "txt"],
    serverOptions: {
      port: 8080,
    },
  };
}
