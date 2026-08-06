---
title: Guestbook Add Script
type: snippet
symbol: "🜃"
date: 2026-08-05
tags: [servers, shell, tildeverse]
themes: [aries, saturn]
---

Shell script for adding entries to a [[tildeverse-guestbook|tildeverse guestbook]] with logging and attribution.

```bash
#!/bin/sh
# Guestbook entry script with logging
# Usage: ./guestbook-add.sh

GUESTBOOK="$HOME/guestbook.txt"
LOGFILE="$HOME/guestbook.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')
USERNAME=$(whoami)

# Check if guestbook exists
if [ ! -f "$GUESTBOOK" ]; then
    echo "Error: Guestbook file not found at $GUESTBOOK"
    exit 1
fi

# Log the action
echo "[$DATE] $USERNAME: Added entry" >> "$LOGFILE"

# Create temp file for content validation
TEMPFILE=$(mktemp)

# Prompt for entry (if interactive) or read from stdin
if [ -t 0 ]; then
    echo "Enter your guestbook entry (press Ctrl+D when done):"
    cat > "$TEMPFILE"
else
    cat > "$TEMPFILE"
fi

# Add separator and entry
echo "" >> "$GUESTBOOK"
echo "---" >> "$GUESTBOOK"
echo "Added by $USERNAME on $DATE:" >> "$GUESTBOOK"
echo "" >> "$GUESTBOOK"

# Add the content
cat "$TEMPFILE" >> "$GUESTBOOK"
echo "" >> "$GUESTBOOK"

# Clean up
rm "$TEMPFILE"

echo "Entry added to guestbook!"
```

Works interactively or via pipe: `echo "Hello" | ~/guestbook-add.sh`

See [[guestbook-file-permissions]] for why the guestbook file itself should be read-only.

[tildeverse-guestbook]: tildeverse-guestbook "Tildeverse Guestbook"
[guestbook-file-permissions]: guestbook-file-permissions "Guestbook File Permissions"
