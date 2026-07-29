---
title: Markdown Extra Syntax
type: snippet
symbol: "🜃"
date: 2026-07-30
tags: [sublime-text, markdown, yaml]
themes: [capricorn]
---

The `.sublime-syntax` file extends MarkdownEditing to add scopes for definition lists, `==mark==`, `~subscript~`, and `^superscript^`. See [[markdown-extra-tokens]] for the overview and [[markdown-extra-color-scheme]] for the color rules.

```yaml
%YAML 1.2
---
# Markdown Extra Tokens
# ======================
# Extends MarkdownEditing (Packages/MarkdownEditing/syntaxes/Markdown.sublime-syntax)
# to add scopes for tokens it doesn't already cover:
#   - Definition lists (PHP Markdown Extra / kramdown style: "term \n : def")
#   - ==highlight/mark==
#   - ~subscript~
#   - ^superscript^
#
# Everything else in your test doc (footnotes, task-list checkboxes, GFM alert
# blockquotes, tables, frontmatter) is already scoped by MarkdownEditing itself -
# this file only adds what's missing.
#
# Install: drop in Packages/User/, then set it as the syntax for .md files via
# View > Syntax > Open all with current extension as... > User > Markdown Extra Tokens

name: Markdown Extra Tokens
scope: text.html.markdown
version: 2
extends: Packages/MarkdownEditing/syntaxes/Markdown.sublime-syntax

contexts:

  # --- Block level: definition lists -----------------------------------
  # Prepend (not append) so this is checked BEFORE MarkdownEditing's
  # paragraph catch-all, which would otherwise swallow ": definition" lines
  # as plain paragraph text.
  markdown:
    meta_prepend: true
    - include: definition-lists

  definition-lists:
    # A line starting with ": " immediately after a term (previous paragraph
    # line) is treated as a definition. This matches the marker, then treats
    # the rest of the line - and any lines indented 4+ spaces after it - as
    # the definition body.
    - match: ^(:)([ \t]+)(?=\S)
      captures:
        1: punctuation.definition.list_item.definition.markdown-extra
      push: definition-list-body

  definition-list-body:
    - meta_scope: markup.list.definition.markdown-extra
    - meta_content_scope: meta.paragraph.definition.markdown-extra
    - match: ^(?=[ \t]{4,}\S)
      push: definition-list-continuation
    - match: ^(?![ \t]{4,}\S)
      pop: true
    - include: inlines

  definition-list-continuation:
    - meta_content_scope: meta.paragraph.definition.markdown-extra
    - match: ^(?![ \t]{4,}\S)
      pop: true
    - include: inlines

  # --- Inline level: mark, subscript, superscript -----------------------
  # Appended (order-safe here since these delimiters don't collide with
  # existing emphasis/strikethrough rules once the negative lookaheads
  # below are in place). If your color scheme shows these misfiring against
  # strikethrough (~~text~~), tighten the tilde lookahead further.
  inlines:
    meta_append: true
    - include: mark-highlight
    - include: subscript
    - include: superscript

  mark-highlight:
    - match: (==)(?=\S)
      scope: punctuation.definition.mark.begin.markdown-extra
      push:
        - meta_scope: markup.mark.markdown-extra
        - match: (?<=\S)(==)
          scope: punctuation.definition.mark.end.markdown-extra
          pop: true
        - match: $
          pop: true

  subscript:
    # Single tilde only - (?!~) keeps this from firing on strikethrough's ~~
    - match: (~)(?=\S)(?!~)
      scope: punctuation.definition.subscript.begin.markdown-extra
      push:
        - meta_scope: markup.subscript.markdown-extra
        - match: (?<=\S)(~)
          scope: punctuation.definition.subscript.end.markdown-extra
          pop: true
        - match: $
          pop: true

  superscript:
    - match: (\^)(?=\S)
      scope: punctuation.definition.superscript.begin.markdown-extra
      push:
        - meta_scope: markup.superscript.markdown-extra
        - match: (?<=\S)(\^)
          scope: punctuation.definition.superscript.end.markdown-extra
          pop: true
        - match: $
          pop: true
```
