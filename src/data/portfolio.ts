export type GalleryImage = { src: string; alt: string; caption: string };
export type WorkFocus = "ai" | "security" | "client";
export type WorkStage = "prototype" | "local-tool" | "client-work";
export type ContributionFocus = "ai" | "security" | "tooling";
export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  category: string;
  focus: WorkFocus[];
  stage: WorkStage;
  status: string;
  year: string;
  image: string;
  alt: string;
  caption?: string;
  summary: string;
  takeaway: string;
  role: string;
  stack: string[];
  problem: string;
  contribution: string;
  flow: string[];
  decisions: { title: string; body: string }[];
  usage?: { title: string; body: string }[];
  gallery: GalleryImage[];
  verification: string;
  limits: string;
  next: string;
  links: { label: string; href: string }[];
};
export type CareerRole = {
  slug: string;
  company: string;
  title: string;
  type: string;
  start: string;
  end: string;
  location: string;
  theme: string;
  summary: string;
  intro: string;
  responsibilities: string[];
  areas: { title: string; body: string }[];
  skills: string[];
  reflection: string;
  transition: string;
  photos: GalleryImage[];
  related: string[];
  source: string;
};
export type Contribution = {
  status: "Merged" | "Released" | "Submitted for review" | "Investigation documented";
  release?: { label: string; href: string };
  validation?: string;
  issueHref?: string;
  slug: string;
  project: string;
  title: string;
  language: string;
  category: string;
  focus: ContributionFocus[];
  languages: ("Go" | "Java" | "Python")[];
  href: string;
  number: string;
  problem: string;
  change: string;
  result: string;
  note: string;
};

export const profile = {
  name: "Jhye O'Meley",
  email: "omeleyjhye@gmail.com",
  location: "Newcastle, Australia",
  github: "https://github.com/TheJhyeFactor",
  linkedin: "https://www.linkedin.com/in/jhye-o-meley-529960213/",
} as const;

export const projects: Project[] = [
  {
    slug: "garak-scan-planner",
    focus: ["ai", "security"],
    stage: "prototype",
    title: "garak scan planner",
    eyebrow: "AI security engineering",
    category: "AI",
    status: "Local prototype · Proposal published",
    year: "2026",
    image: "/images/work/garak-planning.svg",
    alt: "Scan planning workflow: audited static probes and local transformations produce workload counts without executing the configured target",
    caption: "Workflow illustration of the local prototype; not a garak application screenshot.",
    summary: "A Python prototype for NVIDIA garak that explains a supported scan workload before querying an AI target.",
    takeaway: "Making preparation boundaries explicit instead of assuming a replacement target makes every step local.",
    role: "Project direction and AI-assisted prototype development",
    stack: ["Python", "garak", "pytest", "JSON", "Local tokenizers"],
    problem: "LLM security scans prepare many inputs and request multiple generations. Operators need to understand that workload before execution. Counting raw prompts misses conversation turns and transformations; preparation code can also call external services independently of the target.",
    contribution: "I directed and developed, with AI assistance, a bounded CLI scan-planning prototype, tracking generator and separate JSON artifact. It supports 30 audited static probes and three local prompt transformations, reporting prepared inputs, unique conversations, requested generations and input size. Optional token counting uses a supplied local tokenizer file.",
    flow: ["Selected static probes", "Supported local transformations", "Prepared conversations", "Workload accounting", "Separate planning artifact"],
    decisions: [
      { title: "Bound the supported preparation", body: "An audited allowlist and rejection paths distinguish supported static preparation from adaptive or external workloads. Replacing the target alone does not establish an offline boundary." },
      { title: "Keep planning separate from findings", body: "The prototype avoids configured-target and detector execution. Planning artifacts contain workload statistics, without vulnerability findings, raw prompt text or exported prompt digests." },
      { title: "Make counts explainable", body: "Count complete prepared conversations and generation multipliers, respect caps and supported transformations, and use an explicit local tokenizer for optional token counts. These counts are not billed usage or measured cost savings." },
    ],
    gallery: [],
    verification: "The recorded relevant suite passed 1,730 cases, including 61 feature tests; three existing generator contract cases passed separately. Four real CLI scenarios exercised static counts, caps and transformations, local token counting and partial coverage. The configured synthetic loopback target received zero requests, and planning created no security report. Formatting, diff and dependency consistency checks passed.",
    limits: "This remains a local prototype with a public scope proposal, not a submitted or accepted upstream feature. Full repository tests remain unverified because of collection-time data downloads and missing optional audio dependencies. Adaptive and external preparation are explicitly unsupported. The four CLI scenarios establish the tested paths, not universal absence of side effects. No merge, release, adoption or cost saving is claimed. AI assistance was used during implementation and validation.",
    next: "Await maintainer direction on the proposed scope and command design, complete further review and required validation, and prepare a focused upstream contribution if aligned. Status checked on 4 October 2026.",
    links: [
      { label: "Feature proposal", href: "https://github.com/NVIDIA/garak/issues/1079#issuecomment-5968048348" },
      { label: "NVIDIA garak", href: "https://github.com/NVIDIA/garak" },
    ],
  },
  {
    slug: "apertide",
    focus: ["ai", "security"],
    stage: "local-tool",
    title: "Apertide",
    eyebrow: "Software engineering / AI & security",
    category: "AI & cybersecurity",
    status: "Local alpha · Code-OSS fork",
    year: "2026",
    image: "/images/work/apertide-findings.webp",
    alt: "Apertide review console showing an imported synthetic SARIF finding and numbered source preview",
    caption: "Packaged Apertide Workbench 0.2.0 with a synthetic report and source fixture. The separate test driver accounts for the development-host title.",
    summary:
      "An independent Code-OSS fork connecting security findings, source review, optional local AI and recorded checks in one editor.",
    takeaway:
      "Follow a finding into its source, review a change and retain what was actually checked.",
    role: "Fork development, workflow design and native packaging",
    stack: ["TypeScript", "Code-OSS", "Electron", "SARIF", "Ollama", "Node.js"],
    problem:
      "Scanner reports, source files, suggested fixes and test output often sit in separate tools. A useful review workspace needs to connect them while preserving report provenance and distinguishing an inspected finding, a proposed edit and a real check result.",
    contribution:
      "I developed the Apertide Workbench extension and product identity on top of Microsoft's Code-OSS editor. The latest 0.2.0 revision replaces a landing-style Desk with compact workflow navigation, a file-first findings queue, a separate source inspector and root project inspection. My work includes SARIF import and triage, explicit-context Ollama streaming, single-file proposals with native diff review, fixed local checks, persistent evidence journals, a read-only GitHub adapter, Graphite and Paper themes, and an Apple Silicon application build. Editing, debugging, Git and terminal foundations come from Code-OSS.",
    flow: [
      "Import findings",
      "Inspect source",
      "Review a change",
      "Run a local check",
      "Export evidence",
    ],
    decisions: [
      {
        title: "Make review useful without a model",
        body: "Project inspection lists actual root files and declared npm scripts without executing them. Findings preserve tool, rule and location provenance; nearby source preview, triage, checks and evidence export work independently of inference.",
      },
      {
        title: "Keep context and application explicit",
        body: "Only captured source and the current mode conversation are sent to local Ollama. The model cannot execute tools. Full-file proposals require native diff review and explicit application; source hashes are checked before and after confirmation. Applied edits remain unsaved and undoable.",
      },
      {
        title: "Record checks as evidence",
        body: "Fixed JavaScript syntax and workspace npm-test profiles retain real output, exit status and timing, with cancellation and a 60-second limit. Development and Assessment keep separate conversations and journals. A reviewed finding or passing test does not establish vulnerability remediation.",
      },
      {
        title: "Build on an existing editor responsibly",
        body: "The fork retains Code-OSS licensing and third-party notices while using independent branding and a bundled extension. GitHub reads use existing CLI authentication. Assessment mode organises a workflow; it does not change host permissions or authorise remote testing.",
      },
    ],
    usage: [
      { title: "Open a local workspace", body: "Launch Apertide, open a trusted project folder and choose Apertide: Open Desk from the command palette. Use Project → Inspect root files to see recognised manifests and declared npm scripts." },
      { title: "Review existing findings", body: "Switch to Assessment and import a SARIF 2.1.0 report generated by an external tool. Select a finding, preview or open its source, and record Open, Reviewed or Dismissed status. Imported locations must resolve to existing files inside the workspace." },
      { title: "Use local assistance when helpful", body: "Check the Ollama service, choose an installed model and explicitly capture source or a finding. Inspect the context preview before asking. A proposal needs complete-file context; open its diff, apply deliberately and save the edit." },
      { title: "Check and hand over", body: "Use Checks & evidence to check captured JavaScript or run the workspace's npm test, inspect the recorded result and export JSON evidence. Repository can refresh origin, branch, changes and up to ten open PRs through Git and an authenticated GitHub CLI." },
    ],
    gallery: [
      {
        src: "/images/work/apertide-project.webp",
        alt: "Apertide Project view listing real fixture files and the declared npm test script with its manifest source",
        caption:
          "Project inspection reads recognised root files and displays declared scripts as data. No model is needed.",
      },
      {
        src: "/images/work/apertide-diff.webp",
        alt: "Apertide native diff showing a model-proposed comment addition to a synthetic JavaScript function",
        caption:
          "Recorded 4 October smoke test: native review of a local model's comment-only proposal. This exercises the review path, not a real vulnerability fix.",
      },
      {
        src: "/images/work/apertide-evidence.webp",
        alt: "Apertide evidence journal showing the reviewed proposal, applied edit and successful fixture npm test",
        caption: "Recorded 4 October smoke test: actual check output and workflow events retained in the local evidence journal.",
      },
    ],
    verification:
      "Reviewed against local commit e8dc42c7925 on 5 October 2026. All 13 targeted unit tests passed, and the installed application's bundled extension passed fresh-process switch, restore and isolated-workspace integration phases. A fresh non-inference packaged UI run passed report review, project inspection, repository reads, themes and native terminal output without renderer exceptions. The recorded 4 October workflow additionally exercised Gemma 3 12B explanation and proposal generation, native diff/application/save and a real fixture npm test. Screenshots use synthetic fixtures; they establish those exercised paths.",
    limits:
      "A local Apple Silicon alpha without Developer ID signing or notarisation. The custom implementation remains on a local branch; the public repository currently exposes the upstream fork. Managed scanners, remote target enforcement, scanner baselines and verified-resolution tracking remain planned. Fixed checks and the native terminal execute with host permissions. The journal is not tamper-proof, model output is unverified, and the full upstream suite and a security audit have not been completed. Local inference does not establish that every upstream or third-party network path is local-only.",
    next: "Complete one real report-to-fix review with revision-linked evidence and scanner baseline comparison, then add one managed scanner adapter. Prepare the custom source, extension distribution review and signed packages for a public release.",
    links: [{ label: "GitHub fork · custom work local", href: "https://github.com/TheJhyeFactor/apertide" }],
  },
  {
    slug: "sentinel-local",
    focus: ["security", "ai"],
    stage: "local-tool",
    title: "Sentinel Local",
    eyebrow: "Cybersecurity tooling",
    category: "Cybersecurity",
    status: "Independent local tool",
    year: "2026",
    image: "/images/work/sentinel-console.jpg",
    alt: "Sentinel Local console with authorised loopback scope and operator agents",
    summary:
      "An AI-assisted operations console for scoped investigations, evidence and human approvals.",
    takeaway:
      "Connecting AI assistance with explicit scope, operator review and an audit trail.",
    role: "Application and policy-workflow development",
    stack: ["TypeScript", "React", "Express", "SQLite", "Ollama"],
    problem:
      "Security investigation produces commands, observations and hypotheses. When AI is involved, those need an explicit target boundary and a clear record of what an operator actually approved.",
    contribution:
      "I built the local console, persistent project and agent workflows, target intake, approval queue, evidence-review surfaces and centralised policy boundaries.",
    flow: [
      "Authorised scope",
      "Evidence intake",
      "Local agent review",
      "Operator approval",
      "Recorded result",
    ],
    decisions: [
      {
        title: "Make scope explicit",
        body: "Projects define allowed hosts and network boundaries. The service and model connection remain on loopback; target tools check the project scope.",
      },
      {
        title: "Separate suggestion from execution",
        body: "Structured agent tools request actions through policy checks. Network and higher-risk actions pause for review. A model response does not grant permission to act.",
      },
      {
        title: "Keep evidence traceable",
        body: "SQLite stores project activity, handoffs, tool requests, approvals and audit events. The review workflow distinguishes observations, hypotheses and gaps.",
      },
    ],
    gallery: [
      {
        src: "/images/work/sentinel-approvals.jpg",
        alt: "Sentinel Local Tools and approvals page in a clean demonstration project",
        caption:
          "The approval workbench in a clean local demonstration. No scan or finding is being claimed.",
      },
    ],
    verification:
      "The repository contains type checks, policy and persistence tests, and a production build workflow. These screenshots were captured from a fresh local demonstration project. Opening the console is not an independent security assessment.",
    limits:
      "An operator aid for authorised work. Scope checks and approvals do not replace written permission or careful review. The direct interactive terminal retains host access; AI summaries still require validation.",
    next: "Broaden regression coverage around scope and approval boundaries and make evidence provenance easier to inspect.",
    links: [],
  },
  {
    slug: "finest-group",
    focus: ["client"],
    stage: "client-work",
    title: "The Finest Group",
    eyebrow: "Client delivery through SOVA",
    category: "Client delivery",
    status: "Client work",
    year: "2026",
    image: "/images/projects/finest-group.webp",
    alt: "The Finest Group hospitality website",
    summary:
      "Hospitality websites and operational controls, delivered through SOVA.",
    takeaway:
      "Connecting a group presence with the practical needs of distinct venues.",
    role: "Website and platform development through SOVA",
    stack: [
      "Responsive web development",
      "Content workflows",
      "Operational controls",
    ],
    problem:
      "A hospitality group needs a coherent public presence while venues keep their own identity and useful customer pathways.",
    contribution:
      "My work through SOVA spans the group website and venue experiences, including Bridges Hill Bistro’s dedicated website, menu and special content, staff tools, and booking and ordering availability controls.",
    flow: [
      "Group website",
      "Venue experience",
      "Customer pathway",
      "Staff content",
      "Availability controls",
    ],
    decisions: [
      {
        title: "Keep the venue context",
        body: "Fishbox & Co, Lakeside Forbes and Bridges Hill Bistro connect through the group presence while maintaining distinct venue experiences.",
      },
      {
        title: "Treat operations as part of the product",
        body: "Menu and special content, staff surfaces, and booking or ordering availability are part of the delivery, alongside the public website.",
      },
      {
        title: "Keep ownership clear",
        body: "This is work delivered through SOVA. Photography and video were produced by SOVA. Bridges Hill Bistro belongs within the Finest Group engagement.",
      },
    ],
    gallery: [],
    verification:
      "Public website and SOVA case-study links provide an inspectable view of the engagement. No revenue, conversion or booking-volume improvement is claimed.",
    limits:
      "The public case study describes the group engagement. It does not imply that every part of the wider delivery was completed by me alone.",
    next: "Continue refining content and operational journeys around venue requirements.",
    links: [
      {
        label: "SOVA case study",
        href: "https://www.sovagroup.cloud/work/finest-group",
      },
    ],
  },
  {
    slug: "hunter-valley",
    focus: ["client"],
    stage: "client-work",
    title: "Hunter Valley Prestige Wine Tours",
    eyebrow: "Client delivery through SOVA",
    category: "Client delivery",
    status: "Client work",
    year: "2026",
    image: "/images/projects/hunter-valley.webp",
    alt: "Hunter Valley Prestige Wine Tours website and booking experience",
    summary:
      "A responsive tour website with a more deliberate booking and enquiry journey.",
    takeaway:
      "Helping visitors choose a tour while keeping requests distinct from confirmed bookings.",
    role: "Website and booking-journey development through SOVA",
    stack: [
      "Responsive web development",
      "Booking workflows",
      "Enquiry journeys",
    ],
    problem:
      "Competing pages and booking buttons made it difficult for visitors to understand which tour suited their group and which step to take next.",
    contribution:
      "I worked on the website and booking journey through SOVA, organising tour comparison and the steps for dates, guests, pickup and contact details.",
    flow: [
      "Compare tours",
      "Choose a date",
      "Group and pickup details",
      "Request or enquiry",
      "Team confirmation",
    ],
    decisions: [
      {
        title: "Start with the visitor’s choice",
        body: "Tour comparison precedes the request flow so visitors can understand the shared and private options.",
      },
      {
        title: "Give different groups different paths",
        body: "Shared tours follow a guided request journey. Private and larger groups move towards a tailored enquiry.",
      },
      {
        title: "Be precise about booking state",
        body: "A submitted request is distinct from confirmed availability and payment. The interface should reflect that operational reality.",
      },
    ],
    gallery: [],
    verification:
      "The published SOVA case study is available to inspect. No conversion-rate or sales uplift is claimed.",
    limits:
      "The journey supports booking requests and enquiries. It does not mean every request is a paid or confirmed booking.",
    next: "Refine the journey against real enquiry patterns and feedback from the team handling requests.",
    links: [
      {
        label: "SOVA case study",
        href: "https://www.sovagroup.cloud/work/hunter-valley-prestige-wine-tours",
      },
    ],
  },
];

export const career: CareerRole[] = [
  {
    slug: "powerdata",
    company: "PowerData Group Consulting",
    title: "AI Engineer & Cybersecurity Analyst",
    type: "Internship",
    start: "Sep 2026",
    end: "Present",
    location: "Melbourne, VIC · Remote",
    theme: "AI & cybersecurity",
    summary:
      "Bringing software development, automation and security investigation into the same working context.",
    intro:
      "My current internship connects AI engineering and cybersecurity with the practical work of consulting: understanding systems, documenting findings and turning requirements into useful tools.",
    responsibilities: [
      "Work supporting Defence Industry Security Program compliance and CRM process automation.",
      "Custom in-house automation and development using C++, Python, Rust and Linux.",
      "Authorised security testing, technical reporting and remediation recommendations.",
      "Coordination of a three-person team on compliance and automation work.",
    ],
    areas: [
      {
        title: "Compliance and evidence",
        body: "Support DISP-related work by organising evidence, controls and technical documentation. Participation does not itself establish an organisation’s compliance status.",
      },
      {
        title: "CRM process automation",
        body: "Understand the enquiry and delivery workflow, then develop in-house automation around confirmed requirements.",
      },
      {
        title: "Authorised security investigation",
        body: "Investigate systems within approved scope and translate observations into technical reports and remediation recommendations.",
      },
    ],
    skills: [
      "Python",
      "Rust",
      "C++",
      "Linux",
      "Automation",
      "Security reporting",
    ],
    reflection:
      "The useful connection is between building systems and understanding how they can fail. Clear scope, traceable evidence and readable handover matter in both.",
    transition: "",
    photos: [],
    related: [],
    source: "Current résumé, 3 October 2026",
  },
  {
    slug: "independent-support",
    company: "Independent technical support",
    title: "Technical support & integration",
    type: "Part-time",
    start: "Jul 2026",
    end: "Present",
    location: "Remote",
    theme: "Systems support",
    summary:
      "Application configuration, integration support and fault resolution for small businesses.",
    intro:
      "Alongside my development work, I provide practical technical support for small-business clients.",
    responsibilities: [
      "Application configuration.",
      "Integration support.",
      "Investigation and resolution of technical faults.",
    ],
    areas: [
      {
        title: "Configuration and support",
        body: "Help clients configure applications and investigate behaviour that prevents them from completing their work.",
      },
      {
        title: "Integration troubleshooting",
        body: "Follow data and system interactions to understand where a fault occurs and what needs to change.",
      },
    ],
    skills: ["Configuration", "Troubleshooting", "Integrations"],
    reflection:
      "Supporting a system after setup makes the value of clear defaults, understandable errors and useful documentation very concrete.",
    transition: "",
    photos: [],
    related: [],
    source: "Current résumé, 3 October 2026",
  },
  {
    slug: "freelance",
    company: "Freelance software consulting",
    title: "Software Consultant",
    type: "Freelance",
    start: "Mar 2026",
    end: "Jun 2026",
    location: "Tokyo, Japan · Remote",
    theme: "Independent delivery",
    summary:
      "Web applications, websites and workflow tools through deployment and support.",
    intro:
      "During my time living in Tokyo, I undertook freelance software consulting and delivered web applications, websites and workflow tools.",
    responsibilities: [
      "Develop web applications and websites.",
      "Build workflow tools around client requirements.",
      "Carry work through deployment and support.",
    ],
    areas: [
      {
        title: "End-to-end delivery",
        body: "Work across requirements, implementation, deployment and support for web-based projects.",
      },
      {
        title: "Remote collaboration",
        body: "Deliver technical work remotely while living in Japan, balancing implementation with client communication.",
      },
    ],
    skills: [
      "Web development",
      "Workflow tools",
      "Deployment",
      "Remote delivery",
    ],
    reflection:
      "Independent delivery connects technical decisions with the person who has to use and maintain the result.",
    transition:
      "I wanted to bring the independence I developed through consulting into a team environment, with more opportunity to work on AI, security and connected systems.",
    photos: [
      {
        src: "/images/career/tokyo.webp",
        alt: "Godzilla landmark in Shinjuku, Tokyo",
        caption:
          "A personal photograph from my time in Tokyo. Context for this chapter, rather than a client project.",
      },
    ],
    related: [],
    source: "Current résumé, 3 October 2026",
  },
  {
    slug: "intellidesign",
    company: "IntelliDesign",
    title: "Junior Software Engineer",
    type: "Employment",
    start: "Dec 2025",
    end: "Feb 2026",
    location: "Brisbane, QLD",
    theme: "Software engineering",
    summary:
      "Application, internal-tool and embedded-connected software with a multidisciplinary engineering team.",
    intro:
      "This role brought my integration experience into a software engineering environment, working with software, electronics and product engineers.",
    responsibilities: [
      "Develop application, internal-tool and embedded-system software in Python, Go, JavaScript and C/C++.",
      "Build API and embedded-system integrations.",
      "Investigate data-flow, device-communication and system-integration faults.",
      "Implement and debug features through Git branches, pull requests, code review, automated validation and Linux workflows.",
      "Collaborate on hardware/software integration and defect resolution.",
    ],
    areas: [
      {
        title: "Application and internal tooling",
        body: "Develop and debug software that supports product and internal workflows.",
      },
      {
        title: "Embedded-connected integrations",
        body: "Investigate the boundaries between applications, APIs and devices, including data flow and communication faults.",
      },
      {
        title: "Engineering delivery",
        body: "Work through implementation, review and automated validation with a multidisciplinary engineering team.",
      },
    ],
    skills: ["Python", "Go", "JavaScript", "C/C++", "Linux", "Git", "Testing"],
    reflection:
      "Working across software and electronics reinforced the need to understand the complete data path before changing one component.",
    transition:
      "I wanted to explore independent software delivery and spend time living overseas, while continuing to build on my engineering experience.",
    photos: [],
    related: [],
    source: "Current résumé, 3 October 2026",
  },
  {
    slug: "light-design",
    company: "Light & Design Group",
    title: "Technical Sales Consultant",
    type: "Employment",
    start: "Sep 2024",
    end: "Nov 2025",
    location: "East Brisbane, QLD",
    theme: "Technical project delivery",
    summary:
      "Requirements, technical opportunities and project coordination across Australia.",
    intro:
      "I worked across technical sales and project delivery, translating requirements between customers, suppliers and internal teams.",
    responsibilities: [
      "Manage opportunities from enquiry through quotation and delivery.",
      "Gather stakeholder requirements and maintain the CRM pipeline.",
      "Coordinate customers, suppliers and internal teams.",
      "Travel across Australia and represent the business in Dubai and Italy for customer, supplier and project meetings.",
    ],
    areas: [
      {
        title: "Requirements and project coordination",
        body: "Connect stakeholder needs with quotations, supplier information and delivery planning.",
      },
      {
        title: "CRM and opportunity management",
        body: "Maintain the pipeline and the practical details that support project follow-through.",
      },
      {
        title: "Customer and supplier meetings",
        body: "Participate in project conversations across Australia and internationally.",
      },
    ],
    skills: [
      "Requirements",
      "CRM",
      "Technical communication",
      "Project coordination",
    ],
    reflection:
      "The technical solution is only part of delivery. People also need a shared understanding of requirements, responsibilities and the next step.",
    transition:
      "I wanted to move closer to hands-on software development and take the requirements and delivery experience into a dedicated engineering role.",
    photos: [],
    related: [],
    source: "Current résumé, 3 October 2026",
  },
  {
    slug: "traka",
    company: "Traka · ASSA ABLOY",
    title: "Sales Engineer",
    type: "Employment",
    start: "Nov 2021",
    end: "Aug 2024",
    location: "Brisbane, QLD · APAC support",
    theme: "Integrations & systems",
    summary:
      "Electronic key-management systems, APIs, networking, commissioning and technical support.",
    intro:
      "I worked across the full technical project lifecycle: requirements, solution design, implementation, commissioning and ongoing support.",
    responsibilities: [
      "Deliver electronic key-management solutions and LAN-controlled systems.",
      "Develop REST/SOAP integrations using Python and .NET/MVC.",
      "Build automation for administration, user synchronisation, database maintenance, monitoring, logging and reporting.",
      "Perform onsite and remote commissioning, configuration and troubleshooting.",
      "Provide Level 1/2 technical support across APAC.",
    ],
    areas: [
      {
        title: "API and customer-system integrations",
        body: "Connect key-management systems with customer applications using REST/SOAP APIs, Python and .NET/MVC.",
      },
      {
        title: "Commissioning and networking",
        body: "Configure hardware controllers, LAN-connected systems and customer environments through onsite and remote delivery.",
      },
      {
        title: "Operational tools and support",
        body: "Develop practical administration and reporting tools, then investigate faults and support systems across APAC.",
      },
    ],
    skills: [
      "Python",
      ".NET/MVC",
      "REST",
      "SOAP",
      "LAN networking",
      "Commissioning",
      "Technical support",
    ],
    reflection:
      "Commissioning and supporting real systems taught me to pay attention to configuration, recovery and the information the next person needs to diagnose a fault.",
    transition:
      "I wanted to broaden my technical project experience across different industries and develop the customer and supplier coordination side of delivery.",
    photos: [],
    related: [],
    source: "Current résumé, 3 October 2026",
  },
];

export const contributions: Contribution[] = [
  {
    slug: "zap-forbidden-bypass",
    focus: ["security"],
    languages: ["Java"],
    project: "ZAP",
    title: "Distinguishing public fallback pages from real 403 bypasses",
    language: "Java",
    category: "Application security",
    status: "Submitted for review",
    href: "https://github.com/zaproxy/zap-extensions/pull/7785",
    issueHref: "https://github.com/zaproxy/zaproxy/issues/8596",
    number: "#7785",
    problem:
      "The 403 bypass scanner could mistake a single-page application's public fallback response for protected content. Stopping at that first apparent success could also hide a later real bypass.",
    change:
      "Compare successful payload responses with successful responses from the site root and a random sibling path. Ignore identical public fallback bodies and continue testing remaining path and header payloads. Update the scanner help and changelog.",
    result:
      "Submitted upstream with 33 focused tests, 346 add-on tests and six installed ZAP comparison runs passing locally. Awaiting maintainer review; not merged or released.",
    validation:
      "Five regression cases failed against the unchanged scanner. The patched rule passed all 33 focused cases and all 346 beta add-on tests, plus style checks and packaging. Six asserted runs compared released and patched add-ons against synthetic loopback fixtures: the patched scanner ignored the plain SPA fallback and identified the real path and header bypasses. CLA and Checkmarx checks pass; upstream Java CI and CodeQL await maintainer approval.",
    note:
      "Exact body matching leaves dynamically changing fallback pages as a limitation. The rule adds two control requests per scanned 403 endpoint. Status checked on 4 October 2026. AI assistance was used for investigation, implementation and validation.",
  },
  {
    slug: "zap-csp-investigation",
    focus: ["security"],
    languages: ["Java"],
    project: "ZAP",
    title: "Explaining a version and configuration interaction in CSP filters",
    language: "Java / HTTP",
    category: "Security investigation",
    status: "Investigation documented",
    href: "https://github.com/zaproxy/zaproxy/issues/9476#issuecomment-5967696713",
    number: "Issue #9476",
    problem: "A reported CSP alert-filter interaction needed a reproducible explanation before proposing another patch.",
    change: "Investigate the behaviour through ten controlled runs across two add-on versions and document the interaction with an existing broad filter.",
    result: "The reproduced cause was already covered by an existing upstream fix. A maintainer thanked me, and issue #9476 was closed as completed on 3 October 2026. No duplicate patch was submitted.",
    note: "The local evidence does not confirm the original reporter's exact configuration. This is an investigation contribution, not a new merged code change.",
  },
  {
    status: "Released",
    release: { label: "Included in v0.35.1", href: "https://github.com/ollama/ollama/releases/tag/v0.35.1" },
    slug: "ollama-downloads",
    focus: ["ai"],
    languages: ["Go"],
    project: "Ollama",
    title: "Detecting a download stall before the first byte",
    language: "Go",
    category: "AI infrastructure",
    href: "https://github.com/ollama/ollama/pull/17259",
    number: "#17259",
    problem:
      "A connected range request could produce no body bytes while its inactivity timestamp remained unset.",
    change:
      "Start the inactivity clock when the range attempt begins and signal transfer completion immediately.",
    result:
      "Stall monitoring covers the initial no-progress window, with existing retry behaviour retained.",
    note: "A reliability fix in the download path, not a claim of faster internet bandwidth.",
  },
  {
    status: "Released",
    release: { label: "Included in v0.97.1", href: "https://github.com/charmbracelet/crush/releases/tag/v0.97.1" },
    slug: "crush-lsp",
    focus: ["ai", "tooling"],
    languages: ["Go"],
    project: "Charmbracelet Crush",
    title: "Filter language servers before searching PATH",
    language: "Go",
    category: "Performance",
    href: "https://github.com/charmbracelet/crush/pull/3370",
    number: "#3370",
    problem:
      "Discovery searched PATH for bundled servers before checking whether they could handle the current file.",
    change:
      "Filter relevant language servers first, then perform executable discovery.",
    result:
      "The documented controlled Apple M4 benchmark went from 50.82 ms to 308.61 µs.",
    note: "This measures the LSP discovery workload, not overall application performance.",
  },
  {
    status: "Released",
    release: { label: "Included in v0.3.0", href: "https://github.com/wandb/rai-toolkit/releases/tag/v0.3.0" },
    slug: "rai-adapter",
    focus: ["ai"],
    languages: ["Python"],
    project: "W&B RAI Toolkit",
    title: "Testing an OpenAI-compatible adapter contract",
    language: "Python",
    category: "AI testing",
    href: "https://github.com/wandb/rai-toolkit/pull/48",
    number: "#48",
    problem:
      "The adapter contract needed focused test coverage without depending on live model calls.",
    change:
      "Add offline contract tests for the OpenAI-compatible model adapter.",
    result:
      "Merged regression coverage for adapter behaviour; production adapter code did not change.",
    note: "The pull request includes an AI-assistance disclosure.",
  },
  {
    status: "Released",
    release: { label: "Included in v1.47.0", href: "https://github.com/open-telemetry/opentelemetry-go/releases/tag/v1.47.0" },
    slug: "otel-builds",
    focus: ["tooling"],
    languages: ["Go"],
    project: "OpenTelemetry Go",
    title: "Cross-platform compile checks in CI",
    language: "Go",
    category: "Engineering tooling",
    href: "https://github.com/open-telemetry/opentelemetry-go/pull/8634",
    number: "#8634",
    problem:
      "A build target executed generated test binaries, which does not work for foreign compilation targets.",
    change: "Add a compile-only Make target and a cross-build workflow.",
    result: "A 28-job matrix across 14 target platforms and two Go versions.",
    note: "Compile coverage is distinct from running tests on every target platform.",
  },
];
