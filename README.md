# jhye.dev

Personal portfolio for Jhye O'Meley, built with Next.js and exported as a static site.

## Local development

Requirements: Node.js 20 and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js. Create the production export with:

```bash
npm run build
```

The static output is written to `out/`.

Quality checks:

```bash
npm run lint
npm run typecheck
```

## Editing content

- Update projects, capabilities, skills, and shared profile details in `src/data/portfolio.ts`.
- Keep page-specific narrative in the relevant route under `src/app/`.
- Put project imagery in `public/images/projects/` and provide useful alternative text where it is rendered.
- Update route metadata whenever a page's purpose or primary message changes.

Do not add usage, customer, revenue, security, or performance claims without evidence. A “Live product” label means only that the linked build is publicly reachable.

## Documentation

- [Architecture](docs/architecture.md)
- [UI design system](docs/ui-design-system.md)
- [Deployment](docs/deployment.md)
- [Changelog](docs/changelog.md)
