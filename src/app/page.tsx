import { Zap, Code, BarChart3, Settings, MessageSquare } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import Button from '@/components/Button'
import TypingText from '@/components/TypingText'

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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-tokyo-red/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-transparent bg-gradient-accent bg-clip-text animate-gradient text-sm font-medium tracking-widest mb-6 animate-fade-in">
              AUTOMATION • DEVELOPMENT • OPTIMISATION
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in stagger-1">
              <span className="inline-block bg-gradient-to-r from-snow-white via-snow-white to-tokyo-red bg-clip-text text-transparent animate-gradient">
                Jhye O&apos;Meley
              </span>
            </h1>
            <p className="text-warm-gray font-noto text-lg mb-8 animate-fade-in stagger-2">
              <TypingText text="ジェイ・オメリー" speed={150} />
            </p>
            <p className="text-warm-gray text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in stagger-3">
              I build fast, clean systems that help businesses move with clarity and precision.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in stagger-4">
              <Button href="/portfolio/">View Work</Button>
              <Button href="/contact/" variant="secondary">Contact Me</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-primary-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-tokyo-red text-sm font-medium tracking-widest mb-4">SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-semibold">What I Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-urban-gray/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to build something?
          </h2>
          <p className="text-warm-gray text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your project and see how I can help streamline your systems.
          </p>
          <Button href="/contact/">Get in Touch</Button>
        </div>
      </section>
    </>
  )
}
