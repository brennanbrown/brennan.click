---
title: Stub Pages
type: note
symbol: ●
date: 2026-07-24
tags: [meta, wiki]
themes: [cancer, aries]
---

A problem that wiki-linked [[digital-garden|digital garden]] run into is figuring out what happens when you reference a note that doesn't exist on disk yet. 

A traditional website would 404. This site turns it into a stub instead. A stub is a minimal file with `type: stub` and no body, so the link resolves, the target page exists, and it immediately starts collecting backlinks even though nothing has been written yet.

The dead-link scanner reads raw markdown source, not rendered HTML, so it doesn't know the difference between a real wikilink and a double-bracket example inside a code span for illustration. 

A stub is a to-do list item as much as it is a page. The next daily entry could just as easily be filling one in as starting something new.

[digital-garden|digital garden]: digital-garden "Digital Garden"





