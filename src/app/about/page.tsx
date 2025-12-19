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
      <div className="absolute bottom-40 -left-20 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-6 animate-fade-in">
            ABOUT ME
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in stagger-1">
            Jhye O&apos;Meley
          </h1>
          <p className="text-warm-gray font-noto text-xl mb-2 animate-fade-in stagger-2">
            ジェイ・オメリー
          </p>
          <p className="text-warm-gray text-lg animate-fade-in stagger-3">
            22 • Developer • Tokyo, Japan 🇯🇵
          </p>
        </div>

        {/* Profile & Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          {/* Profile Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <div className="relative aspect-square rounded-tokyo overflow-hidden border-2 border-tokyo-red/30 shadow-glow-red group">
                <Image
                  src="https://i.postimg.cc/zBzVZGqD/IMG-1974.jpg"
                  alt="Jhye O'Meley"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: 'center 20%' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/0 to-cyber-purple/0 group-hover:from-tokyo-red/20 group-hover:to-cyber-purple/20 transition-all duration-500" />
              </div>

              {/* Quick Stats Below Image */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-urban-gray/50 rounded-tokyo border border-tokyo-red/20">
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-xs text-warm-gray mt-1">Projects</div>
                </div>
                <div className="text-center p-4 bg-urban-gray/50 rounded-tokyo border border-electric-blue/20">
                  <div className="text-2xl font-bold text-transparent bg-gradient-accent-blue bg-clip-text">4yrs</div>
                  <div className="text-xs text-warm-gray mt-1">Experience</div>
                </div>
                <div className="text-center p-4 bg-urban-gray/50 rounded-tokyo border border-cyber-purple/20">
                  <div className="text-2xl font-bold text-cyber-purple">65%</div>
                  <div className="text-xs text-warm-gray mt-1">Efficiency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Journey Timeline */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 accent-line pb-3">My Journey</h2>

              <div className="space-y-6">
                {/* Age 12 */}
                <div className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-accent mt-2 group-hover:scale-150 transition-transform duration-300" />
                    <div className="w-0.5 h-full bg-gradient-accent/30 mt-2" />
                  </div>
                  <div className="pb-8">
                    <div className="text-tokyo-red font-semibold mb-1">Age 12 • 2014</div>
                    <h3 className="text-snow-white font-semibold mb-2">Started Coding</h3>
                    <p className="text-warm-gray">Discovered programming through game development. Built first games watching YouTube tutorials, learning by doing.</p>
                  </div>
                </div>

                {/* Age 17 */}
                <div className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-accent-blue mt-2 group-hover:scale-150 transition-transform duration-300" />
                    <div className="w-0.5 h-full bg-gradient-accent-blue/30 mt-2" />
                  </div>
                  <div className="pb-8">
                    <div className="text-electric-blue font-semibold mb-1">Age 17 • 2019</div>
                    <h3 className="text-snow-white font-semibold mb-2">Education Path</h3>
                    <p className="text-warm-gray">Left traditional school to pursue Diploma in Information & Computer Science (IFCS). Focused on software development, systems design, and CS fundamentals.</p>
                  </div>
                </div>

                {/* Age 18-22 */}
                <div className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-cyber-purple mt-2 group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  <div>
                    <div className="text-cyber-purple font-semibold mb-1">Age 18-22 • 2020-Present</div>
                    <h3 className="text-snow-white font-semibold mb-2">Professional Development</h3>
                    <p className="text-warm-gray mb-4">4 years building production systems professionally. Delivered 10+ projects in automation, web development, and system integration. Now working fully remote from Tokyo, serving clients across Australia and beyond.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-tokyo-red/20 border border-tokyo-red/30 rounded-full text-xs text-tokyo-red">Automation</span>
                      <span className="px-3 py-1 bg-electric-blue/20 border border-electric-blue/30 rounded-full text-xs text-electric-blue">Web Development</span>
                      <span className="px-3 py-1 bg-cyber-purple/20 border border-cyber-purple/30 rounded-full text-xs text-cyber-purple">System Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center accent-line pb-3 inline-block">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className="px-5 py-3 text-sm font-medium text-warm-gray bg-urban-gray/50 border border-warm-gray/20 rounded-tokyo hover:border-tokyo-red/50 hover:text-snow-white hover:shadow-glow-red hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center accent-line pb-3 inline-block">Impact & Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-8 bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-red text-center group">
              <div className="text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-snow-white font-semibold mb-2">Projects Delivered</div>
              <p className="text-warm-gray text-xs">Automation, web apps, and integrations</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo border-2 border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-blue text-center group">
              <div className="text-5xl font-bold text-transparent bg-gradient-accent-blue bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">4</div>
              <div className="text-snow-white font-semibold mb-2">Years Professional</div>
              <p className="text-warm-gray text-xs">Building production systems</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo border-2 border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-purple text-center group">
              <div className="text-5xl font-bold text-cyber-purple mb-3 group-hover:scale-110 transition-transform duration-300">65%</div>
              <div className="text-snow-white font-semibold mb-2">Avg. Efficiency Gain</div>
              <p className="text-warm-gray text-xs">Through automation solutions</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-red text-center group">
              <div className="text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">20+</div>
              <div className="text-snow-white font-semibold mb-2">Hours Saved Weekly</div>
              <p className="text-warm-gray text-xs">For clients through automation</p>
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="max-w-4xl mx-auto">
          <div className="p-12 bg-gradient-to-br from-urban-gray via-urban-gray/80 to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/30 shadow-glow-red relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/5 to-cyber-purple/5" />
            <div className="relative z-10 text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                &ldquo;Minimal code. Maximum clarity.&rdquo;
              </p>
              <p className="text-warm-gray">
                The guiding principle behind every project I build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
