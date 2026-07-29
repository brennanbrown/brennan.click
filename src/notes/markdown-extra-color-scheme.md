---
title: Markdown Extra Color Scheme
type: snippet
symbol: "🜃"
date: 2026-07-30
tags: [sublime-text, markdown, json]
themes: [capricorn, venus]
---

The `.sublime-color-scheme` file maps the new scopes from [[markdown-extra-syntax]] to colors. Any `.sublime-color-scheme` dropped in `Packages/User/` merges onto the active base scheme automatically. See [[markdown-extra-tokens]] for the overview.

```json
{
    "name": "Markdown Extra Tokens Addon",
    "author": "brennan",
    // Any .sublime-color-scheme file dropped in Packages/User is merged onto
    // whatever base color scheme is currently active - you don't need to
    // reference this file from your settings. Drop it in and it applies.
    "rules":
    [
        // --- New tokens from MarkdownExtraTokens.sublime-syntax ---
        {
            "scope": "markup.list.definition.markdown-extra",
            "font_style": "italic"
        },
        {
            "scope": "punctuation.definition.list_item.definition.markdown-extra",
            "foreground": "#61AFEF"
        },
        {
            "scope": "markup.mark.markdown-extra",
            "foreground": "#282C34",
            "background": "#E5C07B"
        },
        {
            "scope": "punctuation.definition.mark.begin.markdown-extra, punctuation.definition.mark.end.markdown-extra",
            "foreground": "#E5C07B"
        },
        {
            "scope": "markup.subscript.markdown-extra, markup.superscript.markdown-extra",
            "foreground": "#56B6C2"
        },
        {
            "scope": "punctuation.definition.subscript.begin.markdown-extra, punctuation.definition.subscript.end.markdown-extra, punctuation.definition.superscript.begin.markdown-extra, punctuation.definition.superscript.end.markdown-extra",
            "foreground": "#5C6370"
        },

        // --- Bonus: MarkdownEditing scopes that already exist but often
        // ship without an explicit color in the base theme ---
        {
            "scope": "markup.quote.alert.note.markdown",
            "foreground": "#61AFEF"
        },
        {
            "scope": "markup.quote.alert.tip.markdown",
            "foreground": "#98C379"
        },
        {
            "scope": "markup.quote.alert.important.markdown",
            "foreground": "#C678DD"
        },
        {
            "scope": "markup.quote.alert.warning.markdown",
            "foreground": "#E5C07B"
        },
        {
            "scope": "markup.quote.alert.caution.markdown",
            "foreground": "#E06C75"
        },
        {
            "scope": "markup.checkbox.mark.markdown-gfm",
            "foreground": "#98C379",
            "font_style": "bold"
        },
        {
            "scope": "entity.name.reference.link.markdown",
            "foreground": "#D19A66"
        }
    ]
}
```
