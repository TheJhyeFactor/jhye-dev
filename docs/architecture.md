# Portfolio architecture

Next.js App Router with static export and GitHub Pages deployment. No backend is needed for the portfolio.

- `/`: scrolling overview of focus, selected projects, merged contributions, career and working style.
- `/work` and `/work/[slug]`: curated projects and static case studies.
- `/career` and `/career/[slug]`: six roles, linked timeline and detailed chapters.
- `/open-source`: accepted upstream work with problem, change, result and evidence links.
- `/about`: narrative, capabilities and education.
- `/resume`: readable and printable HTML résumé.
- `/contact`: email, GitHub and LinkedIn.
- `src/data/portfolio.ts`: typed content and provenance-aware lifecycle information.
- `src/components/Header.tsx`: responsive client navigation; content pages render on the server.
- `src/app/sitemap.ts`: all public content routes.

The primary narrative remains readable without client-side content switching. Old `#projects`, `#opensource`, `#career`, `#skills` and `#me` links target corresponding homepage sections. A public application tracker is not included in this worktree/release.

Employer dates and responsibilities follow the current résumé. Departure wording is a visible draft and must be confirmed before release. Personal project work is distinct from employer projects. Avoid unsupported adoption, compliance, security or business-impact claims.

Quality checks: `npm run typecheck`, `npm run lint`, `npm run build`, `git diff --check`, and desktop/mobile browser checks. Changes land through a reviewed GitHub PR; merging `main` deploys GitHub Pages.
