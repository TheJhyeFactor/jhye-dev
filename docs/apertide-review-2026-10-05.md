# Apertide review and portfolio replacement

Reviewed 5 October 2026, Australia/Sydney.

## Reviewed version

- Local source: `~/Developer/apertide/editor`, branch `codex/apertide-foundation`.
- Latest custom commit: `e8dc42c792542f8311d74194234f3a42d07372ca`, 4 October 2026, 19:29 AEDT.
- Workbench: `0.2.0`, on the Code-OSS 1.141.0 development source.
- Installed app: `~/Applications/Apertide.app`.
- GitHub fork: <https://github.com/TheJhyeFactor/apertide>.
- Remote inspection returned only `main`; the custom branch is local. The GitHub link is a fork reference, not a public source release of the custom implementation.

## Assessment

Apertide is a working local alpha that brings tool reports, source review, optional local inference, explicit change review and actual check results into one editor. Its strongest present portfolio evidence is the extension architecture, provenance handling, native diff/application path, process lifecycle controls and packaged runtime verification.

The latest revision substantially improves the workflow: compact navigation replaces the earlier landing-style Desk; findings have a separate source inspector; project inspection shows actual root files and npm scripts without a model. These are useful capabilities when Ollama is unavailable.

General editing, debugging, Git and terminal functionality come from Code-OSS. The custom contribution is the Apertide Workbench, workflow integration, identity/themes and native packaging. No unique-market-position, production-readiness, scanner accuracy or real vulnerability-remediation claim follows from this review.

## Recent custom work

| Commit | Change |
| --- | --- |
| `e8dc42c7925` | Source-focused review console, model-independent root-file inspection, numbered finding previews, compact navigation, neutral Graphite/Paper themes, duplicate-initialisation and application-confirmation guards |
| `151152c973a` | Recorded installed-app update verification and the need to close the old app before replacing its bundle |
| `334ab38ea16` | SARIF workflows, explicit-context local inference, reviewed changes, fixed checks, evidence journal/export, GitHub reads and original controls |
| `6c469951c15` | Apertide identity, initial Desk, workspace modes, themes and native packaging foundation |

## What works now

| Capability | Actual behaviour | Practical boundary |
| --- | --- | --- |
| Project inspection | Recognised root files, declared npm scripts and their manifest source | Explicit refresh; no recursive architecture inference or script execution |
| Findings | SARIF 2.1.0 import, provenance, deduplication, search/status filters, source navigation and nearby preview | Supported local-location subset; existing in-workspace files required; rejects external symlinks |
| Triage | Open, Reviewed and Dismissed states persist | Reviewed is human triage, not verified remediation; findings are workspace-wide |
| Local assistant | Explicit source/finding capture, visible preview, streamed Ollama answers and cancellation | Uses loopback Ollama and installed models; does not execute generated tools or index the project automatically |
| Source proposals | Complete single-file replacement, native diff, explicit apply, source-hash checks around confirmation | Requires full-file context; applied editor edit is unsaved and undoable; opening a diff cannot prove a person read it |
| Checks | `node --check` for captured JavaScript and the selected folder's `npm test`; output, exit code, time, cancellation and owned-process cleanup | Host execution; 60-second limit; language-specific profiles and revision-linked checks remain incomplete |
| Evidence | Persistent mode journals; local JSON export of findings/provenance and current-mode events | Not tamper-proof; raw check output and finding messages still need review before sharing |
| Repository | Origin, branch, working-tree status and first ten open GitHub PRs using authenticated CLI | Read-only; no CI check view, PR diff/review submission, merge or push workflow |
| Workspace modes | Development and Assessment with separate conversations/journals; context clears on mode switch | Organisational modes, not host permission or remote authorisation boundaries |
| Native app | Apple Silicon bundle, Graphite/Paper themes, inherited editor/Git/terminal | Local unsigned development build; no public release |

## How to use the installed app

Launch it from Finder in `~/Applications`, or:

```sh
open "$HOME/Applications/Apertide.app"
```

1. Open a trusted local repository. Press **Cmd+Shift+P**, then run **Apertide: Open Desk**.
2. In **Project**, choose **Inspect root files**. Review actual files, npm script values and editor diagnostics.
3. For report review, switch to **Assessment** and select **Findings → Import SARIF**. Generate the report with an external scanner beforehand. Select a finding, preview/open its source and record triage.
4. For optional inference, check the local service, select an installed model and use **Assistant**. Ollama must be running at `127.0.0.1:11434`. Explicitly capture source or use a finding as context, then inspect the preview before asking.
5. To request an edit, capture the complete small source file, choose **Propose change**, open the diff and apply deliberately. Save the result. A selection-only context supports questions but cannot produce an applicable full-file proposal.
6. In **Checks & evidence**, check captured JavaScript or run workspace tests. Node/npm must be on the application's PATH. Workspace tests execute the repository's own npm script.
7. Inspect the journal, then **Export evidence** to a local JSON file. Source context and model conversation text are excluded by the exporter; tool messages/output are still report content.
8. In **Repository**, refresh through Git and an already authenticated GitHub CLI session. A GitHub.com origin is required. This does not post or change remote content.

## Remaining product work

The highest-value next milestone is one real, repeatable report-to-fix review with a source revision, reviewer decision, change, relevant check and scanner rerun linked together. Then add baseline comparison and one managed scanner adapter. Semgrep, Gitleaks, Trivy and ZAP adapters are planned, not current product integrations.

Remote-target declarations/enforcement, verified-resolution state, broader check profiles, a separately distributed GitHub plugin, secure distribution/update handling and signed/notarised packages remain unfinished. Current passing fixture tests cannot establish that a real finding was fixed. The full upstream suite and an application security audit have not been run. Upstream dependency warnings remain; no clean vulnerability status is claimed.

Operational bounds: 10 MB reports; 5,000 findings; first 200 filtered matches visible; 24,000 characters of source context; 48,000-character proposals; three-minute model requests; latest 40 conversation entries per mode and latest 400 journal events. Ordinary code can still contain sensitive values even with credential-path/private-key exclusions.

## Verification and image provenance

Fresh checks on 5 October:

- All **13 targeted unit tests passed**, including malformed SARIF, path/symlink rejection, provenance, inert manifest scripts, stream/cancellation handling, truncated proposals and actual check execution.
- Installed bundled extension integration passed **switch, restore and isolated** fresh-process phases, checking workflow persistence, source preview/project inspection, actual checks, mode separation and export. The earlier live-model run recorded the additional review/application guards; those conditional assertions were not rerun without inference.
- Installed packaged UI smoke passed the **non-inference** workflow with project inspection, SARIF/triage/source preview, repository reads, native navigation, themes, keyboard/reduced motion and exact terminal-output marker `APERTIDE_PTY_OK`. Zero renderer `pageerror` events. Ollama catalogue was available, but no fresh model generation was requested.
- The smoke emitted the existing upstream `DEP0169` warning about `url.parse()`; it was not a renderer exception or a clean security audit.

Prior evidence inspected: 4 October `docs/apertide/VERIFICATION.md`, integration/unit/build logs and actual packaged screenshots. That recorded run used installed `gemma3:12b` for explanation and a comment-only single-file proposal, native review/apply/save and a passing fixture npm test. Those are recorded results, not a new live-model rerun.

The four portfolio WebPs are size-optimised versions of the 4 October `research/review-console-screenshots` captures: `findings.png`, `graphite-development.png`, `review-diff.png` and `evidence.png`. All show a synthetic fixture in the real bundled application. The separate test-driver extension accounts for the development-host title. No real vulnerability or production data is portrayed.

## Portfolio changes

Replaced the Wixal project with `/work/apertide/`, updated About and the web résumé, added AI and cybersecurity classification, an optional case-study usage section, real screenshot captions, precise maturity/source status and a GitHub fork reference. Removed the three unused Wixal website image assets. The Wixal application and source were not part of the portfolio removal.

The generated sitemap and project navigation derive from the new slug. Earlier planning/research documents remain historical records.

Portfolio validation passed: `npm run typecheck`, `npm run lint`, `npm run build` and `git diff --check`; existing browsing journeys covering category/stage/search combinations, empty/reset states, URL restoration, keyboard controls, contribution evidence and static HTML; replacement checks on homepage, case study, About and web résumé at 320, 390, 760, 1024 and 1440 pixels. Images loaded, usage navigation worked, the sitemap included Apertide, Wixal was absent from generated public references and the old route was not exported. No horizontal overflow, page errors or failed asset requests occurred. Desktop/mobile case-study and usage screenshots were visually inspected.

Production release remains subject to the portfolio's documented release gate in `docs/deployment.md`.
