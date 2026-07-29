---
title: Markdown Extra Tokens
type: snippet
symbol: "🜃"
date: 2026-07-30
tags: [sublime-text, markdown]
themes: [capricorn, venus]
---

Sublime highlighting is two separate steps: a `.sublime-syntax` (YAML) tokenizes text into named *scopes*, and a `.sublime-color-scheme` (JSON) maps those scopes to colors. A token can be perfectly scoped and still look uncolored if no rule targets it, so **Command Palette → "Show Scope Name"** is the first move when something isn't highlighting.

[MarkdownEditing](https://packagecontrol.io/packages/MarkdownEditing) already covers footnotes, GFM task-list checkboxes, GitHub-style alert blockquotes, tables, and frontmatter. What it misses: definition lists and the Pandoc-style `==mark==` / `~sub~` / `^sup^` inline extras.

Sublime's `extends:` key layers a new syntax file on top of MarkdownEditing's without touching its source, so package updates don't wipe the change:

```yaml
name: Markdown Extra Tokens
scope: text.html.markdown
version: 2
extends: Packages/MarkdownEditing/syntaxes/Markdown.sublime-syntax

contexts:
  markdown:
    meta_prepend: true
    - include: definition-lists

  inlines:
    meta_append: true
    - include: mark-highlight
```

MarkdownEditing's paragraph-catchall rule is deliberately last in its `markdown` context, so overriding with `meta_append: true` there means the new rule won't work, it has to be `meta_prepend: true`. `inlines` is shared by every paragraph body, list item, and blockquote, so anything added there works everywhere text is parsed, not just top-level paragraphs.

Install via `Preferences → Browse Packages… → User/`, with a companion `.sublime-settings` file (`{"extensions": ["md"]}`, named after the syntax) to set it as the default for `.md` files without the manual "Open all with current extension as…" step. The color scheme applies automatically as an addon on top of whatever base scheme is active.

The single-tilde `~subscript~` rule doesn't work with GFM strikethrough (`~~text~~`) depending on rule ordering. The definition-list block also assumes a blank-line-free term immediately followed by a `: definition` line, which covers PHP Markdown Extra style, but not every dialect.

The full files are split into [[markdown-extra-syntax]] and [[markdown-extra-color-scheme]].

[markdown-extra-syntax]: markdown-extra-syntax "Markdown Extra Syntax"
[markdown-extra-color-scheme]: markdown-extra-color-scheme "Markdown Extra Color Scheme"
