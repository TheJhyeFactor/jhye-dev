# jhye.dev review and complete overhaul plan

Reviewed 3 October 2026. Audience: prospective employers, engineering managers, technical interviewers and future teammates. Primary target: software developer roles, with AI and cybersecurity as explicit areas of focus and integrations/systems experience as supporting evidence.

## Recommendation

Rebuild the information architecture around a readable engineering portfolio. Lead with software engineering, then demonstrate AI and cybersecurity through specific projects and decisions. Give visitors a quick overview and a clear path into detailed evidence.

Proposed identity: **Software developer focused on AI and cybersecurity.** This is a statement of focus, not a claim of seniority, security accreditation, commercial AI adoption or employment as a cybersecurity specialist.

The site should answer five questions:

1. What kind of developer is Jhye?
2. What has he personally built or improved?
3. How does he reason about reliability, AI behaviour and security boundaries?
4. What professional experience and working habits does he bring to a team?
5. Where can I inspect the evidence, read his résumé and contact him?

## Review scope and evidence

- Read the live homepage and all six main views: Me, Work, Journal, Skills, Curious and Contact; inspected the project dialog and open-source presentation.
- Inspected desktop and narrow-screen layouts. DOM measurement at 1440px reported matching document width; a 390px in-session measurement also matched. Browser navigation changed the viewport override, so these observations are not a complete responsive regression test.
- Read the local content model, rendering components, CSS, metadata, sitemap, robots generation, architecture documentation and deployment workflow.
- Fetched origin. HEAD and origin/main match at 755df40. Existing local changes include the job tracker, header and stylesheet; preserve them during implementation.
- Checked all 27 project, experiment and contribution URLs defined as hrefs in portfolio.ts. All returned HTTP 200. This confirms reachability only, not feature operation, adoption or suitability for a public demo.
- Queried GitHub PR status for all nine currently displayed contributions and the additional W&B RAI Toolkit contribution.
- Read current local README/package information for Wixal and current local README for Sentinel Local. This was source review, not a fresh runtime test of either product.
- Prior career notes identify IntelliDesign and Traka/ASSA ABLOY experience. Reconcile this with the current résumé before publishing dates, titles or detailed claims.

## Current assessment

The visual foundation is clean and personable. The portrait, typography and restrained palette can carry forward. There is real material to work with: client delivery, software products and externally reviewable contributions. The weakness is the ordering and depth of that evidence.

| Area | Current observation | Effect on a hiring visitor | Required change |
| --- | --- | --- | --- |
| Positioning | Software & Systems Developer; summary leads with websites and SOVA hospitality work | AI/cybersecurity focus is largely invisible | Software engineering introduction with explicit AI and cybersecurity focus |
| First visit | Portrait and short introduction; work, skills and contact occupy separate views | Visitor must explore before forming a complete picture | Scrolling homepage with selected work, engineering evidence, experience and contact |
| Navigation | Main section controls below the content; fixed header provides contact and home | Important destinations appear late, especially on narrow screens | Visible top navigation with Work, About, Résumé and Contact |
| Projects | Eight featured projects, beginning with two hospitality engagements | Broad product catalogue obscures role relevance | Four carefully selected engineering stories; remaining work in a secondary index |
| Project depth | Modal with a cover image and short descriptive paragraphs | Explains purpose more than implementation, validation or ownership | Dedicated case-study URLs with annotated screenshots and technical reasoning |
| Technology | Disciplines also populate Built with | Categories such as Client delivery and Hospitality are presented as a stack | Separate stack, project category, responsibilities and lifecycle |
| Attribution | SOVA and individual contributions are described together | Exact personal ownership remains ambiguous | Explicit personal responsibilities, collaborators and third-party services |
| Open source | Nine entries of different statuses receive similar presentation | Accepted upstream work is diluted by pending/closed/fork work | Lead with merged upstream contributions; clearly label remaining work |
| Professional background | No visible employment timeline or education in the homepage views | Visitors cannot connect projects with workplace experience | Concise verified experience and education section plus résumé |
| Skills | Interactive technology descriptions, largely web stack | Missing connection between skills and proof; AI/security absent | Group capabilities by engineering work and link each to evidence |
| Collaboration | Generic capabilities and project-oriented contact copy | Little sense of communication, support, review or handover habits | Concrete examples of working with others and maintaining systems |
| Experiments | Eleven declared, six directly selectable in Curious | Larger count adds little useful evidence; rest not directly presented | Small secondary lab index with clear maturity labels |
| Journal | Three short general reflections | Limited evidence of detailed technical investigation | Prefer specific engineering notes attached to actual work |
| Search/finder | Local keyword routing | Takes prime space without helping evaluate the developer | Remove from the primary journey; any future AI feature should have a clear purpose |
| Search/share | Hash views and project modals; sitemap contains homepage only | No independent case-study URLs or tailored project previews | Static routes with project-specific metadata and sitemap entries |
| Documentation | Architecture lists routes that do not exist in src/app | Future work could follow an inaccurate map | Rewrite documentation around the implemented structure |
| Personal tools | Local job tracker is present in uncommitted work | Application administration is unrelated to the visitor journey | Keep it out of public portfolio navigation; choose appropriate handling before release |

A useful distinction: the current site is competent as an interactive introduction, but incomplete as a hiring portfolio. Adding more cards will not fix the missing career narrative and evidence.

## Proposed content structure

### Homepage /

A natural scrolling page with essential content available on arrival.

1. **Introduction:** name, role focus, concise value statement, smaller portrait, View selected work, Résumé and Contact actions.
2. **Evidence preview:** local AI tooling, security-aware systems work and merged contributions. Use a short sentence and source link for each, not decorative badges or unsupported counts.
3. **Selected engineering work:** Wixal, Sentinel Local, a verified software delivery project and one technical contribution story. Each preview explains the problem, personal contribution, key decision and maturity.
4. **Professional background:** concise progression through software development, integrations and technical delivery, verified against the résumé.
5. **How I work:** requirements clarification, review, testing, troubleshooting and handover, demonstrated through examples.
6. **Further work:** link to the full project index and a small set of engineering notes.
7. **Contact:** wording that welcomes engineering roles and collaboration, with email, GitHub and LinkedIn.

Proposed draft hero:

> Jhye O'Meley
>
> Software developer focused on AI and cybersecurity.
>
> I build practical software, local AI tools and connected systems. My work spans application development, API integrations and open-source fixes, with a focus on reliability, clear workflows and explicit security boundaries.

Validate the supporting experience before publication. Do not call Jhye a senior engineer, security auditor, penetration tester or machine learning researcher without evidence that supports those titles.

### Work /work

A curated project grid, ordered by relevance rather than by date or volume. Provide category filters only when the list is large enough to justify them. Use explicit categories, not substring matching against technology/discipline labels.

Recommended categories: AI tools, cybersecurity tooling, software systems, client delivery and experiments. Projects can have several categories. All core work remains visible without operating a filter.

### Case studies /work/[slug]

Shareable static pages using one consistent template, but enough flexibility for software, security tooling and open-source work.

### About /about

Professional narrative, verified experience timeline, education, technical capabilities and working style. Separate current interests from demonstrated experience. Confirm Diploma of Information Technology in Advanced Programming at TAFE NSW and expected May 2028 graduation against the current résumé.

### Engineering notes /notes

Optional secondary content: specific debugging stories, system decisions and lessons tied to a repo, PR or case study. Do not delay the first release for a large writing programme.

### Contact /contact

Simple contact details and a relevant invitation to discuss engineering roles, AI tooling, software systems or collaboration. No enquiry form backend is needed for the initial release.

### Résumé

A prominent link to an accessible, current PDF. Verify dates, qualification wording and personal facts. A compact HTML experience section provides context without requiring a download. Decide whether to publish personal phone/contact details before exporting a public copy.

## Selected-work priorities

| Candidate | What it can demonstrate | Evidence needed for the case study | Recommended placement |
| --- | --- | --- | --- |
| Wixal | Local model integration, streaming/tool calls, Electron architecture, persistence, PTY integration and reviewed actions | Real app screenshots; main/preload/renderer diagram; tool flow; examples of failure handling; current checks; limits | Lead AI engineering case study |
| Sentinel Local | AI-assisted cybersecurity workflow, target scope, approval gates, persistent evidence and operator oversight | Sanitised console views; policy and approval flow; scope checks; audit record example; meaningful verification; explicit limits | Lead cybersecurity tooling case study |
| Ollama #17259 | Reliability bug in an AI runtime: stall detection before the first byte | Linked merged PR; reproduction; code reasoning; regression verification | Homepage proof and engineering story |
| Crush #3370 | Profiling and reducing unnecessary LSP discovery work in an AI coding tool | Linked merged PR; controlled benchmark method/results; clear scope of improvement | Homepage proof and engineering story |
| W&B RAI Toolkit #48 | Testing an OpenAI-compatible adapter contract | Linked merged PR; exact test scope; AI-assistance attribution where relevant | AI engineering evidence; consider replacing a weaker entry |
| TripMate | Operational state, roles, integrations and full-stack implementation | Verify actual architecture and feature state; real screens; personal ownership; testing and release evidence | Software delivery case study if source review supports current descriptions |
| Traka integration work | APIs, failure investigation, customer systems and technical handover | Current résumé plus a concrete disclosable example; exact personal role; sanitised data-flow diagram | Experience story or case study if shareable |
| Finest Group / Bridges Hill Bistro | Real client delivery and operational controls | Exact personal development scope, actual stack and screenshots; maintain SOVA media attribution | Secondary client-delivery evidence |
| Hunter Valley Prestige Wine Tours | Requirements, booking workflow and distinction between requests and confirmation | Actual journey screens, personal decisions and tested behaviour | Secondary client-delivery evidence |
| Buildly, TradieFlow, QuickMeet, Castivo, PC Choices | Additional breadth | Per-project maturity, ownership, working screens and accurate links | Secondary index; elevate only with stronger evidence |
| PiStorm or other cyber labs | Potential lab/hardware learning | Current code, authorised scope, observed operation, honest hardware limitations | Optional lab entry after validation |

For the first release, target three substantial product/system case studies plus a compact merged-contribution section. A fourth case study should be added only when it improves the evidence.

Sentinel Local is engineering evidence about an operator tool. Its existence does not establish professional penetration-testing outcomes or an independent security assessment. Wixal uses Ollama; it does not demonstrate training a foundation model. Explain these boundaries as part of thoughtful engineering.

## Case-study specification

Every major case study should contain:

1. **At a glance:** what it is, intended users, lifecycle, dates, personal role, actual technologies and available evidence.
2. **Problem and constraints:** concrete task, environment and practical limits.
3. **Personal contribution:** components implemented and decisions owned; distinguish team work and dependencies.
4. **System overview:** compact architecture or data-flow diagram with labelled boundaries.
5. **Three key decisions:** alternatives considered, chosen approach and consequences. Examples might include local inference, explicit tool review, durable session state or request retry behaviour; use only decisions supported by the actual work.
6. **Walkthrough:** three to five annotated screenshots showing a complete user workflow. Use real content safe to publish.
7. **Reliability and security:** failure paths, validation, permissions, secret handling, approvals and remaining limitations where relevant.
8. **Verification and result:** what was exercised, what changed and what remains unknown. Distinguish a passing test, a released build and actual user/business outcomes.
9. **Reflection:** what would change next and why.
10. **Evidence links:** live site, repo, PR or demonstration, labelled by destination. Private work can use sanitised evidence without exposing a repository.

For open-source stories, favour a shorter problem → investigation → fix → regression check → outcome format rather than forcing a product walkthrough.

Avoid repeating the same abstract problem statement across every project. Show precise examples: a model requests a write, a download connects but sends no byte, a driver receives a trip update, or a user changes a booking request.

## AI focus

Show AI systems engineering through observable mechanisms:

- Local Ollama integration and streaming responses.
- Tool schemas, input validation and model-requested action review.
- Persistence and context limits.
- Recovery from malformed calls, interruption and runtime errors.
- Human review of proposed edits and commands.
- Evaluation: specific reproducible tasks and failure cases, with model/runtime versions when results depend on them.

Select two or three mechanisms per case study and explain them well. Do not publish a general AI capability list detached from evidence. Avoid adding a portfolio chatbot merely to signal AI interest.

## Cybersecurity focus

Demonstrate security reasoning rather than an aesthetic:

- Threat and trust-boundary discussion for an actual tool.
- Separation of model suggestions from execution authority.
- Scope validation and clear operator approvals.
- Audit and evidence handling.
- Sanitised reproduction of a relevant failure path or lab finding.
- Limitations: what approvals do not prevent, which shells retain host access and what has not been independently assessed.

Keep professional employment, product safeguards, authorised labs and current learning distinguishable. No invented certifications, compliance status, vulnerabilities, client assessments or security outcomes. Workplace material needs a shareable scope before publication.

## Open-source status review

Verified through GitHub API on 3 October 2026:

| Contribution | Current status | Presentation |
| --- | --- | --- |
| charmbracelet/crush #3370 | Merged | Featured upstream contribution |
| charmbracelet/crush #3372 | Open | Proposed work, separate from accepted contributions |
| charmbracelet/crush #3378 | Open | Proposed work |
| ollama/ollama #17258 | Open | Proposed work |
| ollama/ollama #17259 | Merged | Featured upstream contribution |
| ollama/ollama #17260 | Open | Proposed work |
| open-telemetry/opentelemetry-go #8634 | Merged | Engineering/CI evidence |
| pyinstaller/pyinstaller #9485 | Closed, unmerged | Omit from featured evidence or explain as a closed proposal |
| SaifuddinM23/appsmith #1 | Open against a fork | Label as fork work; do not imply accepted upstream Appsmith contribution |
| wandb/rai-toolkit #48 | Merged | Additional AI testing evidence, currently missing from the site |

Existing current status labels mostly match GitHub. The issue is hierarchy and the context of the fork contribution, not a blanket problem of incorrect merge labels. Recheck statuses before release. Keep benchmark claims limited to the tested workload rather than overall product speed or internet bandwidth.

## Visual direction

A personal engineering portfolio with a light neutral background, near-black text and one restrained accent colour. Preserve the portrait and personal voice. Use readable text, compact metadata and generous space around substantive evidence.

- Desktop hero: concise narrative/actions on one side, smaller portrait or a real product visual on the other.
- Mobile: single-column story and stacked selected-work cards.
- Give project screenshots their own image area. The current text-over-image treatment makes both the interface and copy harder to inspect.
- Use real interface captures, annotated diagrams and code excerpts where they explain something.
- Use normal document scrolling. Avoid nested scrolling and horizontal carousels for essential work.
- Replace the giant watermark and prominent finder with useful work/experience content.
- Put title, responsibility and engineering takeaway on each work preview. Keep stack/status as supporting metadata.
- Use interaction for useful detail, such as an expandable implementation note, without concealing the main story.
- Avoid decorative hacker terminals, lock icons and security-score claims as substitutes for evidence.

## Implementation plan

### Phase 1: Evidence and editorial preparation

- Preserve existing local edits and inspect their intended scope before making a new implementation branch.
- Inventory source repositories, current screenshots, public links, résumé and shareable workplace examples.
- Review Wixal and Sentinel source paths and exercise selected workflows before recording public demonstration claims.
- Decide which software-system project has enough ownership and validation evidence to accompany them.
- Write three case studies, concise experience copy and hero text. Mark evidence gaps explicitly.
- Confirm any personal facts and workplace disclosures needed for public copy.

### Phase 2: Build the new structure

Keep the existing Next.js static-export foundation and GitHub Pages deployment. There is no demonstrated reason to migrate frameworks or introduce a backend for this overhaul.

- Build scrolling homepage, visible navigation and shared footer.
- Add /work, /work/[slug], /about and /contact; add /notes only if useful content is ready.
- Extend content types: categories, technologies, responsibilities, collaborators, lifecycle, evidence links, verification, limitations and screenshot captions.
- Generate static case-study routes and metadata from structured content.
- Separate the personal tracker from public navigation and establish its intended privacy before release. Removing navigation alone does not make a deployed page private.
- Provide a verified public résumé PDF and accessible HTML experience overview.
- Preserve old hash entrypoints with aliases to the corresponding new homepage sections, or appropriate migration handling where hashes map to dedicated routes.

### Phase 3: Polish and verification

- Run npm run typecheck, npm run lint, npm run build and git diff --check.
- Browser-check fresh arrivals, direct case-study links, history/back behaviour, contact and résumé links.
- Check desktop, tablet and mobile, including widths around 760px and 1024px; verify overflow, card wrapping, image crop, heading layout and header collisions.
- Verify keyboard navigation, focus visibility, heading hierarchy, contrast and reduced-motion behaviour.
- Review rendered case-study content against evidence and source attribution.
- Check metadata, canonical URLs, OG images, robots and sitemap for the actual routes.
- Rewrite architecture/design documentation to match the build.
- Review any existing analytics and measure useful actions such as case-study visits and résumé clicks with an appropriate privacy approach.

### Phase 4: Review and release

Prepare a concrete local preview and reviewable diff/PR. Publish only after release authorisation. Monitor GitHub Pages to completion and inspect distinctive live content, static assets and representative interactions.

## Acceptance criteria

- A first-time visitor can identify software engineering, AI and cybersecurity as the focus without opening a menu or filter.
- Selected work and merged contribution evidence are visible in the homepage reading path.
- Three case studies explain personal contribution, technical decisions, validation and limitations.
- Every featured project has a direct, shareable URL.
- Every claimed skill has supporting work or is explicitly presented as learning.
- Experience and education match the verified résumé.
- No proposed/fork contribution is presented as merged upstream work.
- No prototype is described as a commercially adopted product without evidence.
- Project images show actual work and their captions preserve correct ownership/provenance.
- Résumé and contact are easy to find on desktop and mobile.
- The application tracker is handled intentionally before release and omitted from the hiring journey.
- No essential project is hidden behind a horizontal carousel or multiple nested tabs.
- Required build checks and representative browser journeys pass.

## Remaining editorial inputs

These do not block the architectural plan, but are required before final public copy:

- Current résumé with correct employment dates, job titles and education.
- Which workplace examples can be discussed publicly, and how specifically.
- Exact personal ownership and present functionality of the chosen software-system project.
- Fresh screenshots and repeatable workflow evidence for Wixal and Sentinel Local.
- Whether each repository, demo and app download is suitable for public sharing.
- Desired location/work arrangement and availability wording, if included.

## Proposed next deliverable

A local homepage and case-study preview implementing this structure, led by Wixal, Sentinel Local and the strongest verified software-system project, with merged upstream work prominently visible. Complete the evidence and copy first, then refine the visual design around it.
