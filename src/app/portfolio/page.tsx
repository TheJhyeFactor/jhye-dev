'use client'

import { useState, useMemo } from 'react'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import SakuraPetals from '@/components/SakuraPetals'
import JapaneseDivider from '@/components/JapaneseDivider'

const projects = [
  {
    title: 'PC Choices',
    description: 'E-commerce site for a PC parts retailer. Built the whole thing - product pages, custom PC configurator, shopping cart, checkout. They wanted something fast and easy for customers to build their own systems.',
    image: '/images/projects/pc-choice.png',
    tags: ['E-Commerce', 'Web Development', 'React'],
    category: 'Web Development',
    type: 'Client',
    year: 2023,
    href: 'https://pc-choice.com.au/',
  },
  {
    title: 'TJ Pizza Hut',
    description: 'Online ordering system for a local pizza place. Customers can browse the menu, customize their order, pay online, and track delivery. Pretty straightforward but gets the job done.',
    image: '/images/projects/tj-pizza.svg',
    tags: ['Web App', 'Ordering System', 'Payment Integration'],
    category: 'Web Development',
    type: 'Client',
    year: 2021,
  },
  {
    title: 'AEO Services Portal',
    description: 'Internal portal for AEO Services employees. Handles project tracking, team communication, and resource management. Basically made their day-to-day operations way smoother.',
    image: '/images/projects/aeo-portal.svg',
    tags: ['Dashboard', 'Project Management', 'Automation'],
    category: 'Dashboard',
    type: 'Client',
    year: 2024,
  },
  {
    title: 'TransportationME',
    description: 'Logistics platform for a transportation company. Route planning, fleet tracking, real-time updates - all the stuff they need to run their operations efficiently.',
    image: '/images/projects/transportation-me.png',
    tags: ['WordPress', 'Dashboard', 'Automation', 'Logistics'],
    category: 'Dashboard',
    type: 'Client',
    year: 2025,
    href: 'https://transportationme.au/',
  },
  {
    title: 'NDIS Admin System',
    description: 'Admin system for managing NDIS services at AEO. Automated a ton of their paperwork, compliance tracking, and participant management. Saves them hours every week.',
    image: '/images/projects/ndis-admin.svg',
    tags: ['Admin System', 'Automation', 'Dashboard', 'Compliance'],
    category: 'Automation',
    type: 'Client',
    year: 2024,
  },
  {
    title: 'ECBC Promotion Video',
    description: 'Made a promotional video for ECBC from scratch. Did everything - scripting, directing, recording, editing, the whole production. Turned out pretty clean.',
    image: '/images/projects/ecbc-video.svg',
    tags: ['Video Production', 'Editing', 'Directing'],
    category: 'Media Production',
    type: 'Client',
    year: 2025,
  },
  {
    title: 'CareerLift',
    description: 'Free resume builder I made for people getting back into the workforce or switching careers. ATS-friendly templates, cover letters, interview tips. Everything runs client-side so your data stays private.',
    image: '/images/projects/CareeLift.jpeg',
    tags: ['React', 'Resume Builder', 'PDF Export', 'Career Tools'],
    category: 'Web Development',
    type: 'Personal',
    year: 2024,
    href: 'https://thejhyefactor.github.io/careerlift/',
  },
  {
    title: 'Stock Price Visualizer',
    description: 'Built this to track stock prices with actual market data. You can compare different stocks, see historical charts, check trends. Just a side project to play around with data visualization.',
    image: '/images/projects/Stock_price_visulisor.png',
    tags: ['React', 'Data Visualization', 'API Integration'],
    category: 'Web Development',
    type: 'Personal',
    year: 2023,
    href: 'https://thejhyefactor.github.io/stock-price-visualizer/',
  },
  {
    title: 'Particle Physics Playground',
    description: 'Physics sim where you can click to spawn particles and mess with gravity. Kind of satisfying to just play around with - adjust friction, spawn rates, add gravity wells and watch what happens.',
    image: '/images/projects/particle-physics.svg',
    tags: ['JavaScript', 'Canvas API', 'Physics Simulation'],
    category: 'Web Development',
    type: 'Personal',
    year: 2021,
    href: 'https://thejhyefactor.github.io/particle-physics-playground/',
  },
  {
    title: 'Pomodoro Timer',
    description: 'Productivity timer with the classic 25/5/15 intervals. Tracks your sessions, shows analytics on how much you actually focused, saves everything locally. Helps me stay on task.',
    image: '/images/projects/Pomodro.jpeg',
    tags: ['JavaScript', 'Productivity', 'Analytics', 'localStorage'],
    category: 'Web Development',
    type: 'Personal',
    year: 2021,
    href: 'https://thejhyefactor.github.io/pomodoro-timer/',
  },
  {
    title: 'Real-Time Object Detection',
    description: 'Webcam-based object detection using TensorFlow.js. Point your camera at stuff and it identifies what it sees in real-time. Went with a cyberpunk theme because why not.',
    image: '/images/projects/Realtimeobj.jpeg',
    tags: ['AI/ML', 'TensorFlow.js', 'Computer Vision', 'WebGL'],
    category: 'AI/ML',
    type: 'Personal',
    year: 2025,
    href: 'https://thejhyefactor.github.io/object-detection/',
  },
  {
    title: 'Browser OS',
    description: 'Fully functional operating system that runs in your browser. Draggable windows, working terminal, file system, calculator - the whole desktop experience. Everything saves to localStorage so it persists between sessions.',
    image: '/images/projects/webos.jpeg',
    tags: ['React', 'Web Development', 'Window Management', 'Virtual File System'],
    category: 'Web Development',
    type: 'Personal',
    year: 2025,
    href: 'https://thejhyefactor.github.io/browser-os/',
  },
  {
    title: 'Social Dashboard',
    description: 'Social media dashboard where you can post, like, comment, save stuff. Has dark/light themes and everything saves locally. Just a fun project to build out a full social feed.',
    image: '/images/projects/social-dashboard.svg',
    tags: ['JavaScript', 'Social Media', 'Dashboard', 'localStorage'],
    category: 'Web Development',
    type: 'Personal',
    year: 2025,
    href: 'https://thejhyefactor.github.io/social-dashboard/',
  },
]

const categories = ['All', 'Web Development', 'AI/ML', 'Automation', 'Dashboard', 'Media Production']
const years = ['All', 2025, 2024, 2023, 2021]
const projectTypes = ['All', 'Client', 'Personal']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState<string | number>('All')
  const [selectedType, setSelectedType] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      const matchesYear = selectedYear === 'All' || project.year === selectedYear
      const matchesType = selectedType === 'All' || project.type === selectedType
      return matchesCategory && matchesYear && matchesType
    }).sort((a, b) => b.year - a.year)
  }, [selectedCategory, selectedYear, selectedType])

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  const handleFilterChange = (category: string, year: string | number, type: string) => {
    setSelectedCategory(category)
    setSelectedYear(year)
    setSelectedType(type)
    setCurrentPage(1)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development':
        return 'tokyo-red'
      case 'AI/ML':
        return 'neon-cyan'
      case 'Automation':
        return 'electric-blue'
      case 'Dashboard':
        return 'cyber-purple'
      case 'Media Production':
        return 'warm-gray'
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
                <div className="text-4xl font-bold text-transparent bg-gradient-accent-blue bg-clip-text mb-1">5</div>
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
                <h3 className="text-sm font-medium text-warm-gray mb-3">Filter by Type</h3>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map((type) => {
                    const isActive = selectedType === type
                    return (
                      <button
                        key={type}
                        onClick={() => handleFilterChange(selectedCategory, selectedYear, type)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? 'bg-electric-blue text-deep-black shadow-lg scale-105'
                            : 'bg-electric-blue/10 border border-electric-blue/30 text-electric-blue hover:bg-electric-blue/20'
                        }`}
                      >
                        {type}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-warm-gray mb-3">Filter by Category</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => {
                    const color = getCategoryColor(category)
                    const isActive = selectedCategory === category
                    return (
                      <button
                        key={category}
                        onClick={() => handleFilterChange(category, selectedYear, selectedType)}
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
                        onClick={() => handleFilterChange(selectedCategory, year, selectedType)}
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
                    setSelectedType('All')
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
