---
title: CSS Hover Footnote
type: snippet
symbol: "🜃"
date: 2026-07-24
tags: [css]
themes: [venus, aries]
---

The trick behind [[values|the footnotes on this site]] and the hover previews in notes like [[colour-theory]] is the same adjacent-hover pattern, just with different content in the hidden span. It's [AetherAnne's pattern](https://aetheranne.ca/blog/tutorials/how-to-display-footnotes-on-hover-without-javascript/) for footnotes without JavaScript, wired through `markdown-it`'s renderer overrides here instead of hand-written HTML:

```css
.fn-wrapper {
  position: relative;
  display: inline-block;
}

.fn-content {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 0;
  max-width: 30ch;
}

.fn-wrapper:hover .fn-content,
.fn-wrapper:focus-within .fn-content {
  display: block;
}
```

The reference *and* the hidden content are wrapped in one `position: relative` span. `.fn-content` needs a positioned ancestor to anchor `position: absolute` against, and same-level siblings don't count.

See [[symbol-taxonomy]] for other design patterns, and [[transclusion]] for the other place this hover pattern is reused.

[values|the footnotes on this site]: values "values"
[colour-theory]: colour-theory "colour-theory"
[symbol-taxonomy]: symbol-taxonomy "Symbol Taxonomy"
[transclusion]: transclusion "Transclusion"
