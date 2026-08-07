---
title: Obscure Netlify Subdomain
type: note
symbol: ●
date: 2026-08-06
tags: [netlify, hosting, privacy, beeminder]
themes: [moon, mars]
---

[[urlminder|URLminder]] needs a public URL, which rules out anything private. The workaround is obscurity. Deploy the [[manuscript-render-script|rendered manuscript feed]] to Netlify under a subdomain that's a long random string rather than a chosen name, eg. `x7q2m9vb4k1p.netlify.app`.

No custom domain, no link from this site, no sitemap entry. The only two places that string exists are the Beeminder goal configuration and the Netlify dashboard. The manuscript stays functionally private while still satisfying an Odometer-type goal that has to read a publicly fetchable page.

It's the same trade [[link-rot|cool URIs]] warn against for anything meant to last, an unmemorable path is fragile if it ever needs to be shared on purpose. I think that's fine here, as the point is that it's never shared.

Deploys straight from the [[manuscript-render-script|render script's]] output directory, same `netlify deploy --prod` flow as other static sites, just pointed at one `.txt` file instead of a build folder.

[urlminder|URLminder]: urlminder "URLminder"
[manuscript-render-script|rendered manuscript feed]: manuscript-render-script "Manuscript Render Script"
[link-rot|cool URIs]: link-rot "Link Rot"
[manuscript-render-script|render script's]: manuscript-render-script "Manuscript Render Script"
