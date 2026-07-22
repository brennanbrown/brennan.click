---
type: note
symbol: ●
date: 2026-07-24
tags: [gruvbox, css]
---

Gruvbox's rainbow accent set doubles as the symbol taxonomy's colour legend, see [[values]] for the entry that started this.

One per [[symbol-taxonomy|entry type]]: red for quotes, yellow for bookmarks, green for notes, blue for diary entries, purple for snippets, and the muted gray reserved for stubs like [[bearminder]]. Light and dark mode swap the whole palette via `prefers-color-scheme`, so nothing in [[css-hover-footnote|the footnote CSS]] needs a manual override. Everything reads off `--fg` / `--bg` / `--panel` / `--border`.

[values]: values "values"
[symbol-taxonomy|entry type]: symbol-taxonomy "Symbol Taxonomy"
[bearminder]: bearminder "bearminder"
[css-hover-footnote|the footnote CSS]: css-hover-footnote "CSS Hover Footnote"
