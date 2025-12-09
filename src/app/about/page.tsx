import { Metadata } from 'next'

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
    <section className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-tokyo-red text-sm font-medium tracking-widest mb-6">
            ABOUT
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-8">
            Jhye O&apos;Meley
          </h1>
          <p className="text-warm-gray font-noto text-lg mb-12">
            ジェイ・オメリー
          </p>

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
            <h2 className="text-2xl font-semibold mb-8">Toolset</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm text-warm-gray border border-urban-gray rounded-tokyo hover:border-tokyo-red hover:text-snow-white transition-colors duration-150"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-urban-gray rounded-tokyo">
            <p className="text-snow-white text-lg font-medium mb-2">
              &ldquo;Minimal code. Maximum clarity.&rdquo;
            </p>
            <p className="text-warm-gray text-sm">
              — The guiding principle behind every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
