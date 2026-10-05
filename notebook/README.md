# Privileged

Jhye’s personal security research blog and technical notebook. A minimal, text-first site built with Next.js App Router, TypeScript, Tailwind CSS, and Git-based Markdown/MDX content.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For the production build:

```bash
npm run build
npm start
```

## Publish an entry

Add a `.md` or `.mdx` file to `content/research/`, `content/notes/`, or `content/projects/`. The filename becomes the URL slug. Use lowercase letters, numbers, and hyphens.

```yaml
---
title: "The question I started with"
description: "A short summary of the investigation."
date: "2026-10-05"
category: "API security"
tags: ["api", "web"]
draft: false
demo: false
---
```

Write any structure you like after the frontmatter. No fixed research template is required. Categories and tags are derived from content; no extra registration is needed. `draft: true` omits an entry everywhere, including direct routes. Reading time is calculated automatically. The homepage shows the three newest research posts and two newest notes.

The sample stories have been removed. The original evidence-backed Ollama story remains as source content. New posts are written through the authenticated publisher linked in the footer and are loaded from its public API. Drafts and unused media stay private. The source deployed with jhye.dev is in its notebook directory; changes to this standalone workspace must be copied there before portfolio deployment.

Commit the file and rebuild/redeploy. No database, account, or CMS service is needed.

## Writing features

Fenced code blocks are highlighted with Shiki and have working copy buttons. Python, Go, C, C++, JavaScript, TypeScript, Bash, PowerShell, Rust, SQL, HTTP, JSON, and other Shiki languages are supported. Use `text` for terminal output. Optional line highlighting: ` ```typescript {2-4} `. GFM tables, blockquotes, lists, images, and links are supported.

MDX supports these components:

```mdx
<Callout title="Something worth keeping in mind">
  A note, with **Markdown** inside.
</Callout>

<Callout type="warning" title="Lab limitation">
  Describe what the evidence does and does not establish.
</Callout>

<RequestFlow />

<Figure
  src="/images/example.png"
  alt="Describe the screenshot"
  caption="What the screenshot demonstrates."
/>

<Video
  src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
  title="Descriptive video title"
/>
```

Save local screenshots and diagrams under `public/images/`. Ordinary Markdown image syntax works as well. MDX is executable author-owned content: only accept files from trusted maintainers, never render user-submitted MDX.

Second-level headings generate an article table of contents. Prefer plain text in heading names for predictable anchors.

## Profiles and deployment URL

Edit `src/lib/site.ts`. The defaults use Jhye’s provided profiles:

- https://github.com/TheJhyeFactor
- https://www.linkedin.com/in/jhye-o-meley-583223420/
- https://jhye.dev

Environment variables can override these values. The optional profile variables should be omitted to use the defaults, or explicitly blank to hide a link.

Set `NEXT_PUBLIC_SITE_URL` to Privileged’s actual public origin **before a production build**. Until a domain is configured, it defaults to `http://localhost:3000`, and the site blocks indexing. Canonical URLs, RSS links, sitemap URLs, and structured data use this origin. The personal portfolio domain is a profile link, not an assumed Privileged domain.

Routes:

- `/research`, `/notes`, `/projects`: category filters and search
- `/{kind}/{slug}`: individual MDX entries
- `/about`: personal introduction and profiles
- `/rss.xml`: RSS 2.0, real published entries only
- `/sitemap.xml`: public pages and real published entries
- `/robots.txt`: indexing policy
- `/og?title=...&kind=...`: generated 1200 × 630 social cards

## Validation

```bash
npm run typecheck
npm run lint
npm run build
npx playwright install chromium
npm test
npm run test:publishing
```

The Playwright suite starts the production server on port 4317 after a build. It checks desktop/mobile navigation, content routes, filters/search, copy buttons, anchors, metadata, RSS/sitemap, social cards, and horizontal overflow. Review screenshots are written under `artifacts/`; failures and traces are written under `test-results/`. The publishing check temporarily adds a real-entry fixture and a draft, builds and serves the app, verifies automatic routes/feed/category generation and 10 code languages, then removes both fixtures and restores the original build.

## Deployment

The app can be deployed as a standard Next.js application on a provider that supports the Node runtime. Install dependencies, configure the public URL, build, and serve with `npm start`. No deployment or publication has been performed by creating this workspace.
