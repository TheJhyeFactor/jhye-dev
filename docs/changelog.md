# Changelog

## 2026-10-01

- Replaced the homepage portrait with the supplied current headshot, optimised as WebP.
- Updated the introduction to describe website, business-software, and systems work.
- Added The Finest Group and Hunter Valley Prestige Wine Tours from SOVA’s current main branch, using actual project screenshots.
- Kept Bridges Hill Bistro inside the Finest Group engagement and credited photography/video to SOVA.
- Repaired links to removed routes using the existing hash-based views.
- Updated verified merged PR statuses for Crush #3370, Ollama #17259, and OpenTelemetry Go #8634.
- Added a client-delivery project filter and updated page metadata.


## 2026-07-17

- Restored the Apple-style interactive homepage with centered portrait, name watermark, and bottom section menu.
- Kept the hiring-manager improvements in the interactive experience: clear project evidence, corrected counts, direct route links, and honest guided navigation copy.
- Added user, role, shipped-scope, and next-step context to featured project case studies without adding unsupported metrics.
- Corrected project counts, restored Capabilities navigation on mobile, added favicon metadata, and added lightweight analytics events for project and contact clicks.
- Removed duplicate unused homepage/data/documentation artifacts.

## 2026-07-16

- Reworked the homepage into a minimal, stateful portfolio inspired by aaabadcode.com's interaction pattern while preserving Jhye's own content and identity.
- Added hash-addressable Me, Projects, Skills, Curious, and Contact views plus an accessible project-detail dialog.
- Added a new matching social preview card and retained canonical routes for SEO and full project reading.
- Reframed the portfolio around a clear product-and-engineering point of view.
- Rebuilt the home, work, about, capabilities, and contact pages with an editorial responsive system.
- Centralised project and capability content in `src/data/portfolio.ts`.
- Removed the simulated contact-form success flow in favour of direct contact routes.
- Added canonical metadata, robots, sitemap, and a site-specific social preview image.
- Added architecture and UI design-system documentation.
- Removed unused legacy neon/animation components from the previous design direction.
- Added a project README and production release runbook.
- Converted featured project covers to WebP, reducing their combined transfer size from about 11 MB to under 650 KB.
- Upgraded Next.js and React, restored ESLint and type-check scripts, and resolved the dependency audit findings.
