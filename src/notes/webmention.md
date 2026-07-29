---
title: Webmention
type: bookmark
symbol: "⚹"
date: 2026-07-28
source_url: https://www.w3.org/TR/webmention/
tags: [indieweb, protocols]
themes: [aries, mercury]
---

A [W3C Recommendation](https://www.w3.org/TR/webmention/): a site that links to a URL POSTs its own URL to that target's webmention endpoint, the target fetches the source back to confirm the link is valid, and a decentralized backlink exists across two domains that share no database. 

It's a simplified successor to Pingback, form-encoded instead of XML-RPC.

Where [[eleventy-interlinker]] resolves backlinks at build time within one flat corpus of files, Webmention does the same job across the open web, between sites nobody but their owners control. [[foam]]'s graph view and this site's own backlinks panel are the closed-world version of what Webmention does open-world.

It's the technical backbone of [[posse|POSSE]]. Syndicate a copy to a silo, and a Webmention-aware receiver on your own site can pull replies and likes back from that copy into a comments section you own.

Not yet implemented on this site. 

[eleventy-interlinker]: eleventy-interlinker "Eleventy Interlinker"
[foam]: foam "Foam"
[posse|POSSE]: posse "POSSE"
