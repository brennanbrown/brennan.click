import fs from "node:fs";
import matter from "gray-matter";

// Dedicated URLminder feed (§8): raw markdown source of every published
// note (stubs excluded), concatenated as plain text so Beeminder's
// URLminder goal can count words without HTML markup inflating the total.
// Odometer-type goal: this file must only grow, never shrink.
export const data = {
  permalink: "urlminder.txt",
  eleventyExcludeFromCollections: true,
};

export function render(data) {
  const notes = (data.collections.notesPublished || []).slice().sort(
    (a, b) => a.date - b.date
  );

  return notes
    .map((note) => {
      const raw = fs.readFileSync(note.inputPath, "utf8");
      const { content } = matter(raw);
      const dateStr = note.date.toISOString().split("T")[0];
      return `## ${note.data.title} (${dateStr})\n\n${content.trim()}\n`;
    })
    .join("\n");
}
