---
name: Git + Cloudflare deploy flow
description: How this site deploys (GitHub → Cloudflare Workers Builds) and pitfalls that break builds
---
- Commits via shell; push via the `gitPush` callback (git-remote skill). Remote wrangler.toml is authoritative; SEO route fallbacks are injected in `script/build.ts`.
- Cloudflare (Workers Builds, project "etownautodetailing") runs `npm clean-install` then `npm run build`, serving `dist/public`. Live site only updates when a Cloudflare build succeeds — a successful git push is NOT enough. Verify by curling the site and checking the hashed `/assets/index-*.js` bundle name changed.
- **Replit's package firewall corrupts package-lock.json for external CI**: locks generated here point `resolved` at `package-firewall.replit.local` and omit `resolved`/`integrity` for most entries, so Cloudflare's `npm ci` fails (EUSAGE "Missing X from lock file"). Repair: fill missing fields from the firewall's packuments (they carry real npmjs `dist.integrity`) and rewrite tarball URLs to `https://registry.npmjs.org/`. Validate with `npx -y npm@10.9.2 ci --dry-run` (Cloudflare's npm version) before pushing. Note: registry.npmjs.org DNS resolves to 127.0.0.1 in the workspace — direct verification against real npm is impossible.
- `bufferutil` is an optional native addon (via ws); keep it OUT of package.json — Replit npm won't record it in the lock, breaking `npm ci` remotely.
- Repo must stay a pure single-package site: Replit scaffold files (pnpm-workspace.yaml, pnpm-lock.yaml, .npmrc, artifacts/, lib/, etc.) are gitignored — never commit them or Cloudflare's build breaks.
- Cloudflare's SPA fallback returns HTML with 200 for missing files — check `content_type`, not status code, when verifying assets deployed.
- User has dashboard access; build error logs are only visible there ("Latest build failed" badge → build log).

**Why:** Aug 2026 incident — site appeared "not pushed" for hours; pushes were fine but every Cloudflare build failed on lock-file sync caused by npm version differences.
**How to apply:** After any dependency change, regenerate the lock with npm 10.9.2 before pushing; always verify deploys by bundle hash, not by push success.
