---
title: Eleventy Interlinker
type: bookmark
symbol: "⚹"
date: 2026-07-24
source_url: https://github.com/photogabble/eleventy-plugin-interlinker
tags: [11ty]
---

Obsidian-style wikilinks, backlinks, and embeds for Eleventy. Used for both dead-link reporting and stub-generation.

The `resolvingFns` is why I use this instead of the lighter `eleventy-plugin-backlinks` alternative. It makes the hover-preview excerpts on wikilinks possible.

The dead-link-to-[[stub-pages|stub]] pipeline is the other reason. See [[static-site-generators]] for why that works because the whole site rebuilds from scratch on every commit.

[[foam]] also reads the same wikilinks in the editor, giving authoring a graph and backlinks panel before this plugin runs a build.

[stub-pages|stub]: stub-pages "Stub Pages"
[static-site-generators]: static-site-generators "Static Site Generators"
[foam]: foam "Foam"
