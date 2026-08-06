---
title: Guestbook Maintenance
type: note
symbol: ●
date: 2026-08-05
tags: [servers, maintenance, tildeverse]
themes: [aries, saturn]
---

The [[tildeverse-guestbook|guestbook]] system needs periodic maintenance to prevent files from growing too large.

Archive old entries monthly:

```bash
cp ~/guestbook.txt ~/guestbook-$(date +%Y%m).txt
```

Rotate the [[guestbook-logging|log file]] to prevent unbounded growth:

```bash
mv ~/guestbook.log ~/guestbook-$(date +%Y%m).log
touch ~/guestbook.log
echo "# Guestbook Change Log" > ~/guestbook.log
```

Check file sizes with `ls -lh ~/guestbook*`

The clear script (`~/guestbook-clear.sh`) requires confirmation before wiping the guestbook, logging the action to the audit trail.

[tildeverse-guestbook]: tildeverse-guestbook "Tildeverse Guestbook"
[guestbook-logging]: guestbook-logging "Guestbook Logging"
