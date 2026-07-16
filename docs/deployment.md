# Deployment

## Production path

The site is published to GitHub Pages by `.github/workflows/deploy.yml`. A push to `main` runs `npm ci`, creates the static export with `npm run build`, and publishes `out/`.

Because `main` is the production trigger, review and validate redesign work on a feature branch before merging.

## Release checks

1. Run `npm ci` and `npm run build` with Node.js 20.
2. Review every public project link. A gated or unavailable build must not be labelled “Live product”.
3. Check Home, Work, About, Capabilities, and Contact at mobile and desktop widths.
4. Use keyboard-only navigation to verify the skip link, menu, calls to action, and project links.
5. Confirm the canonical URL, page title, description, Open Graph image, robots file, and sitemap in `out/`.
6. Review `git diff` for accidental assets, secrets, generated build output, or unrelated changes.
7. Merge to `main` only when the production release is approved.

## Content verification

Before changing a project status or claim, verify its destination and record the evidence in the pull-request description. Prefer operational facts over unverified commercial metrics. If a linked site becomes private or unhealthy, soften its label or remove the link until access is restored.

## Rollback

Revert the release commit on `main` and push the revert. GitHub Pages will republish the previous source state. Do not edit generated files in `out/` directly.
