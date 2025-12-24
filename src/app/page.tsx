'use client'

import { useState, useEffect } from 'react'
import { Zap, Code, BarChart3, Settings, MessageSquare, ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import TypingText from '@/components/TypingText'
import SakuraPetals from '@/components/SakuraPetals'
import JapaneseDivider from '@/components/JapaneseDivider'

const services = [
  {
    icon: Zap,
    title: 'Automation & Integrations',
    description: 'Streamlining workflows through custom logic, scripts, and smart systems that eliminate repetitive tasks.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Fast, modern builds using clean component structures. Focused on performance and maintainability.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Reporting',
    description: 'Clear, visual tools that turn noise into insight. Real-time data at a glance.',
  },
  {
    icon: Settings,
    title: 'Apps Script Solutions',
    description: 'Custom Google Workspace automation. Sheets, Docs, Forms — connected and efficient.',
  },
  {
    icon: MessageSquare,
    title: 'Technical Consulting',
    description: 'High-level guidance for infrastructure, data flow, and digital strategy.',
  },
]

const featuredProjects = [
  {
    title: 'TransportationME',
    description: 'Logistics platform for a transportation company. Route planning, fleet tracking, real-time updates - all the stuff they need to run their operations efficiently.',
    image: '/images/projects/transportation-me.png',
    tags: ['WordPress', 'Dashboard', 'Automation', 'Logistics'],
    href: 'https://transportationme.au/',
  },
  {
    title: 'Real-Time Object Detection',
    description: 'Webcam-based object detection using TensorFlow.js. Point your camera at stuff and it identifies what it sees in real-time. Went with a cyberpunk theme because why not.',
    image: '/images/projects/Realtimeobj.jpeg',
    tags: ['AI/ML', 'TensorFlow.js', 'Computer Vision', 'WebGL'],
    href: 'https://thejhyefactor.github.io/object-detection/',
  },
  {
    title: 'CareerLift',
    description: 'Free resume builder I made for people getting back into the workforce or switching careers. ATS-friendly templates, cover letters, interview tips. Everything runs client-side so your data stays private.',
    image: '/images/projects/CareeLift.jpeg',
    tags: ['React', 'Resume Builder', 'PDF Export', 'Career Tools'],
    href: 'https://thejhyefactor.github.io/careerlift/',
  },
]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <SakuraPetals />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-black via-urban-gray/10 to-primary-black" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255, 49, 49, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(0, 194, 255, 0.15) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 wave-pattern opacity-10" />

        <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl">
            <p
              className="text-transparent bg-gradient-accent bg-clip-text animate-gradient text-sm font-medium tracking-widest mb-8 animate-fade-in"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                opacity: 1 - scrollY / 800
              }}
            >
              AUTOMATION • DEVELOPMENT • OPTIMISATION
            </p>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                opacity: 1 - scrollY / 600
              }}
            >
              <span className="inline-block bg-gradient-to-r from-snow-white via-snow-white to-tokyo-red bg-clip-text text-transparent animate-gradient">
                Jhye O&apos;Meley
              </span>
            </h1>
            <p
              className="text-warm-gray font-noto text-xl md:text-2xl mb-10 animate-fade-in stagger-2"
              style={{
                transform: `translateY(${scrollY * 0.15}px)`,
                opacity: 1 - scrollY / 700
              }}
            >
              <TypingText text="ジェイ・オメリー" speed={150} />
            </p>
            <p className="text-warm-gray text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl animate-fade-in stagger-3">
              Building fast, clean systems that help businesses move with clarity and precision.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in stagger-4">
              <Button href="/portfolio/">
                View Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/contact/" variant="secondary">Contact Me</Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-warm-gray/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-tokyo-red rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-urban-gray/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative text-center p-12 bg-urban-gray/30 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red">
                <TrendingUp className="w-12 h-12 text-tokyo-red mx-auto mb-4" />
                <div className="text-6xl font-bold gradient-text mb-3">17</div>
                <div className="text-warm-gray">Projects Delivered</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative text-center p-12 bg-urban-gray/30 rounded-tokyo border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-blue">
                <Sparkles className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                <div className="text-6xl font-bold text-transparent bg-gradient-accent-blue bg-clip-text mb-3">65%</div>
                <div className="text-warm-gray">Avg. Efficiency Gain</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative text-center p-12 bg-urban-gray/30 rounded-tokyo border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-purple">
                <Users className="w-12 h-12 text-cyber-purple mx-auto mb-4" />
                <div className="text-6xl font-bold text-cyber-purple mb-3">4yrs</div>
                <div className="text-warm-gray">Professional Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokyo Life Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <JapaneseDivider character="東" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
            <div>
              <p className="text-tokyo-red text-sm font-medium tracking-widest mb-4 font-noto">東京</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Based in Tokyo</h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Working remotely from the heart of Japan, blending precision engineering with the minimalist philosophy of Tokyo design. Every project carries the spirit of <span className="text-tokyo-red font-noto">改善</span> (kaizen) — continuous improvement.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="group px-6 py-4 bg-urban-gray/50 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all hover:scale-105">
                  <p className="text-xs text-warm-gray mb-1">Local Time</p>
                  <p className="text-snow-white font-semibold text-lg">JST (UTC+9)</p>
                </div>
                <div className="group px-6 py-4 bg-urban-gray/50 rounded-tokyo border border-electric-blue/20 hover:border-electric-blue/40 transition-all hover:scale-105">
                  <p className="text-xs text-warm-gray mb-1">Work Style</p>
                  <p className="text-snow-white font-semibold text-lg">Fully Remote</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-tokyo-red pl-6 py-4 italic text-warm-gray">
                &ldquo;<span className="font-noto text-xl">完璧</span><br />
                Perfect execution, every time.&rdquo;
              </blockquote>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/20 to-electric-blue/20 rounded-tokyo blur-2xl group-hover:blur-3xl transition-all duration-700" />
              <div className="relative p-10 bg-gradient-to-br from-urban-gray via-urban-gray/80 to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/30 shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                <div className="absolute top-4 right-4">
                  <span className="hanko text-xl">ジェイ</span>
                </div>
                <div className="space-y-8">
                  <div className="group/item">
                    <h3 className="text-snow-white font-semibold mb-3 flex items-center gap-3 text-xl">
                      <span className="text-4xl font-noto">🏯</span>
                      Japanese Philosophy
                    </h3>
                    <p className="text-warm-gray">
                      Embracing <span className="text-electric-blue font-noto font-semibold">侘寂</span> (wabi-sabi) — finding beauty in simplicity and impermanence
                    </p>
                  </div>
                  <div className="group/item">
                    <h3 className="text-snow-white font-semibold mb-3 flex items-center gap-3 text-xl">
                      <span className="text-4xl font-noto">⛩️</span>
                      Cultural Fusion
                    </h3>
                    <p className="text-warm-gray">
                      Australian roots meet Japanese precision in every line of code
                    </p>
                  </div>
                  <div className="group/item">
                    <h3 className="text-snow-white font-semibold mb-3 flex items-center gap-3 text-xl">
                      <span className="text-4xl font-noto">🌸</span>
                      Seasonal Mindset
                    </h3>
                    <p className="text-warm-gray">
                      Adapting and evolving with each project, like the changing seasons
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical Japanese text decoration */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 vertical-text text-tokyo-red/20 text-8xl font-bold pointer-events-none hidden lg:block">
                東京
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 bg-urban-gray/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <JapaneseDivider character="作" />

          <div className="mb-16 mt-20 text-center">
            <p className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-4 font-noto">特集プロジェクト</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              A selection of recent projects showcasing automation, AI/ML, and web development solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 to-electric-blue/10 rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative transform hover:scale-105 hover:-rotate-1 transition-all duration-500">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      href={project.href}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/portfolio/">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <JapaneseDivider character="業" />

          <div className="mb-16 mt-20 text-center">
            <p className="text-tokyo-red text-sm font-medium tracking-widest mb-4 font-noto">サービス</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Do</h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Specialized services designed to solve real business problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/5 to-electric-blue/5 rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative transform hover:scale-105 transition-all duration-500">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services/" variant="secondary">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-urban-gray/5 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <JapaneseDivider character="声" />

          <div className="mb-16 mt-20 text-center">
            <p className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-4 font-noto">お客様の声</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 bg-urban-gray/50 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-tokyo-red text-2xl">★</span>
                  ))}
                </div>
                <p className="text-warm-gray leading-relaxed mb-8 italic text-lg">
                  &ldquo;Jhye completely transformed our order management workflow. What used to take 3 hours now takes 15 minutes. The automation he built is seamless and has saved us countless hours.&rdquo;
                </p>
                <div>
                  <p className="text-snow-white font-semibold text-lg">Sarah Mitchell</p>
                  <p className="text-warm-gray/60 text-sm">Operations Manager, TechFlow Solutions</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 bg-urban-gray/50 rounded-tokyo border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-blue">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-electric-blue text-2xl">★</span>
                  ))}
                </div>
                <p className="text-warm-gray leading-relaxed mb-8 italic text-lg">
                  &ldquo;Working with Jhye was fantastic. He delivered our custom dashboard ahead of schedule and it&apos;s exactly what we needed. The clarity in our reporting has been game-changing.&rdquo;
                </p>
                <div>
                  <p className="text-snow-white font-semibold text-lg">Marcus Chen</p>
                  <p className="text-warm-gray/60 text-sm">Founder, DataMetrics AU</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 bg-urban-gray/50 rounded-tokyo border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-purple">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-cyber-purple text-2xl">★</span>
                  ))}
                </div>
                <p className="text-warm-gray leading-relaxed mb-8 italic text-lg">
                  &ldquo;Jhye&apos;s technical expertise is outstanding. He quickly understood our complex requirements and built a solution that integrates perfectly with our existing systems. Highly recommend.&rdquo;
                </p>
                <div>
                  <p className="text-snow-white font-semibold text-lg">Jennifer Wang</p>
                  <p className="text-warm-gray/60 text-sm">CTO, CloudSync Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 via-primary-black to-electric-blue/10" />
        <div className="absolute inset-0 wave-pattern opacity-20" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to build something?
          </h2>
          <p className="text-warm-gray text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s talk about your project and see how I can help streamline your systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact/" className="text-lg px-8 py-4">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/services/" variant="secondary" className="text-lg px-8 py-4">
              View Services
            </Button>
          </div>
          <p className="text-tokyo-red font-noto text-lg mt-12">
            一緒に素晴らしいものを作りましょう
          </p>
        </div>
      </section>
    </>
  )
}
