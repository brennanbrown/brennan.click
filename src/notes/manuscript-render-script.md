---
title: Manuscript Render Script
type: note
symbol: ●
date: 2026-08-06
tags: [git, writing, automation]
themes: [pluto, libra]
---

The [[writerdeck|writerdeck]] pushes to a private git repo, one commit per session, and the same discipline as this site's own [[gitminder|daily-commit habit]]. Commits are the only telemetry, there's no cloud sync or background daemon watching the manuscript folder.

A post-commit hook does the work, every `.wg` and `.md` file in the manuscript tree is concatenated into one plain-text file in the order a table of contents defines, not file-modified time. WordGrinder ships its own `wordgrinder-convert` for turning its native format into plain text before that concatenation happens.

It's the same as this site's [[urlminder|`urlminder.txt` route]]: read every source file at render time, strip anything that isn't prose, write the total back out as a single growing feed. [[static-site-generators|The same reasoning]] applies, boring and deterministic beats clever.

That single file is the thing that actually gets deployed, not the repo. See [[obscure-netlify-subdomain]] for where it ends up once it leaves the ThinkPad.

[writerdeck|writerdeck]: writerdeck "Writerdeck"
[gitminder|daily-commit habit]: gitminder "Gitminder"
[urlminder|`urlminder.txt` route]: urlminder "URLminder"
[static-site-generators|The same reasoning]: static-site-generators "Static Site Generators"
[obscure-netlify-subdomain]: obscure-netlify-subdomain "Obscure Netlify Subdomain"
