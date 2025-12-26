'use client'

import { useState, useEffect } from 'react'
import { Zap, Code, BarChart3, Settings, MessageSquare, Database, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import Button from '@/components/Button'
import SakuraPetals from '@/components/SakuraPetals'

const services = [
  {
    icon: Zap,
    title: 'Automation & Integrations',
    tagline: 'Work smarter, not harder',
    description: 'Eliminate repetitive tasks and connect your tools seamlessly. Custom workflows that save hours every week.',
    benefits: [
      'Reduce manual work by 70%',
      'Connect any tools or platforms',
      'Custom logic for your workflows',
      'Real-time data synchronization'
    ],
    examples: 'Invoice automation, data syncing, email workflows, form processing',
    gradient: 'from-tokyo-red via-tokyo-red/80 to-electric-blue/40',
    color: 'tokyo-red'
  },
  {
    icon: Code,
    title: 'Web Development',
    tagline: 'Fast. Modern. Scalable.',
    description: 'Clean, performant web applications built with React and Next.js. Optimized for speed and maintainability.',
    benefits: [
      'Lightning-fast page loads',
      'Mobile-first responsive design',
      'SEO optimized out of the box',
      'Clean, maintainable codebase'
    ],
    examples: 'E-commerce sites, dashboards, landing pages, web apps',
    gradient: 'from-electric-blue via-electric-blue/80 to-cyber-purple/40',
    color: 'electric-blue'
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Reporting',
    tagline: 'Data that drives decisions',
    description: 'Visual dashboards that turn complex data into clear insights. Real-time KPIs, custom reports, and analytics.',
    benefits: [
      'Real-time data visualization',
      'Custom KPI tracking',
      'Automated report generation',
      'Interactive drill-down views'
    ],
    examples: 'Sales dashboards, analytics platforms, admin panels, monitoring systems',
    gradient: 'from-cyber-purple via-cyber-purple/80 to-neon-cyan/40',
    color: 'cyber-purple'
  },
  {
    icon: Settings,
    title: 'Apps Script Solutions',
    tagline: 'Supercharge Google Workspace',
    description: 'Custom automation for Sheets, Docs, Forms, and Gmail. Make Google Workspace work exactly how you need it.',
    benefits: [
      'Automate spreadsheet workflows',
      'Custom form processing',
      'Email automation & triggers',
      'Document generation'
    ],
    examples: 'Invoice generators, CRM systems, reporting tools, approval workflows',
    gradient: 'from-neon-cyan via-neon-cyan/80 to-electric-blue/40',
    color: 'neon-cyan'
  },
  {
    icon: Database,
    title: 'API Development',
    tagline: 'Connect everything',
    description: 'RESTful APIs that power your applications. Clean, documented, and built to scale with your business.',
    benefits: [
      'Clean API architecture',
      'Comprehensive documentation',
      'Rate limiting & security',
      'Webhook integrations'
    ],
    examples: 'REST APIs, webhooks, third-party integrations, microservices',
    gradient: 'from-electric-blue via-tokyo-red/60 to-cyber-purple/40',
    color: 'electric-blue'
  },
  {
    icon: MessageSquare,
    title: 'Technical Consulting',
    tagline: 'Strategic technical guidance',
    description: 'Get expert advice on architecture, infrastructure, and technology decisions before you build.',
    benefits: [
      'Architecture planning',
      'Technology stack selection',
      'Performance optimization',
      'Code review & audits'
    ],
    examples: 'System design, tech stack decisions, performance audits, migration planning',
    gradient: 'from-tokyo-red via-cyber-purple/60 to-electric-blue/40',
    color: 'tokyo-red'
  },
]

const process = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss your needs, workflows, and goals. I ask questions to truly understand what you\'re trying to achieve.',
    icon: MessageSquare
  },
  {
    number: '02',
    title: 'Planning',
    description: 'I design the solution, outline the approach, and get your approval before writing a single line of code.',
    icon: Code
  },
  {
    number: '03',
    title: 'Development',
    description: 'I build your solution with regular check-ins. You see progress updates and can request changes along the way.',
    icon: Settings
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We test thoroughly, deploy to production, and I provide support to ensure everything runs smoothly.',
    icon: Sparkles
  }
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)
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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-black via-urban-gray/20 to-primary-black" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 49, 49, 0.1) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <p className="text-tokyo-red text-sm font-medium tracking-widest mb-6 animate-fade-in font-noto">
            サービス | SERVICES
          </p>
          <h1
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: 1 - scrollY / 500
            }}
          >
            <span className="inline-block bg-gradient-to-r from-snow-white via-snow-white to-tokyo-red bg-clip-text text-transparent animate-gradient">
              Build. Automate.
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-electric-blue via-cyber-purple to-neon-cyan bg-clip-text text-transparent animate-gradient">
              Scale.
            </span>
          </h1>
          <p className="text-warm-gray text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Custom solutions that eliminate friction, save time, and help your business move faster.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact/">Start a Project</Button>
            <Button href="/portfolio/" variant="secondary">View Work</Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-warm-gray/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-electric-blue rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What I Offer
            </h2>
            <p className="text-warm-gray text-xl max-w-2xl mx-auto">
              Specialized services designed to solve real business problems
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-tokyo bg-gradient-to-br ${service.gradient} flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-snow-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{service.title}</h3>
                      <p className={`text-${service.color} text-sm font-medium`}>{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-warm-gray text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <CheckCircle2 className={`w-5 h-5 text-${service.color} mt-0.5 group-hover:scale-110 transition-transform`} />
                        <span className="text-warm-gray group-hover:text-snow-white transition-colors">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <p className="text-warm-gray/60 text-sm mb-2">Common Use Cases:</p>
                    <p className="text-warm-gray text-sm">{service.examples}</p>
                  </div>

                  <Button href="/contact/" className="mt-6">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Visual Card */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative group`}>
                  <div
                    className={`aspect-square rounded-tokyo bg-gradient-to-br ${service.gradient} p-12 relative overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-500 cursor-pointer`}
                    style={{
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-black/50" />
                    <div className="absolute inset-0 wave-pattern opacity-10" />

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <service.icon className="w-24 h-24 text-snow-white/90 mb-6" />
                        <h4 className="text-3xl font-bold text-snow-white mb-3">{service.title}</h4>
                        <div className="w-20 h-1 bg-snow-white/50 rounded-full" />
                      </div>

                      <div className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-snow-white/80 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-snow-white/80" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black/0 to-primary-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-urban-gray/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="text-tokyo-red font-noto text-sm mb-4">プロセス</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Work Together
            </h2>
            <p className="text-warm-gray text-xl max-w-2xl mx-auto">
              A simple, transparent process from idea to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-tokyo-red/50 to-electric-blue/50 -translate-x-1/2" />
                )}

                <div className="relative bg-urban-gray/50 rounded-tokyo p-8 border border-warm-gray/20 hover:border-tokyo-red/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-red">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl font-bold text-tokyo-red/20 group-hover:text-tokyo-red/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tokyo-red to-electric-blue flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-snow-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-snow-white">
                    {step.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-electric-blue font-noto text-sm mb-4">料金</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible Pricing
            </h2>
            <p className="text-warm-gray text-xl max-w-2xl mx-auto">
              Choose what works best for your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project-Based */}
            <div className="bg-urban-gray/30 rounded-tokyo p-8 border border-warm-gray/20 hover:border-electric-blue/40 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2">Project-Based</h3>
              <p className="text-warm-gray text-sm mb-6">Fixed scope, fixed price</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-warm-gray text-sm ml-2">per project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue mt-0.5" />
                  <span className="text-warm-gray text-sm">Clear deliverables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue mt-0.5" />
                  <span className="text-warm-gray text-sm">Fixed timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-electric-blue mt-0.5" />
                  <span className="text-warm-gray text-sm">Post-launch support</span>
                </li>
              </ul>
              <Button href="/contact/" variant="secondary" className="w-full">
                Discuss Project
              </Button>
            </div>

            {/* Retainer */}
            <div className="bg-gradient-to-br from-tokyo-red/10 to-electric-blue/10 rounded-tokyo p-8 border-2 border-tokyo-red/40 relative transform scale-105 shadow-glow-red">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-accent rounded-full text-xs font-bold text-deep-black">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Monthly Retainer</h3>
              <p className="text-warm-gray text-sm mb-6">Ongoing partnership</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-warm-gray text-sm ml-2">per month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-tokyo-red mt-0.5" />
                  <span className="text-warm-gray text-sm">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-tokyo-red mt-0.5" />
                  <span className="text-warm-gray text-sm">Flexible scope</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-tokyo-red mt-0.5" />
                  <span className="text-warm-gray text-sm">Continuous improvements</span>
                </li>
              </ul>
              <Button href="/contact/" className="w-full">
                Get Started
              </Button>
            </div>

            {/* Hourly */}
            <div className="bg-urban-gray/30 rounded-tokyo p-8 border border-warm-gray/20 hover:border-cyber-purple/40 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2">Hourly</h3>
              <p className="text-warm-gray text-sm mb-6">Pay as you go</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-warm-gray text-sm ml-2">per hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyber-purple mt-0.5" />
                  <span className="text-warm-gray text-sm">Flexible commitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyber-purple mt-0.5" />
                  <span className="text-warm-gray text-sm">Quick turnaround</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyber-purple mt-0.5" />
                  <span className="text-warm-gray text-sm">Ideal for small tasks</span>
                </li>
              </ul>
              <Button href="/contact/" variant="secondary" className="w-full">
                Book Time
              </Button>
            </div>
          </div>

          <p className="text-center text-warm-gray/60 text-sm mt-12">
            All pricing is customized based on scope and requirements. Get in touch for a detailed quote.
          </p>
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
          <p className="text-warm-gray text-xl mb-12 max-w-2xl mx-auto">
            Let's discuss your project and see how I can help streamline your systems and accelerate your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact/" className="text-lg px-8 py-4">
              Start a Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/portfolio/" variant="secondary" className="text-lg px-8 py-4">
              View Portfolio
            </Button>
          </div>

          <p className="text-tokyo-red font-noto text-sm mt-12">
            一緒に素晴らしいものを作りましょう
          </p>
        </div>
      </section>
    </>
  )
}
