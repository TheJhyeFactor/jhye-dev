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

## Privileged notebook and publisher

`/research/` explains the notebook and links to `/privileged/` with a full-document navigation, preserving Privileged's own design. The independent Next.js source is under `notebook/`. Install its dependencies with `npm ci --prefix notebook`. The root build checks and exports it to `public/privileged/` before building the portfolio; generated exports are ignored by Git. Both GitHub Actions workflows install the notebook dependencies.

The footer Login link opens the authenticated [Privileged Publisher](https://privileged-publisher.ellyjane-luki.chatgpt.site). The publisher runs separately with D1 post storage, R2 media storage and Sign in with ChatGPT. It serves published posts anonymously to https://jhye.dev. Publish and unpublish take effect on the next page load without rebuilding this static site. Text, uploaded images/video and YouTube/Vimeo embeds are rendered as controlled content blocks. The sample stories have been removed; the evidence-backed Ollama story remains in source.

Edit public notebook presentation in `notebook/src`. Its browser tests are run against a standalone export without PRIVILEGED_BASE_PATH. `node scripts/verify-privileged.mjs` checks the completed root `out/` export for the portfolio entry link, independent notebook layout, embedded navigation and mobile rendering.
