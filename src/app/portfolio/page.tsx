'use client'

import { useState, useMemo } from 'react'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import SakuraPetals from '@/components/SakuraPetals'
import JapaneseDivider from '@/components/JapaneseDivider'
import { Search, Wrench, Briefcase, Sparkles } from 'lucide-react'

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
    interactive: false,
  },
  {
    title: 'TJ Pizza Hut',
    description: 'Online ordering system for a local pizza place. Customers can browse the menu, customize their order, pay online, and track delivery. Pretty straightforward but gets the job done.',
    image: '/images/projects/tj-pizza.svg',
    tags: ['Web App', 'Ordering System', 'Payment Integration'],
    category: 'Web Development',
    type: 'Client',
    year: 2021,
    interactive: false,
  },
  {
    title: 'AEO Services Portal',
    description: 'Internal portal for AEO Services employees. Handles project tracking, team communication, and resource management. Basically made their day-to-day operations way smoother.',
    image: '/images/projects/aeo-portal.svg',
    tags: ['Dashboard', 'Project Management', 'Automation'],
    category: 'Dashboard',
    type: 'Client',
    year: 2024,
    interactive: false,
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
    interactive: false,
  },
  {
    title: 'NDIS Admin System',
    description: 'Admin system for managing NDIS services at AEO. Automated a ton of their paperwork, compliance tracking, and participant management. Saves them hours every week.',
    image: '/images/projects/ndis-admin.svg',
    tags: ['Admin System', 'Automation', 'Dashboard', 'Compliance'],
    category: 'Automation',
    type: 'Client',
    year: 2024,
    interactive: false,
  },
  {
    title: 'ECBC Promotion Video',
    description: 'Made a promotional video for ECBC from scratch. Did everything - scripting, directing, recording, editing, the whole production. Turned out pretty clean.',
    image: '/images/projects/ecbc-video.svg',
    tags: ['Video Production', 'Editing', 'Directing'],
    category: 'Media Production',
    type: 'Client',
    year: 2025,
    interactive: false,
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
    interactive: true,
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
    interactive: true,
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
    interactive: true,
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
    interactive: true,
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
    interactive: true,
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
    interactive: true,
  },
  {
    title: 'Social Dashboard',
    description: 'Social media dashboard where you can post, like, comment, save stuff. Has dark/light themes and everything saves locally. Just a fun project to build out a full social feed.',
    image: '/images/projects/social-dashboard.jpeg',
    tags: ['JavaScript', 'Social Media', 'Dashboard', 'localStorage'],
    category: 'Web Development',
    type: 'Personal',
    year: 2025,
    href: 'https://thejhyefactor.github.io/social-dashboard/',
    interactive: true,
  },
  {
    title: 'VideoFlow',
    description: 'Browser-based video editor with text overlays, audio controls, color adjustments, and effects. Drag and drop your video, add some filters, tweak brightness/contrast, throw on some text. Export in different formats and quality levels.',
    image: '/images/projects/videoflow.jpeg',
    tags: ['JavaScript', 'Video Editing', 'Web App', 'Media'],
    category: 'Web Development',
    type: 'Personal',
    year: 2025,
    href: 'https://thejhyefactor.github.io/video-editor/',
    interactive: true,
  },
  {
    title: 'InvoicePro',
    description: 'Invoice generator for freelancers and small businesses. Create invoices, manage clients, track payments - all in your browser. Export to PDF with your branding. Everything stays local, no server needed, totally private.',
    image: '/images/projects/invoice.png',
    tags: ['React', 'PDF Export', 'Invoice Management', 'Web App'],
    category: 'Web Development',
    type: 'Personal',
    year: 2025,
    href: 'https://thejhyefactor.github.io/invoice-generator/',
    interactive: true,
  },
  {
    title: 'PDF Tools',
    description: 'Swiss army knife for PDFs. Merge multiple PDFs, split them into separate files, compress to reduce size, convert images to PDF. All processing happens in your browser - no uploads, completely private.',
    image: '/images/projects/pdf.png',
    tags: ['JavaScript', 'PDF Processing', 'Web App', 'Privacy'],
    category: 'Web Development',
    type: 'Personal',
    year: 2025,
    href: 'https://thejhyefactor.github.io/pdf-tools/',
    interactive: true,
  },
  {
    title: 'Background Remover',
    description: 'AI-powered background remover that runs entirely in your browser. Upload an image, wait 10-30 seconds, and get a transparent PNG. Uses machine learning to detect and remove backgrounds. Everything processes locally - no uploads, totally private.',
    image: '/images/projects/BGremovver.png',
    tags: ['AI/ML', 'Image Processing', 'TensorFlow.js', 'Web App'],
    category: 'AI/ML',
    type: 'Personal',
    year: 2025,
    href: 'https://thejhyefactor.github.io/background-remover/',
    interactive: true,
  },
]

export default function PortfolioPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [showCount, setShowCount] = useState(8)

  const filters = ['All', 'Interactive Tools', 'Client Work', 'Experiments']

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      // Category filter
      let matchesFilter = true
      if (selectedFilter === 'Interactive Tools') {
        matchesFilter = project.interactive === true
      } else if (selectedFilter === 'Client Work') {
        matchesFilter = project.type === 'Client'
      } else if (selectedFilter === 'Experiments') {
        matchesFilter = project.type === 'Personal' && ['AI/ML', 'Web Development'].includes(project.category)
      }

      return matchesSearch && matchesFilter
    }).sort((a, b) => b.year - a.year)
  }, [searchQuery, selectedFilter])

  const displayedProjects = filteredProjects.slice(0, showCount)
  const hasMore = showCount < filteredProjects.length

  const interactiveCount = projects.filter(p => p.interactive).length
  const clientCount = projects.filter(p => p.type === 'Client').length

  return (
    <>
      <SakuraPetals />
      <section className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-30" />
        <div className="absolute inset-0 grid-background opacity-10" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-tokyo-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-6 animate-fade-in font-noto">
              作品集 | PORTFOLIO
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in stagger-1">
              Work & Tools
            </h1>
            <p className="text-warm-gray text-xl leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in stagger-2">
              Browse through client projects, interactive tools you can use right now, and experimental side projects.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="px-6 py-3 bg-urban-gray/30 rounded-tokyo border border-tokyo-red/20">
                <div className="text-2xl font-bold gradient-text">{projects.length}</div>
                <div className="text-warm-gray text-xs">Total Projects</div>
              </div>
              <div className="px-6 py-3 bg-urban-gray/30 rounded-tokyo border border-electric-blue/20">
                <div className="text-2xl font-bold text-electric-blue">{interactiveCount}</div>
                <div className="text-warm-gray text-xs">Live Tools</div>
              </div>
              <div className="px-6 py-3 bg-urban-gray/30 rounded-tokyo border border-cyber-purple/20">
                <div className="text-2xl font-bold text-cyber-purple">{clientCount}</div>
                <div className="text-warm-gray text-xs">Client Projects</div>
              </div>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-gray/50" />
              <input
                type="text"
                placeholder="Search projects, tags, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-urban-gray/30 border border-warm-gray/30 rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-tokyo-red focus:shadow-glow-red transition-all duration-300"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {filters.map((filter) => {
                const isActive = selectedFilter === filter
                let Icon = Sparkles
                if (filter === 'Interactive Tools') Icon = Wrench
                if (filter === 'Client Work') Icon = Briefcase

                return (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-6 py-3 rounded-tokyo text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-gradient-accent text-deep-black shadow-lg scale-105'
                        : 'bg-urban-gray/30 border border-warm-gray/30 text-warm-gray hover:bg-urban-gray/50 hover:border-tokyo-red/30'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {filter}
                  </button>
                )
              })}
            </div>

            <p className="text-center text-warm-gray/60 text-sm">
              Showing {displayedProjects.length} of {filteredProjects.length} projects
            </p>
          </div>

          <JapaneseDivider character="作" />

          {/* Projects Grid */}
          <div className="mt-16 mb-12">
            {filteredProjects.length > 0 ? (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {displayedProjects.map((project, index) => (
                    <div
                      key={project.title}
                      className="animate-fade-in relative group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Interactive Badge */}
                      {project.interactive && (
                        <div className="absolute -top-3 -right-3 z-20 px-3 py-1 bg-gradient-accent rounded-full text-xs font-bold text-deep-black shadow-lg flex items-center gap-1">
                          <Wrench className="w-3 h-3" />
                          Try It Out
                        </div>
                      )}

                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tags={project.tags}
                        href={project.href}
                      />
                      <div className="mt-4 flex items-center justify-between px-2">
                        <span className="text-warm-gray/60 text-xs flex items-center gap-2">
                          {project.type === 'Client' && (
                            <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue rounded text-xs">Client</span>
                          )}
                          {project.year}
                        </span>
                        <span className="text-warm-gray/60 text-xs">{project.category}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => setShowCount(prev => prev + 8)}
                      className="px-8 py-4 bg-gradient-accent text-deep-black font-semibold rounded-tokyo hover:shadow-glow-red transition-all duration-300 hover:-translate-y-1"
                    >
                      Load More Projects
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-warm-gray text-xl mb-4">No projects found</p>
                <p className="text-warm-gray/60 mb-8">Try adjusting your search or filters</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedFilter('All')
                  }}
                  className="px-6 py-3 bg-tokyo-red text-white rounded-tokyo hover:bg-tokyo-red/80 transition-colors"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="p-12 bg-gradient-to-br from-urban-gray via-urban-gray/80 to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/30 shadow-glow-red relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/5 to-cyber-purple/5" />
              <div className="absolute inset-0 wave-pattern opacity-20" />
              <div className="absolute top-4 right-4">
                <span className="hanko text-xs">繋</span>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need something built?
                </h2>
                <p className="text-warm-gray text-lg mb-4 max-w-2xl mx-auto">
                  Whether it&apos;s a custom tool, automation system, or full web application - let&apos;s talk about your project.
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
