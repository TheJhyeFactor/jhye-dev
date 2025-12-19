import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About | Jhye O\'Meley',
  description: 'Developer focused on automation, system design, and clean digital solutions.',
}

const tools = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Google Apps Script', 'Python', 'TailwindCSS', 'PostgreSQL',
  'REST APIs', 'Automation', 'Git', 'Cloudflare', 'Vercel'
]

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-40 -right-20 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="relative aspect-square rounded-tokyo overflow-hidden border border-tokyo-red/20 shadow-glow-red group">
                <Image
                  src="https://i.postimg.cc/zBzVZGqD/IMG-1974.jpg"
                  alt="Jhye O'Meley"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center 20%' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/0 to-cyber-purple/0 group-hover:from-tokyo-red/10 group-hover:to-cyber-purple/10 transition-all duration-500" />
              </div>
              <p className="mt-6 text-center text-warm-gray font-noto">
                ジェイ・オメリー
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <p className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-6">
              ABOUT
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-8">
              Jhye O&apos;Meley
            </h1>

            <div className="space-y-6 text-warm-gray text-lg leading-relaxed">
              <p>
                I&apos;m a developer focused on automation, system design, and clean digital solutions.
              </p>
              <p>
                I help businesses move faster with precise, efficient systems built around real workflows. My approach is simple: understand the problem deeply, then build the minimum required to solve it elegantly.
              </p>
              <p>
                I design systems that reduce noise and increase clarity. Whether it&apos;s automating repetitive tasks, building custom dashboards, or creating web applications — the goal is always the same: make things work better with less friction.
              </p>
            </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 accent-line pb-2">Toolset</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm text-warm-gray bg-urban-gray/50 border border-warm-gray/20 rounded-tokyo hover:border-tokyo-red/50 hover:text-snow-white hover:shadow-glow-red transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo border border-tokyo-red/20 shadow-glow-red">
            <p className="text-snow-white text-lg font-medium mb-2 gradient-text">
              &ldquo;Minimal code. Maximum clarity.&rdquo;
            </p>
            <p className="text-warm-gray text-sm">
              — The guiding principle behind every project.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
