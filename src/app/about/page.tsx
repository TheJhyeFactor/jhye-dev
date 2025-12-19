import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About | Jhye O\'Meley',
  description: 'Developer focused on automation, system design, and clean digital solutions.',
}

const tools = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Google Apps Script', 'Python', 'TailwindCSS', 'PostgreSQL',
  'REST APIs', 'Docker', 'AWS', 'CI/CD', 'Automation', 'Git',
  'Cloudflare', 'Vercel'
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
                I&apos;m a developer focused on automation, system design, and clean digital solutions. Originally from Australia, now based in Tokyo, Japan.
              </p>
              <p>
                My coding journey started at 12, building games and learning from YouTube tutorials. At 17, I left school to pursue a Diploma in Information & Computer Science (IFCS), and I&apos;ve been applying software development skills professionally for the past 4 years.
              </p>
              <p>
                Working fully remote, I&apos;ve collaborated with clients across Australia — previously flying interstate for on-site projects, now delivering solutions from anywhere. I help businesses move faster with precise, efficient systems built around real workflows.
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

          {/* Credentials */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 accent-line pb-2">Education & Credentials</h2>
            <div className="p-6 bg-urban-gray/50 rounded-tokyo border border-electric-blue/20">
              <h3 className="text-snow-white font-semibold mb-2">Diploma in Information & Computer Science (IFCS)</h3>
              <p className="text-warm-gray text-sm">Foundation in software development, systems design, and computer science principles</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 accent-line pb-2">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-urban-gray/50 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <p className="text-warm-gray text-sm">Projects delivered across automation, web development, and system integration</p>
              </div>
              <div className="p-5 bg-urban-gray/50 rounded-tokyo border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <div className="text-3xl font-bold text-transparent bg-gradient-accent-blue bg-clip-text mb-2">4 Years</div>
                <p className="text-warm-gray text-sm">Professional software development experience building production systems</p>
              </div>
              <div className="p-5 bg-urban-gray/50 rounded-tokyo border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-300">
                <div className="text-3xl font-bold text-cyber-purple mb-2">65%</div>
                <p className="text-warm-gray text-sm">Average workflow efficiency improvement through automation solutions</p>
              </div>
              <div className="p-5 bg-urban-gray/50 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">20+hrs</div>
                <p className="text-warm-gray text-sm">Weekly time savings delivered to clients through process automation</p>
              </div>
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
