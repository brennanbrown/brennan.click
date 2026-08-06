---
title: Minimal CGI Script
type: snippet
symbol: "🜃"
date: 2026-08-01
tags: [web, servers, python]
themes: [aries, saturn]
---

The whole [[cgi-scripts|CGI]] contract in one script: read the environment, print headers, print a blank line, print a body.

```python
#!/usr/bin/env python3
import os

query = os.environ.get("QUERY_STRING", "")

print("Content-Type: text/plain")
print()
print(f"Hello from CGI. Query string: {query}")
```

Apache or any CGI-capable server sets `QUERY_STRING`, `REQUEST_METHOD`, `REMOTE_ADDR`, and the rest of [RFC 3875](https://www.rfc-editor.org/rfc/rfc3875)'s meta-variables before exec'ing the script.

Never do this in a shell script, sandboxing backticks against injection is close to impossible. See [[cgi-in-2026]] for the rest of the security story and [[shell-script-cgi-security]] for more on why shell scripts are particularly risky.

[cgi-scripts|CGI]: cgi-scripts "CGI Scripts"
[cgi-in-2026]: cgi-in-2026 "CGI in 2026"
