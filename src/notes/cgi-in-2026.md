---
title: CGI in 2026
type: note
symbol: ●
date: 2026-08-01
tags: [web, servers]
themes: [aries, saturn]
---

[[cgi-scripts|CGI]] never fully died, it retreated to admin tooling and old Apache corners.

[Jake Gold benchmarked compiled-language CGI at 2,400+ requests/sec](https://jacob.gold/posts/serving-half-billion-requests-with-rust-cgi/), half a billion a day, once you're not spawning an interpreter per request.

The [Navigator project revived real CGI for admin scripts in 2025](https://intertwingly.net/blog/2025/10/26/Bringing-CGI-Back-from-the-Dead.html): per-request process isolation, scripts running as different Unix users, no framework left to patch.

See [[tildeverse-guestbook]] for a practical example of this admin-script approach.

Old Perl and Python CGI still quietly handles form posts on servers nobody's touched in years. Python dropped its `cgi` module from the standard library in 3.13, finally forcing some of that code to move.

The reputation for insecurity is mostly misplaced. The real bugs are command injection and unescaped output, the same classes any handler can have.

See [[minimal-cgi-script]] for the shape of the actual interface.

[cgi-scripts|CGI]: cgi-scripts "CGI Scripts"
[minimal-cgi-script]: minimal-cgi-script "Minimal CGI Script"
