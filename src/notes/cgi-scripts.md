---
title: CGI Scripts
type: note
symbol: ●
date: 2026-08-01
tags: [web, servers, history]
themes: [aries, saturn]
---

The Common Gateway Interface is a 1993 protocol for running a program per HTTP request, standardized in 2004 as [RFC 3875](https://www.rfc-editor.org/rfc/rfc3875).

The server forks a process, passes the request in as environment variables and stdin, and reads headers plus a body back off stdout.

No runtime or framework, nothing beyond that.

See [[cgi-in-2026]] for whether it's still worth reaching for, [[static-site-generators]] for the opposite end of the dynamic-content spectrum, and [[tildeverse-guestbook]] for a practical non-web CGI use case.

[cgi-in-2026]: cgi-in-2026 "CGI in 2026"
[static-site-generators]: static-site-generators "Static Site Generators"
