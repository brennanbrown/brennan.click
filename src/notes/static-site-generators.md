---
title: Static Site Generators
type: note
symbol: ●
date: 2026-07-24
tags: [11ty, meta]
---

A static site generator takes markdown and templates and compiles them into plain HTML files with no server-side code and no database. For a [[digital-garden|digital garden]] that's meant to be worked on continuously, the boring reliability is a great asset.

I use 11ty (Eleventy) instead of Hugo, Jekyll, or a hand-rolled build script. The [[eleventy-interlinker]] is great for wiki-links plus backlinks are most of what this site needed to not be a plain blog. The frontmatter schema, the `type`-as-tag grouping entries on the homepage, and the [[symbol-taxonomy|symbol system]] all lean on 11ty's data cascade doing the boring parts.

Nothing is dynamic. Search has to be either client-side JS or an external index.

The [[stub-pages|stub]] pipeline means a link doesn't resolve until its stub file exists on disk, so `npm run build` has to run Eleventy twice with the stub script in between, first pass to write the dead-link report, second pass once those files exist. A little inelegant but not worth a custom plugin until the site is large enough for that cost to matter.

[digital-garden|digital garden]: digital-garden "Digital Garden"
[eleventy-interlinker]: eleventy-interlinker "Eleventy Interlinker"
[symbol-taxonomy|symbol system]: symbol-taxonomy "Symbol Taxonomy"
[stub-pages|stub]: stub-pages "Stub Pages"
