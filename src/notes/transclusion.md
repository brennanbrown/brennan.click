---
title: Transclusion
type: note
symbol: ●
date: 2026-07-24
tags: [css, meta]
---

Transclusion is including a document's content inside another by reference, rather than by copy, so the excerpt is from the source. Don't repeat yourself!

Ted Nelson coined the term decades before wiki software made it common; [Gwern.net](https://www.gwern.net/) is the best-known modern example, popping up a preview of practically any link on hover.

For this site, at build time every wikilink gets a hidden sibling `<span>` holding the first forty or so words of its target note, styled with the same adjacent-hover trick as [[css-hover-footnote|the footnote CSS]]. Hover any link in this paragraph, like [[colour-theory]] or [[symbol-taxonomy]], and the preview should appear without a single line of client-side JavaScript.

CSS-only means no images, no multi-paragraph excerpts, and the excerpt text is a naive strip of markdown syntax rather than a proper render, so things like tables show up a little mangled. Good enough.

[css-hover-footnote|the footnote CSS]: css-hover-footnote "CSS Hover Footnote"
[colour-theory]: colour-theory "colour-theory"
[symbol-taxonomy]: symbol-taxonomy "Symbol Taxonomy"
