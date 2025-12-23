import { Zap, Code, BarChart3, Settings, MessageSquare } from 'lucide-react'
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
  return (
    <>
      <SakuraPetals />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-40" />
        <div className="absolute inset-0 grid-background opacity-20" />

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

      {/* Quick Impact Stats */}
      <section className="py-16 bg-primary-black border-t border-urban-gray/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-urban-gray/30 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-red">
              <div className="text-5xl font-bold gradient-text mb-2">14</div>
              <div className="text-warm-gray text-sm">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-urban-gray/30 rounded-tokyo border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue">
              <div className="text-5xl font-bold text-transparent bg-gradient-accent-blue bg-clip-text mb-2">65%</div>
              <div className="text-warm-gray text-sm">Avg. Efficiency Gain</div>
            </div>
            <div className="text-center p-6 bg-urban-gray/30 rounded-tokyo border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-purple">
              <div className="text-5xl font-bold text-cyber-purple mb-2">4yrs</div>
              <div className="text-warm-gray text-sm">Professional Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokyo Life Section */}
      <section className="py-24 bg-primary-black border-t border-urban-gray/30 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <JapaneseDivider character="東" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <p className="text-tokyo-red text-sm font-medium tracking-widest mb-4 font-noto">東京</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Based in Tokyo</h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                Working remotely from the heart of Japan, blending precision engineering with the minimalist philosophy of Tokyo design. Every project carries the spirit of <span className="text-tokyo-red font-noto">改善</span> (kaizen) — continuous improvement.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="px-4 py-2 bg-urban-gray/50 rounded-tokyo border border-tokyo-red/20">
                  <p className="text-xs text-warm-gray mb-1">Local Time</p>
                  <p className="text-snow-white font-semibold">JST (UTC+9)</p>
                </div>
                <div className="px-4 py-2 bg-urban-gray/50 rounded-tokyo border border-electric-blue/20">
                  <p className="text-xs text-warm-gray mb-1">Work Style</p>
                  <p className="text-snow-white font-semibold">Fully Remote</p>
                </div>
              </div>
              <p className="text-warm-gray italic">
                &ldquo;<span className="font-noto">完璧</span> Perfect execution, every time.&rdquo;
              </p>
            </div>

            <div className="relative">
              <div className="p-8 bg-gradient-to-br from-urban-gray via-urban-gray/80 to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/30 shadow-glow-red relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="hanko text-sm">ジェイ</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-snow-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-2xl font-noto">🏯</span>
                      Japanese Philosophy
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Embracing <span className="text-electric-blue font-noto">侘寂</span> (wabi-sabi) — finding beauty in simplicity and impermanence
                    </p>
                  </div>
                  <div>
                    <h3 className="text-snow-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-2xl font-noto">⛩️</span>
                      Cultural Fusion
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Australian roots meet Japanese precision in every line of code
                    </p>
                  </div>
                  <div>
                    <h3 className="text-snow-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-2xl font-noto">🌸</span>
                      Seasonal Mindset
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Adapting and evolving with each project, like the changing seasons
                    </p>
                  </div>
                </div>
              </div>

              {/* Vertical Japanese text decoration */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 vertical-text text-tokyo-red/20 text-6xl font-bold pointer-events-none hidden lg:block">
                東京
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-primary-black border-t border-urban-gray/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <JapaneseDivider character="作" />

          <div className="mb-16 mt-16 text-center">
            <p className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-4 font-noto">特集プロジェクト</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Work</h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              A selection of recent projects showcasing automation, AI/ML, and web development solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
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
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/portfolio/">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-primary-black border-t border-urban-gray/30">
        <div className="max-w-6xl mx-auto px-6">
          <JapaneseDivider character="業" />

          <div className="mb-16 mt-16 text-center">
            <p className="text-tokyo-red text-sm font-medium tracking-widest mb-4 font-noto">サービス</p>
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

      {/* Testimonials Section */}
      <section className="py-24 bg-primary-black border-t border-urban-gray/30 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <JapaneseDivider character="声" />

          <div className="mb-16 mt-16 text-center">
            <p className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-4 font-noto">お客様の声</p>
            <h2 className="text-3xl md:text-4xl font-semibold">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 bg-urban-gray/50 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-red">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-tokyo-red text-xl">★</span>
                ))}
              </div>
              <p className="text-warm-gray text-sm leading-relaxed mb-6 italic">
                &ldquo;Jhye completely transformed our order management workflow. What used to take 3 hours now takes 15 minutes. The automation he built is seamless and has saved us countless hours.&rdquo;
              </p>
              <div>
                <p className="text-snow-white font-semibold">Sarah Mitchell</p>
                <p className="text-warm-gray/60 text-xs">Operations Manager, TechFlow Solutions</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-urban-gray/50 rounded-tokyo border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-blue">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-electric-blue text-xl">★</span>
                ))}
              </div>
              <p className="text-warm-gray text-sm leading-relaxed mb-6 italic">
                &ldquo;Working with Jhye was fantastic. He delivered our custom dashboard ahead of schedule and it&apos;s exactly what we needed. The clarity in our reporting has been game-changing.&rdquo;
              </p>
              <div>
                <p className="text-snow-white font-semibold">Marcus Chen</p>
                <p className="text-warm-gray/60 text-xs">Founder, DataMetrics AU</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 bg-urban-gray/50 rounded-tokyo border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-purple">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-cyber-purple text-xl">★</span>
                ))}
              </div>
              <p className="text-warm-gray text-sm leading-relaxed mb-6 italic">
                &ldquo;Jhye&apos;s technical expertise is outstanding. He quickly understood our complex requirements and built a solution that integrates perfectly with our existing systems. Highly recommend.&rdquo;
              </p>
              <div>
                <p className="text-snow-white font-semibold">Jennifer Wang</p>
                <p className="text-warm-gray/60 text-xs">CTO, CloudSync Systems</p>
              </div>
            </div>
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
