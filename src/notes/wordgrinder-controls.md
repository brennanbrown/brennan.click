---
title: WordGrinder Controls
type: note
symbol: ●
date: 2026-08-06
tags: [wordgrinder, editor, cli]
themes: [capricorn, libra]
---

[[writerdeck|WordGrinder]] hides its menu by default, `Esc` or a right-click brings it up, and every command lives somewhere in there. The shortcuts below skip the menu entirely, all of them are also visible next to their matching menu entry if a key is forgotten.

| Key          | Action                                              |
| ------------ | --------------------------------------------------- |
| `Esc`        | Open the menu (again, or `Ctrl-c`, to close it)     |
| `Alt-letter` | Jump straight into a submenu, e.g. `Alt-f` for File |
| `Ctrl-s`     | Save                                                |
| `Ctrl-o`     | Open                                                |
| `Ctrl-q`     | Quit                                                |

| Key                            | Action                                                                |
| ------------------------------ | --------------------------------------------------------------------- |
| `Ctrl-space`                   | Set a selection mark at the cursor, move, `Ctrl-space` again to clear |
| `Ctrl-c` / `Ctrl-x` / `Ctrl-v` | Copy / cut / paste the marked selection                               |
| `Ctrl-f`                       | Find                                                                  |
| `Ctrl-r`                       | Find and replace                                                      |

| Key      | Action                          |
| -------- | ------------------------------- |
| `Ctrl-b` | Bold                            |
| `Ctrl-o` | Plain (clears style)            |
| `Ctrl-k` | Open the style submenu directly |

Selection works differently than in most editors: mark one end with `Ctrl-space`, move the cursor to the other end, then apply an operation, there's no click-and-drag equivalent in a terminal. Every keybinding here is stored per-document rather than globally, so a custom binding is included in the `.wg` file rather than a dotfile.

## Advanced

Templates save a keybinding set and starting content together: `File→Save as template` writes the current document set to WordGrinder's template directory, `File→Create from template` loads one into a fresh, unsaved document. A template named `default.wg` autoloads for every new document, useful for a chapbook's recurring front matter.

Autosave is off by default. `File→Document Settings→Autosave` turns it on with a configurable interval and filename pattern, snapshots only fire once typing pauses and only while there are unsaved changes.

The spellchecker underlines misspellings as you type. `Edit→Spellchecker→Find next misspelt word` jumps between them, `Edit→Spellchecker→Add current word to dictionary` writes to a per-document set user dictionary rather than the system one, so a manuscript's invented names don't need retyping past every check.

A single `.wg` file holds multiple documents, called a document set, visible via the tab-like document list. Word count shown in the status bar covers either the whole document or, with an active selection, just the marked range.

See [[micro-controls]] for the other editor on the writerdeck, and [[writerdeck]].

[micro-controls]: micro-controls "Micro Controls"
[writerdeck]: writerdeck "Writerdeck"
