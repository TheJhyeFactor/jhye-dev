# Portfolio architecture

## Overview

The site is a statically exported Next.js portfolio. It is intentionally content-led: project data is defined once, page components render that data, and the final `out/` directory can be hosted without an application server.

## Main surfaces

- `src/app/page.tsx` — minimal server-rendered entrypoint for the interactive home.
- `src/components/InteractivePortfolio.tsx` — client-side portfolio views, hash navigation, local section finder, and project details.
- `src/app/portfolio/page.tsx` — public product, client, and experiment index.
- `src/app/about/page.tsx` — biography, principles, and technical toolkit.
- `src/app/services/page.tsx` — capabilities and suitable engagement types.
- `src/app/contact/page.tsx` — direct, truthful contact routes.
- `src/data/portfolio.ts` — source of truth for projects, capabilities, and skills.
- `src/app/globals.css` — visual tokens and shared responsive patterns.

The home screen uses progressive disclosure: its five views swap in place and sync to URL hashes such as `#projects`. The finder is deterministic local navigation, not an AI chat service. Canonical routes remain available for search indexing, direct links, and a complete non-interactive reading experience.

## Content rules

Project lifecycle labels describe build and deployment state only. Do not add customer, revenue, usage, or performance claims without evidence. Keep project descriptions concise and update `src/data/portfolio.ts` rather than duplicating content between pages.

## Delivery

`npm run build` produces a static export in `out/`. Pushes to `main` run the GitHub Pages workflow in `.github/workflows/deploy.yml`.
