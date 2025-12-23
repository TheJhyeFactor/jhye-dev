'use client'

import { useState, useMemo } from 'react'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import SakuraPetals from '@/components/SakuraPetals'
import JapaneseDivider from '@/components/JapaneseDivider'

const projects = [
  {
    title: 'PC Choices',
    description: 'Full-featured e-commerce platform for custom PC builds and component retail. Complete shopping experience with product configurator, cart management, and checkout flow.',
    image: '/images/projects/pc-choice.png',
    tags: ['E-Commerce', 'Web Development', 'React'],
    category: 'Web Development',
    year: 2023,
    href: 'https://pc-choice.com.au/',
  },
  {
    title: 'TJ Pizza Hut',
    description: 'Online ordering system for restaurant with real-time menu management, order tracking, and integrated payment processing. Streamlined customer experience from browse to delivery.',
    image: '/images/projects/tj-pizza.svg',
    tags: ['Web App', 'Ordering System', 'Payment Integration'],
    category: 'Web Development',
    year: 2021,
  },
  {
    title: 'AEO Services Portal',
    description: 'Comprehensive employee portal and project management dashboard. Centralized workspace for team collaboration, task tracking, and resource management.',
    image: '/images/projects/aeo-portal.svg',
    tags: ['Dashboard', 'Project Management', 'Automation'],
    category: 'Dashboard',
    year: 2024,
  },
  {
    title: 'TransportationME',
    description: 'Transportation management platform with route optimization, fleet tracking, and logistics coordination. Built for efficiency and real-time operations.',
    image: '/images/projects/transportation-me.png',
    tags: ['WordPress', 'Dashboard', 'Automation', 'Logistics'],
    category: 'Dashboard',
    year: 2025,
    href: 'https://transportationme.au/',
  },
  {
    title: 'NDIS Admin System',
    description: 'Admin management system for AEO Services NDIS operations. Automated workflows, compliance tracking, and participant management tools for streamlined disability service delivery.',
    image: '/images/projects/ndis-admin.svg',
    tags: ['Admin System', 'Automation', 'Dashboard', 'Compliance'],
    category: 'Automation',
    year: 2024,
  },
  {
    title: 'ECBC Promotion Video',
    description: 'Full-service promotional video production from concept to delivery. Complete creative direction including scripting, directing, recording, editing, and mastering for professional brand storytelling.',
    image: '/images/projects/ecbc-video.svg',
    tags: ['Video Production', 'Editing', 'Directing'],
    category: 'Media Production',
    year: 2025,
  },
  {
    title: 'CareerLift',
    description: 'Free professional resume builder with ATS-friendly templates, cover letter generator, and interview prep resources. Built to help underserved communities including career changers, re-entering workforce, and first-time job seekers with 100% client-side privacy.',
    image: '/images/projects/CareeLift.jpeg',
    tags: ['React', 'Resume Builder', 'PDF Export', 'Career Tools'],
    category: 'Web Development',
    year: 2024,
    href: 'https://thejhyefactor.github.io/careerlift/',
  },
  {
    title: 'Stock Price Visualizer',
    description: 'Interactive stock market visualization tool with real-time data integration. Compare multiple stocks with historical price charts, track key metrics, and analyze market trends with responsive React interface.',
    image: '/images/projects/Stock_price_visulisor.png',
    tags: ['React', 'Data Visualization', 'API Integration'],
    category: 'Web Development',
    year: 2023,
    href: 'https://thejhyefactor.github.io/stock-price-visualizer/',
  },
  {
    title: 'Particle Physics Playground',
    description: 'Interactive particle physics simulation with real-time gravity wells and collision detection. Click and drag to create particles, add gravity wells, and experiment with physics parameters like friction, spawn rate, and particle size.',
    image: '/images/projects/particle-physics.svg',
    tags: ['JavaScript', 'Canvas API', 'Physics Simulation'],
    category: 'Web Development',
    year: 2021,
    href: 'https://thejhyefactor.github.io/particle-physics-playground/',
  },
  {
    title: 'Pomodoro Timer',
    description: 'Productivity timer with task management and analytics dashboard. Features customizable 25/5/15 minute intervals, auto-start breaks, sound notifications, session tracking with localStorage persistence, and visual analytics showing focus time and streaks.',
    image: '/images/projects/Pomodro.jpeg',
    tags: ['JavaScript', 'Productivity', 'Analytics', 'localStorage'],
    category: 'Web Development',
    year: 2021,
    href: 'https://thejhyefactor.github.io/pomodoro-timer/',
  },
  {
    title: 'Real-Time Object Detection',
    description: 'AI-powered real-time object detection using TensorFlow.js and COCO-SSD model. Features live webcam feed, confidence thresholds, multiple visualization modes, dark cyberpunk-themed UI with glassmorphism effects, and detailed detection statistics.',
    image: '/images/projects/Realtimeobj.jpeg',
    tags: ['AI/ML', 'TensorFlow.js', 'Computer Vision', 'WebGL'],
    category: 'Web Development',
    year: 2024,
    href: 'https://thejhyefactor.github.io/object-detection/',
  },
]

const categories = ['All', 'Web Development', 'Automation', 'Dashboard', 'Media Production']
const years = ['All', 2025, 2024, 2023, 2021]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState<string | number>('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      const matchesYear = selectedYear === 'All' || project.year === selectedYear
      return matchesCategory && matchesYear
    }).sort((a, b) => b.year - a.year)
  }, [selectedCategory, selectedYear])

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  const handleFilterChange = (category: string, year: string | number) => {
    setSelectedCategory(category)
    setSelectedYear(year)
    setCurrentPage(1)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development':
        return 'tokyo-red'
      case 'Automation':
        return 'electric-blue'
      case 'Dashboard':
        return 'cyber-purple'
      case 'Media Production':
        return 'neon-cyan'
      default:
        return 'warm-gray'
    }
  }

  return (
    <>
      <SakuraPetals />
      <section className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-30" />
        <div className="absolute inset-0 grid-background opacity-10" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-tokyo-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-6 animate-fade-in font-noto">
              作品集 | PORTFOLIO
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in stagger-1">
              Selected Work
            </h1>
            <p className="text-warm-gray text-xl leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in stagger-2">
              A collection of projects showcasing automation, web development, media production, and system integration solutions that drive real business impact.
            </p>
            <p className="text-tokyo-red font-noto text-sm animate-fade-in stagger-3">
              一つ一つの作品に心を込めて
            </p>

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
          </div>

          <JapaneseDivider character="作" />

          <div className="mt-16 mb-12">
            <div className="bg-urban-gray/30 backdrop-blur-sm rounded-tokyo border border-urban-gray/50 p-6">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-warm-gray mb-3">Filter by Category</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => {
                    const color = getCategoryColor(category)
                    const isActive = selectedCategory === category
                    return (
                      <button
                        key={category}
                        onClick={() => handleFilterChange(category, selectedYear)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? `bg-${color} text-deep-black shadow-lg scale-105`
                            : `bg-${color}/10 border border-${color}/30 text-${color} hover:bg-${color}/20`
                        }`}
                      >
                        {category}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-warm-gray mb-3">Filter by Year</h3>
                <div className="flex flex-wrap gap-3">
                  {years.map((year) => {
                    const isActive = selectedYear === year
                    return (
                      <button
                        key={year}
                        onClick={() => handleFilterChange(selectedCategory, year)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-accent text-deep-black shadow-lg scale-105'
                            : 'bg-warm-gray/10 border border-warm-gray/30 text-warm-gray hover:bg-warm-gray/20'
                        }`}
                      >
                        {year}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-urban-gray/50">
                <p className="text-sm text-warm-gray/60">
                  Showing {currentProjects.length} of {filteredProjects.length} projects
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            {currentProjects.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {currentProjects.map((project, index) => (
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
                      href={project.href}
                    />
                    <div className="mt-4 flex items-center justify-between px-2">
                      <span className="text-warm-gray/60 text-xs">{project.year}</span>
                      <span className="text-warm-gray/60 text-xs">{project.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-warm-gray text-xl">No projects found with selected filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedYear('All')
                    setCurrentPage(1)
                  }}
                  className="mt-6 px-6 py-3 bg-tokyo-red text-white rounded-tokyo hover:bg-tokyo-red/80 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mb-20">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-urban-gray/50 border border-warm-gray/30 rounded-tokyo text-warm-gray hover:bg-urban-gray/70 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-12 h-12 rounded-tokyo font-medium transition-all ${
                      currentPage === page
                        ? 'bg-gradient-accent text-deep-black shadow-lg scale-110'
                        : 'bg-urban-gray/50 border border-warm-gray/30 text-warm-gray hover:bg-urban-gray/70'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-3 bg-urban-gray/50 border border-warm-gray/30 rounded-tokyo text-warm-gray hover:bg-urban-gray/70 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}

          <div className="max-w-4xl mx-auto">
            <div className="p-12 bg-gradient-to-br from-urban-gray via-urban-gray/80 to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/30 shadow-glow-red relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/5 to-cyber-purple/5" />
              <div className="absolute inset-0 wave-pattern opacity-20" />
              <div className="absolute top-4 right-4">
                <span className="hanko text-xs">繋</span>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Have a project in mind?
                </h2>
                <p className="text-warm-gray text-lg mb-4 max-w-2xl mx-auto">
                  Let&apos;s discuss how I can help streamline your systems and build something efficient together.
                </p>
                <p className="text-tokyo-red font-noto text-sm mb-8">
                  一緒に最高の作品を作りましょう
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
    </>
  )
}
