import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Portfolio | Jhye O\'Meley',
  description: 'Featured projects including automation systems, dashboards, and web applications.',
}

const projects = [
  {
    title: 'PC Choices',
    description: 'Full-featured e-commerce platform for custom PC builds and component retail. Complete shopping experience with product configurator, cart management, and checkout flow.',
    image: '/images/projects/pc-choice.png',
    tags: ['E-Commerce', 'Web Development', 'React'],
    category: 'Web Development',
    year: '2023',
  },
  {
    title: 'TJ Pizza Hut',
    description: 'Online ordering system for restaurant with real-time menu management, order tracking, and integrated payment processing. Streamlined customer experience from browse to delivery.',
    image: '/images/projects/tj-pizza.svg',
    tags: ['Web App', 'Ordering System', 'Payment Integration'],
    category: 'Web Development',
    year: '2021',
  },
  {
    title: 'AEO Services Portal',
    description: 'Comprehensive employee portal and project management dashboard. Centralized workspace for team collaboration, task tracking, and resource management.',
    image: '/images/projects/aeo-portal.svg',
    tags: ['Dashboard', 'Project Management', 'Portal'],
    category: 'Dashboard',
    year: '2024-2025',
  },
  {
    title: 'TransportationME',
    description: 'Transportation management platform with route optimization, fleet tracking, and logistics coordination. Built for efficiency and real-time operations.',
    image: '/images/projects/transportation-me.png',
    tags: ['Web Platform', 'Logistics', 'Real-Time'],
    category: 'Web Development',
    year: '2025',
  },
  {
    title: 'NDIS Admin System',
    description: 'Admin management system for AEO Services NDIS operations. Automated workflows, compliance tracking, and participant management tools for streamlined disability service delivery.',
    image: '/images/projects/ndis-admin.svg',
    tags: ['Admin System', 'Automation', 'Compliance'],
    category: 'Automation',
    year: '2024',
  },
  {
    title: 'ECBC Promotion Video',
    description: 'Full-service promotional video production from concept to delivery. Complete creative direction including scripting, directing, recording, editing, and mastering for professional brand storytelling.',
    image: '/images/projects/ecbc-video.svg',
    tags: ['Video Production', 'Editing', 'Directing'],
    category: 'Media Production',
    year: '2025',
  },
]

export default function PortfolioPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-tokyo-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <p className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-6 animate-fade-in">
            PORTFOLIO
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in stagger-1">
            Selected Work
          </h1>
          <p className="text-warm-gray text-xl leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in stagger-2">
            A collection of projects showcasing automation, web development, media production, and system integration solutions that drive real business impact.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in stagger-3">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-1">{projects.length}</div>
              <div className="text-warm-gray text-sm">Featured Projects</div>
            </div>
            <div className="w-px h-12 bg-urban-gray/50" />
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-gradient-accent-blue bg-clip-text mb-1">4</div>
              <div className="text-warm-gray text-sm">Categories</div>
            </div>
            <div className="w-px h-12 bg-urban-gray/50" />
            <div className="text-center">
              <div className="text-4xl font-bold text-cyber-purple mb-1">5</div>
              <div className="text-warm-gray text-sm">Years</div>
            </div>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-5 py-2 bg-tokyo-red/10 border border-tokyo-red/30 rounded-full text-sm text-tokyo-red font-medium">
              Web Development
            </span>
            <span className="px-5 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-sm text-electric-blue font-medium">
              Automation
            </span>
            <span className="px-5 py-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-full text-sm text-cyber-purple font-medium">
              Dashboards
            </span>
            <span className="px-5 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-sm text-neon-cyan font-medium">
              Media Production
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                />
                <div className="mt-4 flex items-center justify-between px-2">
                  <span className="text-warm-gray/60 text-xs">{project.year}</span>
                  <span className="text-warm-gray/60 text-xs">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="p-12 bg-gradient-to-br from-urban-gray via-urban-gray/80 to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/30 shadow-glow-red relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/5 to-cyber-purple/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a project in mind?
              </h2>
              <p className="text-warm-gray text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how I can help streamline your systems and build something efficient together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact/">Start a Project</Button>
                <Button href="/about/" variant="secondary">Learn More About Me</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
