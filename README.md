# jhye.dev

Jhye O’Meley’s engineering portfolio, focused on software development, AI and cybersecurity. Built with Next.js and exported to GitHub Pages.

## Development

```sh
npm ci
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

Pushes to `main` run type checks, lint, build and GitHub Pages deployment. Prepare redesign changes through a PR before release.

See [architecture](docs/architecture.md), [design system](docs/ui-design-system.md), [research](docs/redesign-research.md) and [overhaul plan](docs/portfolio-overhaul-plan.md).
