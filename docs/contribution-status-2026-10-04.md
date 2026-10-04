# Contribution status audit — 4 October 2026

Live GitHub API checks covered pull requests, merge timestamps, workflow results, issue comments, release metadata and commit ancestry. Released means the merge commit is an ancestor of the linked non-draft, non-prerelease published tag. These are verified containing releases, not necessarily the first containing releases. This does not independently test release binaries or establish that a change was never later reverted.

| Contribution | Merge commit | Current status / containing stable release |
| --- | --- | --- |
| Ollama #17259 | 4d1b53e6fb935fb93962cc4689da3ac9320ec87d | Merged 21 July 2026; v0.35.1 |
| Crush #3370 | cc971bd60d54d660632bd12c0fb83dbcd33f06ea | Merged 24 July 2026; v0.97.1 |
| W&B RAI Toolkit #48 | ce4e66518806106df3f30888b42f2877e211cab8 | Merged 4 September 2026; v0.3.0 |
| OpenTelemetry Go #8634 | 4298b77c057ebb539613ecfa3f6d13b0a586fffa | Merged 14 August 2026; v1.47.0 |

All four compare API calls returned `ahead` for merge commit to release tag. W&B's earlier v0.2.0 and OpenTelemetry's v1.45.0 comparisons returned `behind`, confirming that the comparison distinguishes tags predating the contribution.

ZAP zap-extensions #7785 remains open and unmerged. CLA and Checkmarx pass. Java CI and CodeQL remain action_required (maintainer approval required).

ZAP issue #9476 was closed as completed at 2026-10-03T14:52:49Z. The maintainer's final comment thanks TheJhyeFactor. The site retains investigation attribution rather than claiming a merged patch.

NVIDIA garak #1079 remains open; no PR by TheJhyeFactor was found and there is no maintainer response after the scope proposal. The site retains local-prototype status and refreshes its checked date.
