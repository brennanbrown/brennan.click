---
title: Guestbook File Permissions
type: note
symbol: ●
date: 2026-08-05
tags: [servers, security, tildeverse]
themes: [aries, saturn]
---

The [[tildeverse-guestbook|guestbook]] file should be read-only (644) to prevent direct editing.

Users add entries through the [[guestbook-add-script|add script]] instead, which logs changes and maintains consistent formatting.

```
chmod 644 ~/guestbook.txt
chmod 666 ~/guestbook.log
chmod 755 ~/guestbook-add.sh
```

The log file stays writable so the script can track who added what and when.

This prevents accidental deletion, ensures all entries are attributed, and allows for future content filtering in the script.

See [[shell-script-cgi-security]] for why shell scripts need particular care when handling user input.

[tildeverse-guestbook]: tildeverse-guestbook "Tildeverse Guestbook"
[guestbook-add-script]: guestbook-add-script "Guestbook Add Script"
[shell-script-cgi-security]: shell-script-cgi-security "Shell Script CGI Security"
