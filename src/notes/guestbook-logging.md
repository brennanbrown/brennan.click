---
title: Guestbook Logging
type: note
symbol: ●
date: 2026-08-05
tags: [servers, logging, tildeverse]
themes: [aries, saturn]
---

The [[tildeverse-guestbook|guestbook]] system maintains a change log to track who added entries and when.

Log format: `[timestamp] username: action`

```
# Guestbook Change Log
# Format: [timestamp] username: action
```

The [[guestbook-add-script|add script]] appends entries like `[2026-08-05 14:30:22] brennan: Added entry` to the log file.

This audit trail prevents anonymous entries and makes it easier to identify abuse or spam.

See [[guestbook-maintenance]] for log rotation strategies to prevent the file from growing too large.

[tildeverse-guestbook]: tildeverse-guestbook "Tildeverse Guestbook"
[guestbook-add-script]: guestbook-add-script "Guestbook Add Script"
[guestbook-maintenance]: guestbook-maintenance "Guestbook Maintenance"
