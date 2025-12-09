import { Metadata } from 'next'
import { Zap, Code, BarChart3, Settings, MessageSquare, Database } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Services | Jhye O\'Meley',
  description: 'Automation, web development, dashboards, Apps Script solutions, and technical consulting.',
}

const services = [
  {
    icon: Zap,
    title: 'Automation & Integrations',
    description: 'Streamlining workflows through custom logic, scripts, and smart systems. Connect your tools, eliminate repetitive tasks, and let your business run smoother.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Fast, modern builds using clean component structures. React, Next.js, and static sites optimized for performance and maintainability.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Reporting',
    description: 'Clear, visual tools that turn noise into insight. Real-time data displays, KPI tracking, and reporting systems that actually get used.',
  },
  {
    icon: Settings,
    title: 'Apps Script Solutions',
    description: 'Custom Google Workspace automation. Sheets, Docs, Forms, Gmail — all connected and working together efficiently.',
  },
  {
    icon: Database,
    title: 'API Development',
    description: 'Clean, well-documented APIs that connect your systems. RESTful design, proper error handling, and built for scale.',
  },
  {
    icon: MessageSquare,
    title: 'Technical Consulting',
    description: 'High-level guidance for infrastructure, data flow, and digital strategy. Get clarity on the right approach before building.',
  },
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-tokyo-red text-sm font-medium tracking-widest mb-6">
            SERVICES
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            What I Do
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed">
            I build systems that solve real problems. Each project is approached with a focus on clarity, efficiency, and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="bg-urban-gray rounded-tokyo p-10 md:p-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              How I Work
            </h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                Every project starts with understanding. I take time to learn your workflows, identify friction points, and understand what success looks like for you.
              </p>
              <p>
                From there, I design and build with precision — no unnecessary complexity, no feature bloat. Just clean solutions that work.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact/">Start a Conversation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
