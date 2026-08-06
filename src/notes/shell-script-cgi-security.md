---
title: Shell Script CGI Security
type: note
symbol: ●
date: 2026-08-05
tags: [security, servers, shell]
themes: [aries, saturn]
---

Shell scripts are risky for [[cgi-scripts|CGI]] because sandboxing backticks against injection is close to impossible.

The [[minimal-cgi-script]] note explicitly warns against shell script CGI for this reason.

For the [[tildeverse-guestbook|guestbook]] system, the shell script runs locally on the tilde server, not as a web CGI, which reduces the attack surface.

If you must use shell scripts for web input, filter for known patterns rather than trying to sanitize arbitrary input:

```bash
if grep -qi "viagra\|casino\|lottery\|porn" "$TEMPFILE"; then
    echo "Entry rejected: inappropriate content detected"
    rm "$TEMPFILE"
    exit 1
fi
```

This is a denylist approach, not real security. Python or Perl CGI with proper parameter handling is safer.

[cgi-scripts|CGI]: cgi-scripts "CGI Scripts"
[minimal-cgi-script]: minimal-cgi-script "Minimal CGI Script"
[tildeverse-guestbook]: tildeverse-guestbook "Tildeverse Guestbook"
