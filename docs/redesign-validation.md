# Redesign validation

Verified 3 October 2026 in the isolated `codex/engineering-portfolio-overhaul` worktree.

## Automated checks

- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed; 17 content pages plus static metadata/error routes.
- `git diff --check`: passed.
- Exported HTML check: all internal routes, referenced assets and local anchors exist across the 17 content pages.

## Browser checks

- All 17 content pages loaded at 1440px and 390px. One h1 per page, no horizontal overflow and no broken loaded images.
- Homepage checked at 760px, 761px, 820px and 1024px, with no horizontal overflow.
- Mobile navigation opens, follows Career, closes on navigation, and allows a role to be selected from the timeline.
- IntelliDesign chapter displays the résumé dates and the visibly labelled draft transition.
- Desktop and mobile homepage and mobile role-page layouts visually inspected. Additional project/career screenshots retained in the original workspace output folder.
- No captured browser log entries at the final desktop review.

These checks verify portfolio presentation and navigation, not the operation of every featured product.

## Dependency maintenance

`npm audit fix` refreshed compatible lockfile versions, including Next.js 16.3.8. The production-dependency audit now reports zero critical alerts and five high alerts in the braces/globbing/Tailwind build-tool dependency chain. The reported automatic remedy involves a breaking Tailwind upgrade, so no forced major migration was performed during this redesign. The portfolio is a static export; this does not remove the need to maintain the build toolchain.

## Editorial review remaining

- Four past-role departure reasons are requested editorial drafts, visibly labelled in the role pages and excluded from the résumé.
- No employer-specific photographs were supplied. The Tokyo photo is captioned as personal context, and employer work areas use résumé-derived descriptions.
- Private product repositories are not linked or distributed through the portfolio.
- The personal application tracker and unrelated local changes remain in the original checkout and are not included in this branch.
