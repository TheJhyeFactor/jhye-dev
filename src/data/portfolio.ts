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
  why?: string
  approach?: string
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
    why: 'I built it to make a high-pressure operational workflow calmer and easier to coordinate.',
    approach: 'I shaped the workflow around shared trip state, role-specific views, route planning, and a driver mobile handoff.',
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
    why: 'I built it to make practical technology learning feel structured, active, and rewarding.',
    approach: 'I combined guided missions, small builds, testing steps, and reflection into one focused learning loop.',
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
    why: 'I built it to turn job performance into a view that an owner can understand quickly.',
    approach: 'I focused the product on live job inputs, clear targets, and a compact operational dashboard.',
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
    why: 'I built it to give creators a more coherent home for their audience and recurring interactions.',
    approach: 'I connected branded page building with audience utilities such as leaderboards, raffles, and bonus hunts.',
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
    why: 'I built it to make getting into a real conversation feel immediate.',
    approach: 'I kept the experience focused on a fast join flow and the essential real-time meeting controls.',
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
    why: 'I built it to make a technical purchase feel guided without taking control away from the customer.',
    approach: 'I combined browseable product information with a configurator, cart, and focused checkout path.',
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
