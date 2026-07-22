---
title: Foam
type: bookmark
symbol: "⚹"
date: 2026-07-24
source_url: https://marketplace.visualstudio.com/items?itemName=foam.foam-vscode
tags: [editor, vscode]
---

Foam is a VSCode extension for markdown-based personal knowledge bases: wikilinks, backlinks panel, graph visualization, orphan and placeholder panels. Read from the same flat `src/notes/*.md` files this site already builds from. 

No server, no separate app, just an editor plugin that works alongside [[eleventy-interlinker]].

Foam is for authoring: link autocomplete, go-to-definition, a live graph while writing. 

The Eleventy build is for publishing: it turns dead links into [[stub-pages|stub]] page via `scripts/generate-stubs.mjs`, and what renders the hover-preview excerpts described in [[transclusion]]. 

Foam's own placeholder panel flags the dangling links for editing, but it doesn't write files.

Workspace config lives in `.vscode/settings.json`: `foam.files.exclude` keeps `_site/`, `node_modules/`, and `src/inbox/` out of Foam's graph so it only ever sees the real note corpus, the same scope [[static-site-generators]] describes for the build itself.

[eleventy-interlinker]: eleventy-interlinker "Eleventy Interlinker"
[stub-pages|stub]: stub-pages "Stub Pages"
[transclusion]: transclusion "Transclusion"
[static-site-generators]: static-site-generators "Static Site Generators"
