# brennan.click

A wiki-linked digital commonplace book, built in 11ty. Sister site to
[brennan.day](https://brennan.day).

## 0. Why this exists

I'm a Beeminder superuser, and I wanted a way to track my daily commits and word count. This project is built around these two Beeminder goals: a commit-tracking goal on this repo, and a URLminder word-count goal on the generated [`/urlminder.txt`](#5-the-urlmindertxt-feed) feed.

My old `/github` Beeminder goal tracked commits across every repository, but that stopped working once GitHub's API changed to only allow tracking one repository at a time. And most active projects had already moved to [GitLab](https://gitlab.com/brennankbrown) and [Source.tube](https://source.tube/brennan/), anyway. 

It's also a dedicated, low-friction place to dump day-to-day small stuff that doesn't belong on my [main site](https://brennan.day). Quotes, bookmarks, half-formed notes, a diary line, a code snippet worth remembering. A commonplace book, wiki-linked digital garden, with a reason to work on it every day.

## 1. Stack

- [11ty (Eleventy)](https://www.11ty.dev/): static site generator, markdown source, no CMS, no database
- No client-side JS. Footnotes and transclusion previews are pure CSS

## 2. Architecture

```
src/
  notes/          # everything published, flat, one file per entry
  inbox/          # daily freewrite dump, excluded from the build
  _data/          # symbols.js (symbol taxonomy)
  _includes/      # layouts, partials
  assets/css/     # design system
  urlminder.11ty.js
```

A flat `src/notes/` namespace and not category folders. Wiki-links resolve to a single file, so category lives in frontmatter (`type`).

## 3. Frontmatter schema

```yaml
---
title:              # optional, overrides the filename-derived title
type: note          # note | quote | bookmark | diary | snippet | stub
symbol: ●           # Unicode character
date: 2026-07-24
tags: [gruvbox, css]
source_url:         # for quote / bookmark entries
---
```

Filename = slug = title parity: `notes/values.md` → `/values/` → title
"Values."

## 4. Wiki-links, backlinks, stubs

Write `[[science]]` anywhere and it renders as a link to `/science/`, via [`@photogabble/eleventy-plugin-interlinker`](https://github.com/photogabble/eleventy-plugin-interlinker).

Broken wikilinks are reported to `.dead-links.json`; run `npm run stubs` (or just `npm run build`, which runs it automatically) to turn that report into minimal `type: stub` files in `src/notes/`, so links are never dead.

## 5. The `/urlminder.txt` feed

[URLminder](https://help.beeminder.com/article/88-urlminder) lets Beeminder track the words in any publicly accessible URL, normally meant for Google Docs. 

Raw HTML inflates the count, but it's accurate with plain text, which is what `src/urlminder.11ty.js` serves.

It reads every published note's raw markdown straight off disk (frontmatter stripped with `gray-matter`), concatenates them in date order, and serves the result at `/urlminder.txt`, the URL the Beeminder goal points at.

The goal itself is [Odometer](https://help.beeminder.com/article/68-odometer-goals) type: the count can only go up. Since the feed pulls from `notesPublished`, which filters out `type: stub` entries, and stubs by definition have no body, the count only grows as actual writing happens.

This replaces an old habit of tracking daily word count through the now-defunct [Draft](https://web.archive.org/web/20230104023309/https://draftin.com/) editor, and a since-abandoned attempt at rolling a custom [Bearminder](https://github.com/brennanbrown/bearminder) macOS app around the Bear API. URLminder against a static feed turned out to be the low-effort version of the same idea.

## 6. How to add an entry

The idea of the daily minimum contribution is to open `src/inbox/`, dump a thought with no frontmatter or formatting and commit.

To publish properly: classify the fragment's `type`, assign a `symbol` from the taxonomy, write proper frontmatter, add `[[wikilinks]]` to anything that already exists as a note, and move it to `src/notes/<slug>.md`, then clear it out of the inbox. 

## 9. Known issues

The double build (`eleventy && npm run stubs && eleventy`) is a little inelegant, and every build is slower for it. A single-pass version would need the interlinker plugin to accept a "create the file for me" resolving function rather than just reporting dead links, which it doesn't currently expose. Not a problem until the site gets large, at which point a custom plugin might replace it.

## 10. Commands

```
npm install
npm run build   # build once, generate stubs, build again
npm run serve   # local dev server
```

Commit convention: `add:`, `note:`, `fix:`, `chore:`. Small, regular commits, nothing heavier.

## 11. Licensing

- **Code:** [AGPL-3.0-or-later](LICENSE)
- **Writing:** [CC BY-SA 4.0](LICENSE-CONTENT)