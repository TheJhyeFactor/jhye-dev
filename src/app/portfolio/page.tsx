'use client'

import { useState, useEffect } from 'react'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import SakuraPetals from '@/components/SakuraPetals'
import { Sparkles, Package, Briefcase, Code, ArrowRight, Rocket } from 'lucide-react'
import Image from 'next/image'

// Client Projects - Real work for real businesses
const clientProjects = [
  {
    title: 'TransportationME',
    description: 'Logistics platform for a transportation company. Route planning, fleet tracking, real-time updates - all the stuff they need to run their operations efficiently.',
    image: '/images/projects/transportation-me.png',
    tags: ['WordPress', 'Dashboard', 'Automation', 'Logistics'],
    year: 2025,
    href: 'https://transportationme.au/',
  },
  {
    title: 'PC Choices',
    description: 'E-commerce site for a PC parts retailer. Built the whole thing - product pages, custom PC configurator, shopping cart, checkout. They wanted something fast and easy for customers to build their own systems.',
    image: '/images/projects/pc-choice.png',
    tags: ['E-Commerce', 'Web Development', 'React'],
    year: 2023,
    href: 'https://pc-choice.com.au/',
  },
  {
    title: 'AEO Services Portal',
    description: 'Internal portal for AEO Services employees. Handles project tracking, team communication, and resource management. Basically made their day-to-day operations way smoother.',
    image: '/images/projects/aeo-portal.svg',
    tags: ['Dashboard', 'Project Management', 'Automation'],
    year: 2024,
  },
  {
    title: 'NDIS Admin System',
    description: 'Admin system for managing NDIS services at AEO. Automated a ton of their paperwork, compliance tracking, and participant management. Saves them hours every week.',
    image: '/images/projects/ndis-admin.svg',
    tags: ['Admin System', 'Automation', 'Dashboard', 'Compliance'],
    year: 2024,
  },
  {
    title: 'TJ Pizza Hut',
    description: 'Online ordering system for a local pizza place. Customers can browse the menu, customize their order, pay online, and track delivery. Pretty straightforward but gets the job done.',
    image: '/images/projects/tj-pizza.svg',
    tags: ['Web App', 'Ordering System', 'Payment Integration'],
    year: 2021,
  },
  {
    title: 'ECBC Promotion Video',
    description: 'Made a promotional video for ECBC from scratch. Did everything - scripting, directing, recording, editing, the whole production. Turned out pretty clean.',
    image: '/images/projects/ecbc-video.svg',
    tags: ['Video Production', 'Editing', 'Directing'],
    year: 2025,
  },
]

// Personal Projects - Experiments and side builds
const personalProjects = [
  {
    title: 'CareerLift',
    description: 'Free resume builder I made for people getting back into the workforce or switching careers. ATS-friendly templates, cover letters, interview tips. Everything runs client-side so your data stays private.',
    image: '/images/projects/CareeLift.jpeg',
    tags: ['React', 'Resume Builder', 'PDF Export', 'Career Tools'],
    year: 2024,
    href: 'https://thejhyefactor.github.io/careerlift/',
  },
  {
    title: 'Real-Time Object Detection',
    description: 'Webcam-based object detection using TensorFlow.js. Point your camera at stuff and it identifies what it sees in real-time. Went with a cyberpunk theme because why not.',
    image: '/images/projects/Realtimeobj.jpeg',
    tags: ['AI/ML', 'TensorFlow.js', 'Computer Vision', 'WebGL'],
    year: 2025,
    href: 'https://thejhyefactor.github.io/object-detection/',
  },
  {
    title: 'Browser OS',
    description: 'Fully functional operating system that runs in your browser. Draggable windows, working terminal, file system, calculator - the whole desktop experience. Everything saves to localStorage so it persists between sessions.',
    image: '/images/projects/webos.jpeg',
    tags: ['React', 'Web Development', 'Window Management', 'Virtual File System'],
    year: 2025,
    href: 'https://thejhyefactor.github.io/browser-os/',
  },
  {
    title: 'VideoFlow',
    description: 'Browser-based video editor with text overlays, audio controls, color adjustments, and effects. Drag and drop your video, add some filters, tweak brightness/contrast, throw on some text. Export in different formats and quality levels.',
    image: '/images/projects/videoflow.jpeg',
    tags: ['JavaScript', 'Video Editing', 'Web App', 'Media'],
    year: 2025,
    href: 'https://thejhyefactor.github.io/video-editor/',
  },
  {
    title: 'Background Remover',
    description: 'AI-powered background remover that runs entirely in your browser. Upload an image, wait 10-30 seconds, and get a transparent PNG. Uses machine learning to detect and remove backgrounds. Everything processes locally - no uploads, totally private.',
    image: '/images/projects/BGremovver.png',
    tags: ['AI/ML', 'Image Processing', 'TensorFlow.js', 'Web App'],
    year: 2025,
    href: 'https://thejhyefactor.github.io/background-remover/',
  },
  {
    title: 'InvoicePro',
    description: 'Invoice generator for freelancers and small businesses. Create invoices, manage clients, track payments - all in your browser. Export to PDF with your branding. Everything stays local, no server needed, totally private.',
    image: '/images/projects/invoice.png',
    tags: ['React', 'PDF Export', 'Invoice Management', 'Web App'],
    year: 2025,
    href: 'https://thejhyefactor.github.io/invoice-generator/',
  },
  {
    title: 'PDF Tools',
    description: 'Swiss army knife for PDFs. Merge multiple PDFs, split them into separate files, compress to reduce size, convert images to PDF. All processing happens in your browser - no uploads, completely private.',
    image: '/images/projects/pdf.png',
    tags: ['JavaScript', 'PDF Processing', 'Web App', 'Privacy'],
    year: 2025,
    href: 'https://thejhyefactor.github.io/pdf-tools/',
  },
  {
    title: 'Social Dashboard',
    description: 'Social media dashboard where you can post, like, comment, save stuff. Has dark/light themes and everything saves locally. Just a fun project to build out a full social feed.',
    image: '/images/projects/social-dashboard.jpeg',
    tags: ['JavaScript', 'Social Media', 'Dashboard', 'localStorage'],
    year: 2025,
    href: 'https://thejhyefactor.github.io/social-dashboard/',
  },
  {
    title: 'Stock Price Visualizer',
    description: 'Built this to track stock prices with actual market data. You can compare different stocks, see historical charts, check trends. Just a side project to play around with data visualization.',
    image: '/images/projects/Stock_price_visulisor.png',
    tags: ['React', 'Data Visualization', 'API Integration'],
    year: 2023,
    href: 'https://thejhyefactor.github.io/stock-price-visualizer/',
  },
  {
    title: 'Pomodoro Timer',
    description: 'Productivity timer with the classic 25/5/15 intervals. Tracks your sessions, shows analytics on how much you actually focused, saves everything locally. Helps me stay on task.',
    image: '/images/projects/Pomodro.jpeg',
    tags: ['JavaScript', 'Productivity', 'Analytics', 'localStorage'],
    year: 2021,
    href: 'https://thejhyefactor.github.io/pomodoro-timer/',
  },
  {
    title: 'Particle Physics Playground',
    description: 'Physics sim where you can click to spawn particles and mess with gravity. Kind of satisfying to just play around with - adjust friction, spawn rates, add gravity wells and watch what happens.',
    image: '/images/projects/particle-physics.svg',
    tags: ['JavaScript', 'Canvas API', 'Physics Simulation'],
    year: 2021,
    href: 'https://thejhyefactor.github.io/particle-physics-playground/',
  },
]

export default function PortfolioPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <SakuraPetals />

      {/* Hero Section - Apple Style */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-urban-gray/20 to-primary-black" />
        <div className="absolute inset-0 wave-pattern opacity-5" />

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 text-center">
          <div
            className="mb-8"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
              opacity: 1 - scrollY / 800
            }}
          >
            <p className="text-warm-gray/60 text-sm font-medium tracking-widest mb-4 uppercase font-noto">
              Portfolio
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8">
              <span className="block bg-gradient-to-r from-snow-white via-snow-white to-tokyo-red bg-clip-text text-transparent">
                Work that
              </span>
              <span className="block bg-gradient-to-r from-tokyo-red via-electric-blue to-cyber-purple bg-clip-text text-transparent animate-gradient">
                speaks.
              </span>
            </h1>
            <p className="text-warm-gray text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              From client solutions to experimental builds, explore projects that push boundaries and solve real problems.
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-warm-gray/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-tokyo-red rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Client Work Section */}
      <section className="py-32 relative overflow-hidden bg-urban-gray/5">
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-electric-blue" />
              <h2 className="text-5xl md:text-6xl font-bold">
                Client Work
              </h2>
            </div>
            <p className="text-warm-gray text-xl max-w-3xl leading-relaxed">
              Real solutions for real businesses. From e-commerce platforms to internal dashboards, these projects helped companies streamline operations and grow.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clientProjects.map((project, index) => (
              <div
                key={project.title}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  href={project.href}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <Code className="w-8 h-8 text-cyber-purple" />
              <h2 className="text-5xl md:text-6xl font-bold">
                Projects
              </h2>
            </div>
            <p className="text-warm-gray text-xl max-w-3xl leading-relaxed">
              Side builds and experiments. Free tools, AI demos, and creative projects built to explore new tech and help people get things done.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div
                key={project.title}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  href={project.href}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Coming Soon */}
      <section className="py-32 relative overflow-hidden bg-urban-gray/5">
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <Package className="w-8 h-8 text-tokyo-red" />
              <h2 className="text-5xl md:text-6xl font-bold">
                Products
              </h2>
            </div>
            <p className="text-warm-gray text-xl max-w-3xl leading-relaxed">
              Building something new. Stay tuned for product launches that turn ideas into reality.
            </p>
          </div>

          {/* Coming Soon Card - Apple Style */}
          <div className="max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/20 to-electric-blue/20 rounded-tokyo blur-3xl group-hover:blur-[100px] transition-all duration-700" />

              <div className="relative bg-gradient-to-br from-urban-gray via-urban-gray/90 to-urban-gray/80 rounded-tokyo border border-tokyo-red/30 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/5 via-cyber-purple/5 to-electric-blue/5 animate-gradient" />

                {/* Content */}
                <div className="relative p-16 md:p-24 text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl animate-pulse" />
                      <Rocket className="relative w-20 h-20 text-transparent bg-gradient-accent bg-clip-text" style={{ stroke: 'url(#gradient)' }} />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF2D55" />
                            <stop offset="100%" stopColor="#9D4EDD" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
                    Something big is coming
                  </h3>

                  <p className="text-warm-gray text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
                    Currently building a product that will change how you work. Can&apos;t say much yet, but it&apos;s going to be worth the wait.
                  </p>

                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-black/50 border border-tokyo-red/30 rounded-full">
                    <Sparkles className="w-4 h-4 text-tokyo-red animate-pulse" />
                    <span className="text-warm-gray text-sm font-medium">In Development</span>
                  </div>

                  {/* Decorative elements */}
                  <div className="mt-12 flex justify-center gap-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-tokyo-red/30"
                        style={{
                          animation: `pulse 2s infinite ${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Style */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black via-urban-gray/20 to-primary-black" />
        <div className="absolute inset-0 wave-pattern opacity-20" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Ready to create
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">something amazing?</span>
          </h2>

          <p className="text-warm-gray text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether it&apos;s a complex automation, custom dashboard, or full web application — let&apos;s build it together.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact/" className="text-lg px-10 py-5">
              Start a Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/services/" variant="secondary" className="text-lg px-10 py-5">
              View Services
            </Button>
          </div>

          <p className="text-tokyo-red font-noto text-lg mt-12 opacity-60">
            一緒に素晴らしいものを作りましょう
          </p>
        </div>
      </section>
    </>
  )
}
