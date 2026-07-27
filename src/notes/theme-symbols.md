---
title: Theme Symbols
type: note
symbol: ●
date: 2026-07-27
tags: [meta, gruvbox]
themes: [venus, cancer]
---

A second, orthogonal taxonomy sits alongside [[symbol-taxonomy|the type symbols]]: `themes`, what a note is *about* rather than what it *is*. Optional per entry, defined in `src/_data/categories.js`, and rendered as a small clickable glyph next to a note's metadata line linking to a `/category/<slug>/` archive.

Two symbol families: 

- The twelve zodiac symbols (♈ through ♓) cover broad subject themes like philosophy, writing craft, or productivity
- The nine classical planetary symbols (☽ through ♇) cover technology subcategories like APIs, security, or infrastructure

A full table lives on the site's `/legend/` page.

Each theme's `color` maps to a `--nav-*` custom property, reusing the same [[colour-theory|Gruvbox palette]] as the type symbols rather than inventing a second one.

Only tag a theme if a note clearly fits. A note can carry zero, one, or several themes, and most entries here only bother with the ones that add real findability.

[symbol-taxonomy|the type symbols]: symbol-taxonomy "Symbol Taxonomy"
[colour-theory|Gruvbox palette]: colour-theory "colour-theory"
