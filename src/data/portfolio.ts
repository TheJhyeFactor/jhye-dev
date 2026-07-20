export type Project = {
  title: string
  slug: string
  description: string
  image: string
  disciplines: string[]
  year: number
  href?: string
  status?: string
  scope?: string
  problem?: string
  users?: string
  role?: string
  why?: string
  approach?: string
  nextStep?: string
}

export const profile = {
  name: "Jhye O'Meley",
  email: 'omelejhye@gmail.com',
  location: 'Tokyo / Australia',
  startYear: 2021,
  github: 'https://github.com/TheJhyeFactor',
  linkedin: 'https://www.linkedin.com/in/jhye-o-meley-529960213/',
} as const

export const featuredProjects: Project[] = [
  {
    title: 'TripMate',
    slug: 'tripmate',
    description:
      'Operations software connecting bookings, riders, drivers, route planning, and live trip coordination in one working system.',
    image: '/images/projects/covers/tripmate.webp',
    disciplines: ['Product design', 'React', 'Firebase', 'Mobile'],
    year: 2026,
    href: 'https://tripmate-platform.vercel.app/',
    status: 'Live product',
    scope: 'Product strategy to production',
    problem: 'Transport teams need one dependable view of bookings, drivers, routes, and live trip changes instead of disconnected tools and messages.',
    users: 'Reception teams, drivers, and transport coordinators.',
    role: 'Product strategy, interface design, full-stack engineering, and mobile handoff.',
    why: 'I built it to make a high-pressure operational workflow calmer and easier to coordinate.',
    approach: 'I shaped the workflow around shared trip state, role-specific views, route planning, and a driver mobile handoff.',
    nextStep: 'Continue validating the operational workflow with the teams who use it day to day.',
  },
  {
    title: 'Buildly',
    slug: 'buildly',
    description:
      'A creator-learning platform where students explore technology through guided missions, practical builds, testing, and reflection.',
    image: '/images/projects/covers/buildly.webp',
    disciplines: ['React', 'Education', 'Product design'],
    year: 2026,
    href: 'https://buildly-showcase.vercel.app/',
    status: 'Live product',
    scope: 'Concept, interface, and build',
    problem: 'New creators often learn by jumping between scattered tutorials without a clear path from idea to tested project.',
    users: 'Students and early-stage creators learning to build with technology.',
    role: 'Product concept, interface design, and frontend engineering.',
    why: 'I built it to make practical technology learning feel structured, active, and rewarding.',
    approach: 'I combined guided missions, small builds, testing steps, and reflection into one focused learning loop.',
    nextStep: 'Expand the mission library while keeping the learning loop focused and practical.',
  },
  {
    title: 'TradieFlow',
    slug: 'tradieflow',
    description:
      'Live profit tracking for trade businesses, turning labour, materials, targets, and job progress into a clear operational view.',
    image: '/images/projects/covers/tradieflow.webp',
    disciplines: ['Next.js', 'SaaS', 'Job management'],
    year: 2026,
    href: 'https://tradieflow-pi.vercel.app/',
    status: 'Live product',
    scope: 'Product design and development',
    problem: 'Trade businesses can lose sight of job profit when labour, materials, targets, and progress live in separate places.',
    users: 'Trade business owners and people responsible for job performance.',
    role: 'Product design and full-stack development.',
    why: 'I built it to turn job performance into a view that an owner can understand quickly.',
    approach: 'I focused the product on live job inputs, clear targets, and a compact operational dashboard.',
    nextStep: 'Test the reporting workflow against real job-management habits and terminology.',
  },
  {
    title: 'Castivo',
    slug: 'castivo',
    description:
      'Creator software for building branded streamer sites and running audience tools including leaderboards, raffles, and bonus hunts.',
    image: '/images/projects/covers/castivo.webp',
    disciplines: ['Next.js', 'Firebase', 'Creator tools'],
    year: 2026,
    status: 'Private preview',
    scope: 'Full-stack product build',
    problem: 'Streamers need branded audience experiences without stitching together separate tools for sites, rewards, and community activity.',
    users: 'Streamers and the communities that follow them.',
    role: 'Full-stack product build across page creation and audience utilities.',
    why: 'I built it to give creators a more coherent home for their audience and recurring interactions.',
    approach: 'I connected branded page building with audience utilities such as leaderboards, raffles, and bonus hunts.',
    nextStep: 'Refine the private preview around the workflows creators repeat most often.',
  },
  {
    title: 'QuickMeet',
    slug: 'quickmeet',
    description:
      'A focused real-time meeting product designed to get people into a conversation with as little friction as possible.',
    image: '/images/projects/covers/quickmeet.webp',
    disciplines: ['React', 'WebRTC', 'Real-time'],
    year: 2026,
    href: 'https://www.quickmeet.cam/',
    status: 'Live product',
    scope: 'Product design and development',
    problem: 'Starting a meeting can be slower than the meeting itself when people face unnecessary setup and invite friction.',
    users: 'People who need to start a focused browser meeting quickly.',
    role: 'Product design, frontend engineering, and real-time implementation.',
    why: 'I built it to make getting into a real conversation feel immediate.',
    approach: 'I kept the experience focused on a fast join flow and the essential real-time meeting controls.',
    nextStep: 'Keep reducing join friction while validating the essential controls with real calls.',
  },
  {
    title: 'PC Choices',
    slug: 'pc-choices',
    description: 'E-commerce experience with product discovery, a PC configurator, cart, and checkout.',
    image: '/images/projects/pc-choice.png',
    disciplines: ['E-commerce', 'React', 'Web development'],
    year: 2023,
    href: 'https://pc-choice.com.au/',
    status: 'Live product',
    scope: 'Product experience and build',
    problem: 'Choosing a PC can be overwhelming when product discovery, compatibility, and checkout are disconnected.',
    users: 'Customers comparing and configuring a PC before purchase.',
    role: 'Product experience design and web development.',
    why: 'I built it to make a technical purchase feel guided without taking control away from the customer.',
    approach: 'I combined browseable product information with a configurator, cart, and focused checkout path.',
    nextStep: 'Continue improving the relationship between configuration guidance and checkout confidence.',
  },
]

export const clientProjects: Project[] = [
  {
    title: 'TransportationME',
    slug: 'transportation-me',
    description: 'Logistics platform for route planning, fleet tracking, and day-to-day operations.',
    image: '/images/projects/transportation-me.png',
    disciplines: ['WordPress', 'Dashboard', 'Automation'],
    year: 2025,
  },
  {
    title: 'AEO Services Portal',
    slug: 'aeo-services',
    description: 'Internal project tracking, communication, and resource management for a services team.',
    image: '/images/projects/aeo-portal.svg',
    disciplines: ['Dashboard', 'Project management'],
    year: 2024,
  },
  {
    title: 'NDIS Admin System',
    slug: 'ndis-admin',
    description: 'Administration and compliance tooling for participant and service management.',
    image: '/images/projects/ndis-admin.svg',
    disciplines: ['Admin system', 'Automation'],
    year: 2024,
  },
  {
    title: 'TJ Pizza Hut',
    slug: 'tj-pizza-hut',
    description: 'Online ordering flow with menu browsing, customisation, payment, and delivery tracking.',
    image: '/images/projects/tj-pizza.svg',
    disciplines: ['Web app', 'Ordering system'],
    year: 2021,
  },
  {
    title: 'ECBC Promotion Video',
    slug: 'ecbc-video',
    description: 'End-to-end promotional video production, from scripting and direction to editing.',
    image: '/images/projects/ecbc-video.svg',
    disciplines: ['Video', 'Editing', 'Direction'],
    year: 2025,
  },
]

export const experiments = [
  {
    title: 'CareerLift',
    description: 'ATS-aware resume builder with private, client-side processing.',
    href: 'https://thejhyefactor.github.io/careerlift/',
  },
  {
    title: 'Real-Time Object Detection',
    description: 'A browser computer-vision experiment using TensorFlow.js.',
    href: 'https://thejhyefactor.github.io/object-detection/',
  },
  {
    title: 'Browser OS',
    description: 'A browser desktop with draggable windows, a terminal, and local persistence.',
    href: 'https://thejhyefactor.github.io/browser-os/',
  },
  {
    title: 'VideoFlow',
    description: 'A browser-based video editor with overlays, effects, and export controls.',
    href: 'https://thejhyefactor.github.io/video-editor/',
  },
  {
    title: 'InvoicePro',
    description: 'Private invoice generation and PDF export for small businesses.',
    href: 'https://thejhyefactor.github.io/invoice-generator/',
  },
  {
    title: 'PDF Tools',
    description: 'Client-side tools for merging, splitting, compressing, and converting PDFs.',
    href: 'https://thejhyefactor.github.io/pdf-tools/',
  },
  {
    title: 'Social Dashboard',
    description: 'A focused social analytics dashboard experiment.',
    href: 'https://github.com/TheJhyeFactor/social-dashboard',
  },
  {
    title: 'Stock Price Visualizer',
    description: 'Historical stock-price exploration built with React and Recharts.',
    href: 'https://github.com/TheJhyeFactor/stock-price-visualizer',
  },
  {
    title: 'Pomodoro Timer',
    description: 'A compact browser tool for structured focus sessions.',
    href: 'https://github.com/TheJhyeFactor/pomodoro-timer',
  },
  {
    title: 'Particle Physics Playground',
    description: 'An interactive browser experiment for particle movement and forces.',
    href: 'https://github.com/TheJhyeFactor/particle-physics-playground',
  },
  {
    title: 'Background Remover',
    description: 'A private, client-side image background-removal experiment.',
    href: 'https://github.com/TheJhyeFactor/background-remover',
  },
]

export const openSourceProjects = [
  { title: 'Crush · LSP discovery', type: 'Charmbracelet Crush · Open PR #3370', description: 'Filtered LSP servers before searching PATH so unrelated servers do not trigger filesystem work.', fixed: 'Crush searched PATH for roughly 300 bundled servers before checking whether each one was relevant to the file being edited.', why: 'The profile showed the discovery scan was spending CPU and allocations probing servers that could never handle the current file.', improved: 'The controlled Apple M4 benchmark went from 50.82 ms to 308.61 µs, with 238× less allocated memory and 96× fewer allocations.', href: 'https://github.com/charmbracelet/crush/pull/3370', repo: 'https://github.com/charmbracelet/crush' },
  { title: 'Crush · Tool-call recovery', type: 'Charmbracelet Crush · Open PR #3372', description: 'Rejected empty tool names before malformed calls could poison the saved session history.', fixed: 'An empty streamed tool name could be persisted with its matching result, then replayed on the next provider request.', why: 'Providers that validate tool history could reject every later turn, leaving the session unusable.', improved: 'Malformed calls are removed before persistence, the bad turn stops after one request instead of two, and the next prompt remains usable.', href: 'https://github.com/charmbracelet/crush/pull/3372', repo: 'https://github.com/charmbracelet/crush' },
  { title: 'Crush · Onboarding status', type: 'Charmbracelet Crush · Open PR #3378', description: 'Kept clipboard confirmations and update notices visible above the onboarding dialog.', fixed: 'The bottom-aligned onboarding dialog could overwrite the status row even though the notification still existed in state.', why: 'A notification that is technically present but visually covered is still a broken interaction.', improved: 'A render regression test now protects the layer order, while normal landing, chat, and initialize rendering stays unchanged.', href: 'https://github.com/charmbracelet/crush/pull/3378', repo: 'https://github.com/charmbracelet/crush' },
  { title: 'Ollama · Chat stream batching', type: 'Ollama · Open PR #17258', description: 'Coalesced high-rate chat stream updates into a fixed 16 ms UI batch window.', fixed: 'A 4 ms flush timer restarted for every chunk, causing one React Query cache commit per streamed update.', why: 'Streaming output should feel immediate without forcing the UI cache to commit on every token-sized event.', improved: 'The deterministic benchmark reduced cache commits from 200 to 51 — a 74.5% reduction — while preserving the first and final updates.', href: 'https://github.com/ollama/ollama/pull/17258', repo: 'https://github.com/ollama/ollama' },
  { title: 'Ollama · Download stall detection', type: 'Ollama · Open PR #17259', description: 'Started the inactivity timeout when a range attempt begins, before its first body byte arrives.', fixed: 'A connected request that never delivered its first byte left `lastUpdated` unset, so the monitor could skip the stalled attempt.', why: 'A pull can look connected while making no progress; the timeout needs to cover that gap too.', improved: 'Stalls are detected from attempt start, completed transfers signal immediately, and the existing 30-second retry behavior remains intact.', href: 'https://github.com/ollama/ollama/pull/17259', repo: 'https://github.com/ollama/ollama' },
  { title: 'Ollama · Manifest retries', type: 'Ollama · Open PR #17260', description: 'Retried interrupted model manifest requests when the connection failed before headers or during the body.', fixed: 'The pull path returned `EOF` immediately instead of retrying a transport or partial-body failure.', why: 'A temporary network interruption should not leave a model pull failed when a fresh request can recover.', improved: 'Both failure modes recover on the second request with the existing jittered backoff, while healthy pulls keep the same 94 allocations per operation.', href: 'https://github.com/ollama/ollama/pull/17260', repo: 'https://github.com/ollama/ollama' },
  { title: 'OpenTelemetry Go · Cross-build CI', type: 'OpenTelemetry Go · Open PR #8634', description: 'Added a cross-build workflow and compile-only Make target for 14 target platforms across Go 1.25 and 1.26.', fixed: 'The existing build target ran generated test binaries, which works natively but fails when the target is cross-compiled.', why: 'Cross-platform support needs a CI check that compiles foreign targets without trying to execute them on the host.', improved: 'The project gains a stable 28-job cross-build matrix covering targets including AIX, Darwin, JS/WASM, Linux ARMv7, and Windows amd64.', href: 'https://github.com/open-telemetry/opentelemetry-go/pull/8634', repo: 'https://github.com/open-telemetry/opentelemetry-go' },
  { title: 'PyInstaller · Finder working directory', type: 'PyInstaller · Closed PR #9485', description: 'Clarified that macOS apps launched through Finder do not run with the app bundle directory as the current working directory.', fixed: 'The documentation did not clearly explain the difference between Finder and Terminal launch contexts.', why: 'Without that detail, macOS users can look for bundled resources relative to the wrong directory.', improved: 'The docs now explain Finder’s `/` working directory, preserve the reduced-environment warning, and point to the existing `__file__` guidance.', href: 'https://github.com/pyinstaller/pyinstaller/pull/9485', repo: 'https://github.com/pyinstaller/pyinstaller' },
  { title: 'Appsmith · OAuth2 test coverage', type: 'Appsmith · Open PR #1', description: 'Added focused Jest coverage for the OAuth2 `expiresIn` field placement fix.', fixed: 'The field-order change needed regression coverage across Authorization Code and Client Credentials grants.', why: 'The visible field should sit directly after `scopeString` for the relevant grant and remain hidden where it does not apply.', improved: 'The change is protected by focused tests, with the full client suite passing 528 suites, 4,143 tests, and 19 snapshots.', href: 'https://github.com/SaifuddinM23/appsmith/pull/1', repo: 'https://github.com/appsmithorg/appsmith' },
]

export const journalPosts = [
  { slug: 'build-the-smallest-useful-system', date: '2026-07-14', category: 'Product thinking', title: 'Build the smallest useful system, not the smallest demo', excerpt: 'A useful first release has a complete job to do. The trick is deciding which job matters before adding surface area.', body: ['When I start a product, I try to find the smallest complete loop: the thing someone needs to begin, the decision they need to make, and the outcome they need to leave with.', 'That usually means less surface area than the original brief suggests, but more attention to the connective tissue. A booking tool needs the change flow, not just the booking form. A resume builder needs export confidence, not just editable fields.', 'The first release should feel narrow, but it should still take a real task from start to finish. That is where the useful learning starts.'] },
  { slug: 'why-browser-native-tools-are-worth-building', date: '2026-06-28', category: 'Open source', title: 'Why browser-native tools are worth building', excerpt: 'Small tools can be more trustworthy when the important work stays close to the person using them.', body: ['I keep returning to browser-native tools because they make a valuable promise easy to understand: open the page, do the work, and keep the data close.', 'That does not make every problem a client-side problem. It does make privacy, offline behavior, and deployment simplicity worth considering earlier than they usually are.', 'CareerLift and PDF Tools are both experiments in that direction. They are deliberately modest projects, but they help me test where a smaller technical footprint can make a product feel more dependable.'] },
  { slug: 'findings-from-operational-software', date: '2026-05-19', category: 'Findings', title: 'The most important screen is often the change screen', excerpt: 'Operational software earns trust by making exceptions, updates, and handoffs as clear as the happy path.', body: ['In operational work, the plan is rarely the whole story. A rider cancels, a driver is delayed, or a route changes. The software has to help people understand what changed and what needs attention next.', 'That is why I treat change states as a core product surface rather than an edge case. Clear status, visible history, and role-specific next actions reduce the need to reconstruct context from messages and memory.', 'Design the exception flow while the main flow is still being designed.'] },
]

export const projectCount = featuredProjects.length + clientProjects.length + experiments.length

export const capabilities = [
  {
    number: '01',
    title: 'Shape the product',
    description: 'Turn an uncertain idea or tangled workflow into a clear product direction and useful first release.',
  },
  {
    number: '02',
    title: 'Design the system',
    description: 'Make complex information understandable through purposeful interface and interaction design.',
  },
  {
    number: '03',
    title: 'Build it end to end',
    description: 'Develop the product across frontend, backend, data, integrations, and production delivery.',
  },
  {
    number: '04',
    title: 'Improve what exists',
    description: 'Audit, simplify, and extend software that is difficult to use or maintain.',
  },
]

export const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Firebase',
  'PostgreSQL',
  'Python',
  'Tailwind CSS',
  'Vercel',
  'Git',
]
