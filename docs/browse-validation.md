# Work and Open Source browsing validation

Verified locally on 5 October 2026 on `codex/work-source-filters`, using the production static export served at `http://127.0.0.1:3100`.

## Required checks

- `npm run typecheck`, `npm run lint`, `npm run build`, and `git diff --check`: passed.
- All five case-study routes load, each with a single page heading. Homepage project and contribution previews still render.

## Browser checks

Automated Chromium journeys exercised the real pages, followed by visual inspection of desktop and mobile captures.

- Work: all area and stage options, combined category/stage/search filtering, technology search, case-insensitive multiword search, empty states and resets.
- Open Source: all area, status and language options, combined filters, PR-number search, empty states and resets. Released contributions render first, with submitted changes and investigations in separate labelled groups.
- URL behavior: filtered views survive reload; browser Back from a case study restores the prior filters. Invalid area/stage parameters fall back to the complete index. Reset preserves unrelated query parameters and the URL fragment.
- Keyboard: area selection works with Space; verification details open and close with Enter.
- Evidence: original GitHub titles, pull request/investigation links, four release links and the ZAP issue link remain available. Verification text and existing notes remain in native disclosure sections.
- Responsive checks at 320, 390, 760, 1024 and 1440 pixels: no horizontal overflow, clipped filter controls or filter controls below the 44px height target.
- With JavaScript disabled, all five projects and six contributions remain in the exported HTML, and native verification disclosures work.
- No captured browser errors or failed resource requests.

Local QA script and screenshots are retained under `tmp/browse-qa.cjs` and `output/browse-rebuild/`, outside the commit. These checks cover the portfolio, not operation of the featured products. Contribution claims and the existing 4 October 2026 status-verification date were preserved; no fresh upstream status audit was performed.
