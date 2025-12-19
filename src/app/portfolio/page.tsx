import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Portfolio | Jhye O\'Meley',
  description: 'Featured projects including automation systems, dashboards, and web applications.',
}

const projects = [
  {
    title: 'PC Choices',
    description: 'Full-featured e-commerce platform for custom PC builds and component retail. Complete shopping experience with product configurator, cart management, and checkout flow.',
    image: '/images/projects/pc-choices.svg',
    tags: ['E-Commerce', 'Web Development', 'React'],
  },
  {
    title: 'TJ Pizza Hut',
    description: 'Online ordering system for restaurant with real-time menu management, order tracking, and integrated payment processing. Streamlined customer experience from browse to delivery.',
    image: '/images/projects/tj-pizza.svg',
    tags: ['Web App', 'Ordering System', 'Payment Integration'],
  },
  {
    title: 'AEO Services Portal',
    description: 'Comprehensive employee portal and project management dashboard. Centralized workspace for team collaboration, task tracking, and resource management.',
    image: '/images/projects/aeo-portal.svg',
    tags: ['Dashboard', 'Project Management', 'Portal'],
  },
  {
    title: 'TransportationME',
    description: 'Transportation management platform with route optimization, fleet tracking, and logistics coordination. Built for efficiency and real-time operations.',
    image: '/images/projects/transportation-me.svg',
    tags: ['Web Platform', 'Logistics', 'Real-Time'],
  },
  {
    title: 'NDIS Admin System',
    description: 'Admin management system for AEO Services NDIS operations. Automated workflows, compliance tracking, and participant management tools for streamlined disability service delivery.',
    image: '/images/projects/ndis-admin.svg',
    tags: ['Admin System', 'Automation', 'Compliance'],
  },
]

export default function PortfolioPage() {
  return (
    <section className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-tokyo-red text-sm font-medium tracking-widest mb-6">
            PORTFOLIO
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Selected Work
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed">
            A collection of projects that showcase my approach to building efficient, purposeful systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-warm-gray mb-6">
            Interested in working together?
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center text-tokyo-red hover:text-snow-white transition-colors duration-150"
          >
            Let&apos;s talk about your project
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
