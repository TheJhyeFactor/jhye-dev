# Changelog

## 2026-07-17

- Replaced the simulated homepage portfolio assistant with a direct editorial homepage for hiring-manager scanning.
- Unified homepage navigation and visual language with the Work, About, Capabilities, and Contact routes.
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
