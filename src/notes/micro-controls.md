---
title: Micro Controls
type: note
symbol: ●
date: 2026-08-06
tags: [micro, editor, cli]
themes: [capricorn, libra]
---

[[writerdeck|Micro]] is the editor for plain prose on the writerdeck. No modal states to fight, every binding is a `Ctrl` or `Alt` shortcut you'd expect from a GUI editor. Everything below is rebindable via `~/.config/micro/bindings.json`, but the defaults great as-is.

| Key               | Action                                |
| ----------------- | ------------------------------------- |
| `Ctrl-s`          | Save current file                     |
| `Ctrl-o`          | Open a file                           |
| `Ctrl-q`          | Close current file, quits if last one |
| `Ctrl-t`          | Open a new tab                        |
| `Alt-,` / `Alt-.` | Previous / next tab                   |

| Key                            | Action                   |
| ------------------------------ | ------------------------ |
| `Ctrl-z` / `Ctrl-y`            | Undo / redo              |
| `Ctrl-c` / `Ctrl-x` / `Ctrl-v` | Copy / cut / paste       |
| `Ctrl-k`                       | Cut the whole line       |
| `Ctrl-d`                       | Duplicate line/selection |
| `Alt-Up` / `Alt-Down`          | Move line(s) up/down     |

| Key                 | Action                |
| ------------------- | --------------------- |
| `Ctrl-f`            | Find                  |
| `Ctrl-n` / `Ctrl-p` | Next / previous match |
| `Ctrl-l`            | Go to line            |

The command bar (`Ctrl-e`) is the escape hatch for anything not bound to a key, typing `help keybindings` there lists every default. `Ctrl-g` opens the same help inside the editor, and `Alt-g` overlays a live key-menu at the bottom of the screen for whatever's rebound.

## Advanced

| Key                           | Action                                                   |
| ----------------------------- | -------------------------------------------------------- |
| `Alt-n`                       | Spawn a multi-cursor on the next match                   |
| `Alt-p` / `Alt-c`             | Remove last / remove all multi-cursors                   |
| `AltShiftUp` / `AltShiftDown` | Spawn a multi-cursor one line up / down                  |
| `Alt-m`                       | Spawn a cursor at the start of every line in a selection |

Multiple cursors edit in parallel, useful for renaming a repeated word across a manuscript without a find-and-replace pass.

Macros record a sequence of edits and replay it: `Ctrl-u` starts and stops recording, `Ctrl-j` plays back the last one. `Ctrl-b` drops into `ShellMode`, running a shell command with micro suspended, output pipes back into the buffer.

The plugin manager runs from the command bar: `plugin install <name>` and `plugin list` pull from micro's official channel, though the writerdeck stays on stock micro, no plugins, one less thing to sync.

For the fonts used, see [[monospace-fonts]]. For the setup this editor lives on, see [[writerdeck]], and [[wordgrinder-controls]] for the other half.

[monospace-fonts]: monospace-fonts "Monospace Fonts"
[writerdeck]: writerdeck "Writerdeck"
[wordgrinder-controls]: wordgrinder-controls "WordGrinder Controls"
