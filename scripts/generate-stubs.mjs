#!/usr/bin/env node
// Reads the interlinker plugin's `.dead-links.json` report and
// writes a minimal stub markdown file into src/notes/ for every broken
// wikilink that doesn't already resolve to a real note. Run this after a
// build so the report exists, then rebuild so the new stubs are picked up.
//
// Usage: node scripts/generate-stubs.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const reportPath = path.join(root, ".dead-links.json");
const notesDir = path.join(root, "src", "notes");

if (!fs.existsSync(reportPath)) {
  console.log("No .dead-links.json found - run a build first. Skipping stub generation.");
  process.exit(0);
}

const raw = JSON.parse(fs.readFileSync(reportPath, "utf8"));

// interlinker's `.dead-links.json` maps dead-link text to source files, but
// it isn't limited to `[[wikilink]]` syntax; it can also report ordinary
// broken internal links (see docs/SPEC.md §3). Only `[[wikilink]]`-style
// entries are ours to turn into stubs, so skip anything that doesn't match.
// Pull the slug out of the raw wikilink syntax: strip `[[`/`]]`/`!`, drop any
// `|alias` or `#anchor` suffix, then slugify.
function extractSlug(rawLink) {
  if (!/^!?\[\[.*]]$/.test(rawLink)) return null;
  const inner = rawLink.replace(/^!?\[\[/, "").replace(/]]$/, "");
  const name = inner.split("|")[0].split("#")[0].trim();
  if (!name) return null;
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const slugs = new Set(Object.keys(raw).map(extractSlug).filter(Boolean));

if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir, { recursive: true });

let created = 0;
for (const slug of slugs) {
  const filePath = path.join(notesDir, `${slug}.md`);
  if (fs.existsSync(filePath)) continue;

  const today = new Date().toISOString().split("T")[0];
  const content = `---
type: stub
symbol:
date: ${today}
---
`;
  fs.writeFileSync(filePath, content, "utf8");
  created += 1;
  console.log(`Created stub: src/notes/${slug}.md`);
}

console.log(`Stub generation done. ${created} file(s) created.`);
