---
title: Beeminder
type: bookmark
symbol: "⚹"
date: 2026-07-24
source_url: https://www.beeminder.com
tags: [habits]
themes: [aries, sagittarius]
---

A commitment device: set a numeric goal, draw a yellow brick road toward it on a graph, and pay real money if you fall off. The two goals riding on this repo, one on commit count and one on cumulative word count via `/urlminder.txt`, are both Beeminder goals, and both exist because [[gitminder|the old commit tracker]] stopped working and something had to replace it.

The word-count goal is specifically an Odometer-type goal, via [[urlminder|URLminder]]: it reads a running total off a public URL rather than a daily delta, which is why the feed can only ever grow, never shrink, no matter how many old [[values|entries]] get lightly edited later. See [[static-site-generators]] for the mechanics of how that feed gets built.

It's not the first attempt at a word-count goal. The old [Draft](https://web.archive.org/web/20230104023309/https://draftin.com/) editor used to report daily word count automatically before it shut down, and [[bearminder]] was a since-abandoned Swift macOS app meant to send Bear's word count the same way. URLminder against a static feed turned out to need neither a dedicated app nor a service that could disappear.
