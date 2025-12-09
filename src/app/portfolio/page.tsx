import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Portfolio | Jhye O\'Meley',
  description: 'Featured projects including automation systems, dashboards, and web applications.',
}

const projects = [
  {
    title: 'TransportationMe',
    description: 'A comprehensive transportation management platform streamlining logistics operations with real-time tracking and automated dispatch systems.',
    image: '/images/projects/transportation-me.svg',
    tags: ['Web App', 'Automation', 'Dashboard'],
  },
  {
    title: 'AEO Dashboard',
    description: 'Executive dashboard providing real-time visibility into key operational metrics. Clean data visualization for faster decision-making.',
    image: '/images/projects/aeo-dashboard.svg',
    tags: ['Dashboard', 'Data Viz', 'Apps Script'],
  },
  {
    title: 'ECBC Video Platform',
    description: 'Custom video management and delivery system with streamlined content workflows and intuitive admin interface.',
    image: '/images/projects/ecbc-video.svg',
    tags: ['Web Development', 'CMS', 'Video'],
  },
  {
    title: 'NDIS Automation Suite',
    description: 'Workflow automation for NDIS service providers. Reduced manual data entry and improved compliance tracking across operations.',
    image: '/images/projects/ndis-automation.svg',
    tags: ['Automation', 'Apps Script', 'Integration'],
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
