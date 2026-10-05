# jhye.dev

Jhye O’Meley’s engineering portfolio, focused on software development, AI and cybersecurity. Built with Next.js and served by Vercel, with Privileged’s publishing backend on the same domain.

## Development

```sh
npm ci
npm ci --prefix notebook
npm run dev
npm run typecheck
npm run lint
npm run build
npm start
```

`npm start` serves the static export at http://localhost:3000. Use Node.js 20 or newer.

## Content

Edit `src/data/portfolio.ts` for projects, career chapters, transition drafts, contribution evidence and contact details. Real screenshots and photographs live in `public/images/work` and `public/images/career`.

- `/work`: five selected case studies, with area, project-stage and keyword filters.
- `/career`: linked experience timeline and six role pages.
- `/open-source`: six contributions grouped by status, with area, status, language and keyword filters.
- `/about`: personal narrative, capabilities and education.
- `/resume`: readable printable résumé.
- `/contact`: direct contact routes.

Keep dates and responsibilities grounded in the résumé. Transition reasons are currently editorial drafts requested by Jhye; confirm them before release. Do not invent client projects, photographs, commercial outcomes, compliance status or independent security verification.

Filters are stored in the URL for sharing and browser navigation. The complete indexes are included in the static HTML; filtering runs locally after hydration. Update the explicit focus, stage and language fields in `src/data/portfolio.ts` and the filter labels in `src/data/browse.ts` when adding work. Contribution statuses retain their recorded verification date.

Pushes to `main` deploy through Vercel after type checks, lint and the build. The GitHub Pages workflow is manual and retained for rollback exports. Prepare redesign changes through a PR before release.

See [architecture](docs/architecture.md), [design system](docs/ui-design-system.md), [research](docs/redesign-research.md) and [overhaul plan](docs/portfolio-overhaul-plan.md).

## Privileged notebook and publisher

`/research/` explains the notebook and links to `/privileged/` with a full-document navigation, preserving Privileged's own design. Its Next.js source is under `notebook/`. Install dependencies with `npm ci --prefix notebook`. The root build checks and exports it into `public/privileged/` before building the portfolio. Generated exports are ignored by Git.

The Login link opens `/privileged/login/`; the editor is `/privileged/admin/`. Password authentication and the content API are served by the Vercel project for jhye.dev. Posts, drafts and media persist in private storage. New publications appear on the next page load without rebuilding the static site. Sample stories have been removed and the evidence-backed Ollama story remains. See [publishing setup](docs/privileged-publishing.md) for the domain, storage, security and verification details.
