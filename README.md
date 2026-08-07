# epedev-site

Portfolio (single page: hero / projects / contact) + blog (markdown → static
pages). Terminal aesthetic, navy/blue/amber, no CMS, no database, no server
at runtime.

## Verified before shipping

I ran this myself, not just written and handed over:

- `npm install` — clean, 117 packages
- `npm run build` — compiles, generates 4 static routes including the
  `hello-world` blog post via `generateStaticParams`
- Output inspected: `/`, `/blog`, `/blog/hello-world`, `/404` all present
  as static HTML with correct content, not empty shells
- **Caught and fixed:** original `next` version pinned (14.2.5) had a
  disclosed CVE. Bumped to 14.2.35 (current patched release) before
  handing this over. A static export has no live server so the RSC RCE
  vector doesn't apply here at runtime, but there's no reason to ship a
  flagged dependency version regardless.

## Run it

```bash
npm install
npm run dev
```
Open `http://localhost:3000`. `/` is home, `/blog` is the post list.

## Build + verify the actual static export (what GitHub Pages serves)

```bash
npm run build
npx serve out
```
`npm run dev` uses a live Next server — that is NOT what ships. Always
check `out/` before trusting a deploy.

## Add a post

New file in `content/posts/your-slug.md`:
```md
---
title: "Post title"
date: "2026-08-07"
excerpt: "One-line summary for the list page."
tags: ["tag1"]
---

Body in markdown.
```
`npm run build` picks it up automatically. Delete `hello-world.md` once
you've confirmed the pipeline works — it's a test post, not real content.

## Deploy to GitHub Pages

If you don't already have a workflow, minimal one:

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
Then enable Pages in repo settings → Source: GitHub Actions.

If you already have a deploy workflow for your current site, use that
instead — don't run two competing ones.

## Known gaps — my call, override if you disagree

- No page-load typewriter/radar animation. Your existing Terminal.tsx does
  this elsewhere; I didn't duplicate it here without direction on where
  it belongs.
- Project copy is curated per earlier review (no credential-leak-as-mistake
  framing, no unresolved-residual mention). If you want the raw
  warts-and-all version for the "digital notes" audience instead of the
  recruiter-facing version, say so — it's a copy change, not a rebuild.
- No contact form — static mailto/GitHub link only. A real form needs a
  third-party handler on a static site; didn't add it speculatively.
- Colors are literal values, not pulled from an existing design token
  file — I don't have your actual theme config.

## What's deliberately absent

MDX, remark/rehype, pagination, tag pages, RSS, search, syntax
highlighting. All of these are legitimate additions later — none of them
are justified by a two-post blog. Add when the content volume demands it,
not before.
