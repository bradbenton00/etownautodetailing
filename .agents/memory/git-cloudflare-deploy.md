---
name: Git + Cloudflare deploy flow
description: How this site deploys and how to push from the workspace
---
- Site deploys via Cloudflare Pages connected to GitHub `bradbenton00/etownautodetailing` (main branch). Push to GitHub = auto-deploy.
- **How to push:** `git add/commit` works in ShellExec; pushing must use the `gitPush` callback (git-remote skill) in CodeExecution. Raw `git push` is blocked.
- Remote wrangler.toml is authoritative: `[assets] directory = "./dist/public"` with `not_found_handling = "single-page-application"` (no _redirects file needed). Don't recreate a conflicting local wrangler.toml.
- Static SEO: `script/build.ts` copies index.html as route fallbacks and injects per-route SEO overrides (see `seoOverrides` map). New SEO-relevant routes need: App.tsx route, build.ts routes list (+ seoOverrides if custom meta), and client/public/sitemap.xml.
- `dist/` is committed (Cloudflare may build itself with `npm run build`, but repo tracks dist too).
