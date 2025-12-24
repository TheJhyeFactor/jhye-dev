'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, TrendingUp, Users, Sparkles, Zap } from 'lucide-react'
import SakuraPetals from '@/components/SakuraPetals'
import JapaneseDivider from '@/components/JapaneseDivider'
import Button from '@/components/Button'

const techStack = {
  'Frontend': [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS'
  ],
  'Backend & Database': [
    'Node.js', 'Python', 'PostgreSQL', 'REST APIs'
  ],
  'DevOps & Cloud': [
    'Docker', 'AWS', 'Vercel', 'Cloudflare', 'CI/CD', 'Git'
  ],
  'Automation & AI': [
    'Google Apps Script', 'TensorFlow.js', 'Automation Workflows'
  ]
}

export default function AboutPage() {
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
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(0, 194, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 wave-pattern opacity-10" />

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="text-center mb-16">
            <p
              className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-8 animate-fade-in font-noto"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                opacity: 1 - scrollY / 800
              }}
            >
              私について | ABOUT
            </p>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in stagger-1"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                opacity: 1 - scrollY / 600
              }}
            >
              <span className="inline-block bg-gradient-to-r from-snow-white via-snow-white to-electric-blue bg-clip-text text-transparent animate-gradient">
                Jhye O&apos;Meley
              </span>
            </h1>
            <p
              className="text-warm-gray font-noto text-xl md:text-2xl mb-4 animate-fade-in stagger-2"
              style={{
                transform: `translateY(${scrollY * 0.15}px)`,
                opacity: 1 - scrollY / 700
              }}
            >
              ジェイ・オメリー
            </p>
            <p className="text-warm-gray text-xl md:text-2xl mb-12 animate-fade-in stagger-3">
              22 • Developer • Tokyo, Japan 🇯🇵
            </p>

            <div className="flex justify-center gap-4 animate-fade-in stagger-4">
              <a
                href="https://github.com/thejhyefactor"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-urban-gray/50 rounded-tokyo border border-warm-gray/20 hover:border-tokyo-red/50 hover:bg-urban-gray/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-warm-gray group-hover:text-snow-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/jhye-omeley"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-urban-gray/50 rounded-tokyo border border-warm-gray/20 hover:border-electric-blue/50 hover:bg-urban-gray/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-blue"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-warm-gray group-hover:text-snow-white transition-colors" />
              </a>
              <a
                href="/contact"
                className="group p-4 bg-urban-gray/50 rounded-tokyo border border-warm-gray/20 hover:border-cyber-purple/50 hover:bg-urban-gray/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-purple"
                aria-label="Contact Me"
              >
                <Mail className="w-6 h-6 text-warm-gray group-hover:text-snow-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-warm-gray/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-electric-blue rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Profile & Journey Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-cyber-purple/20 rounded-tokyo blur-3xl group-hover:blur-[100px] transition-all duration-700" />
              <div className="relative aspect-square rounded-tokyo overflow-hidden border-2 border-electric-blue/30 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <Image
                  src="https://i.postimg.cc/zBzVZGqD/IMG-1974.jpg"
                  alt="Jhye O'Meley"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: 'center 20%' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/0 to-cyber-purple/0 group-hover:from-electric-blue/20 group-hover:to-cyber-purple/20 transition-all duration-700" />
              </div>

              {/* Stats Grid */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="group/stat relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 to-transparent rounded-tokyo blur-xl group-hover/stat:blur-2xl transition-all duration-500" />
                  <div className="relative text-center p-6 bg-urban-gray/50 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red">
                    <TrendingUp className="w-8 h-8 text-tokyo-red mx-auto mb-2" />
                    <div className="text-3xl font-bold gradient-text">17</div>
                    <div className="text-xs text-warm-gray mt-1">Projects</div>
                  </div>
                </div>
                <div className="group/stat relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent rounded-tokyo blur-xl group-hover/stat:blur-2xl transition-all duration-500" />
                  <div className="relative text-center p-6 bg-urban-gray/50 rounded-tokyo border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-blue">
                    <Users className="w-8 h-8 text-electric-blue mx-auto mb-2" />
                    <div className="text-3xl font-bold text-transparent bg-gradient-accent-blue bg-clip-text">4yrs</div>
                    <div className="text-xs text-warm-gray mt-1">Experience</div>
                  </div>
                </div>
                <div className="group/stat relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent rounded-tokyo blur-xl group-hover/stat:blur-2xl transition-all duration-500" />
                  <div className="relative text-center p-6 bg-urban-gray/50 rounded-tokyo border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-purple">
                    <Sparkles className="w-8 h-8 text-cyber-purple mx-auto mb-2" />
                    <div className="text-3xl font-bold text-cyber-purple">65%</div>
                    <div className="text-xs text-warm-gray mt-1">Efficiency</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="space-y-8">
              <div>
                <p className="text-electric-blue text-sm font-medium tracking-widest mb-4">THE JOURNEY</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  My Story <span className="font-noto text-electric-blue">| 私の旅</span>
                </h2>
              </div>

              <div className="space-y-6">
                {/* Age 12 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-tokyo-red/5 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative flex gap-4 p-6 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-gradient-accent mt-1 group-hover:scale-150 transition-transform duration-300" />
                      <div className="w-0.5 h-full bg-gradient-accent/30 mt-2" />
                    </div>
                    <div className="flex-1">
                      <div className="text-tokyo-red font-semibold mb-2">Age 12 • 2014</div>
                      <h3 className="text-snow-white font-semibold text-lg mb-2">Started Coding</h3>
                      <p className="text-warm-gray">Discovered programming through game development. Built first games watching YouTube tutorials, learning by doing.</p>
                    </div>
                  </div>
                </div>

                {/* Age 17 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative flex gap-4 p-6 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-gradient-accent-blue mt-1 group-hover:scale-150 transition-transform duration-300" />
                      <div className="w-0.5 h-full bg-gradient-accent-blue/30 mt-2" />
                    </div>
                    <div className="flex-1">
                      <div className="text-electric-blue font-semibold mb-2">Age 17 • 2019</div>
                      <h3 className="text-snow-white font-semibold text-lg mb-2">Education Path</h3>
                      <p className="text-warm-gray">Left traditional school to pursue Diploma in Information & Computer Science. Focused on software development, systems design, and CS fundamentals.</p>
                    </div>
                  </div>
                </div>

                {/* Age 18-22 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative flex gap-4 p-6 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-cyber-purple/40 transition-all duration-500 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-cyber-purple mt-1 group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="text-cyber-purple font-semibold mb-2">Age 18-22 • 2020-Present</div>
                      <h3 className="text-snow-white font-semibold text-lg mb-2">Professional Development</h3>
                      <p className="text-warm-gray mb-4">4 years building production systems professionally. Delivered 17 projects in automation, web development, and system integration. Now working fully remote from Tokyo.</p>
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
        </div>
      </section>

      {/* Currently Section */}
      <section className="py-32 bg-urban-gray/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-cyber-purple/10 rounded-tokyo blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <div className="relative p-12 bg-gradient-to-br from-urban-gray via-urban-gray/80 to-urban-gray/50 rounded-tokyo border-2 border-electric-blue/30 shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-cyber-purple/5" />
              <div className="absolute inset-0 grid-background opacity-10" />
              <div className="absolute top-4 right-4">
                <span className="hanko text-xl">今</span>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                  <Zap className="w-10 h-10 text-electric-blue" />
                  <span>Currently</span>
                  <span className="font-noto text-warm-gray text-2xl">| 現在</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-tokyo-red mt-2 animate-pulse" />
                    <div>
                      <p className="text-snow-white font-semibold text-lg mb-2">Exploring AI/ML with TensorFlow.js</p>
                      <p className="text-warm-gray">Building real-time computer vision applications and experimenting with neural networks in the browser.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-electric-blue mt-2 animate-pulse" />
                    <div>
                      <p className="text-snow-white font-semibold text-lg mb-2">Deepening Cloud Architecture Knowledge</p>
                      <p className="text-warm-gray">Advancing AWS skills for scalable serverless applications and infrastructure automation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-cyber-purple mt-2 animate-pulse" />
                    <div>
                      <p className="text-snow-white font-semibold text-lg mb-2">Building Community Tools</p>
                      <p className="text-warm-gray">Creating free, accessible web applications like CareerLift to help underserved communities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <JapaneseDivider character="技" />
          <div className="text-center mb-16 mt-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology Stack <span className="font-noto text-electric-blue">| 技術</span>
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Modern tools and technologies I use to build production systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(techStack).map(([category, tools], categoryIndex) => (
              <div key={category} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/5 to-electric-blue/5 rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-tokyo-red/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red">
                  <h3 className="text-2xl font-semibold text-snow-white mb-6">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {tools.map((tool, toolIndex) => (
                      <span
                        key={tool}
                        className="px-4 py-2 text-sm font-medium text-warm-gray bg-urban-gray/50 border border-warm-gray/20 rounded-tokyo hover:border-tokyo-red/50 hover:text-snow-white hover:shadow-glow-red hover:-translate-y-1 transition-all duration-300 cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-32 bg-urban-gray/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <JapaneseDivider character="実" />
          <div className="text-center mb-16 mt-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Impact & Results <span className="font-noto text-cyber-purple">| 実績</span>
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              Measurable outcomes from projects delivered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red text-center">
                <TrendingUp className="w-12 h-12 text-tokyo-red mx-auto mb-4" />
                <div className="text-6xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">17</div>
                <div className="text-snow-white font-semibold text-lg mb-2">Projects Delivered</div>
                <p className="text-warm-gray text-xs">Automation, web apps, and integrations</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo border-2 border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-blue text-center">
                <Users className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                <div className="text-6xl font-bold text-transparent bg-gradient-accent-blue bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300">4</div>
                <div className="text-snow-white font-semibold text-lg mb-2">Years Professional</div>
                <p className="text-warm-gray text-xs">Building production systems</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo border-2 border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-purple text-center">
                <Sparkles className="w-12 h-12 text-cyber-purple mx-auto mb-4" />
                <div className="text-6xl font-bold text-cyber-purple mb-3 group-hover:scale-110 transition-transform duration-300">65%</div>
                <div className="text-snow-white font-semibold text-lg mb-2">Avg. Efficiency Gain</div>
                <p className="text-warm-gray text-xs">Through automation solutions</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red text-center">
                <Zap className="w-12 h-12 text-tokyo-red mx-auto mb-4" />
                <div className="text-6xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">20+</div>
                <div className="text-snow-white font-semibold text-lg mb-2">Hours Saved Weekly</div>
                <p className="text-warm-gray text-xs">For clients through automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 via-primary-black to-electric-blue/10" />
        <div className="absolute inset-0 wave-pattern opacity-20" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 to-cyber-purple/10 rounded-tokyo blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <div className="relative p-16 bg-gradient-to-br from-urban-gray via-urban-gray/80 to-urban-gray/50 rounded-tokyo border-2 border-tokyo-red/30 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/5 to-cyber-purple/5" />
              <div className="absolute inset-0 wave-pattern opacity-20" />
              <div className="absolute top-6 right-6">
                <span className="hanko text-2xl">完</span>
              </div>
              <div className="relative z-10 text-center">
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
                  &ldquo;Minimal code.<br/>Maximum clarity.&rdquo;
                </p>
                <p className="text-warm-gray text-lg mb-6">
                  The guiding principle behind every project I build.
                </p>
                <p className="text-tokyo-red font-noto text-xl mb-8">
                  簡素美 — Beauty in simplicity
                </p>
                <Button href="/contact/">Let's Work Together</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
