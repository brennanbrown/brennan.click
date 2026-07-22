---
title: URLminder
type: bookmark
symbol: "⚹"
date: 2026-07-24
source_url: https://help.beeminder.com/article/88-urlminder
tags: [beeminder]
---

A [[beeminder|Beeminder]] integration that counts the words at any publicly accessible URL, normally used with Google Docs. Raw HTML inflates the count, but it's accurate with plain text, which is the reason `/urlminder.txt` exists as a route on this site, rather than pointing URLminder at a rendered HTML page.

The goal it drives is an [Odometer](https://help.beeminder.com/article/68-odometer-goals) type: the number can only go up, never down, matching the fact that `/urlminder.txt` only ever grows as [[values|notes]] get written.

[beeminder|Beeminder]: beeminder "Beeminder"
[values|notes]: values "values"
