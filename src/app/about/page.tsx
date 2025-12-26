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
            <p className="text-warm-gray text-xl md:text-2xl mb-6 animate-fade-in stagger-3">
              22 • Developer • Tokyo, Japan 🇯🇵
            </p>
            <p className="text-warm-gray/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in stagger-4">
              Australian kid who fell in love with code at 12. Now building things that make people&apos;s lives easier from my apartment in Tokyo.
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

            {/* Personal Story */}
            <div className="space-y-8">
              <div>
                <p className="text-electric-blue text-sm font-medium tracking-widest mb-4">THE STORY</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  How I Got Here <span className="font-noto text-electric-blue">| 私の旅</span>
                </h2>
              </div>

              <div className="space-y-6">
                {/* The Beginning */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-tokyo-red/5 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-1">
                    <h3 className="text-snow-white font-bold text-2xl mb-4 flex items-center gap-3">
                      <span className="text-3xl">🎮</span>
                      The Beginning
                    </h3>
                    <p className="text-warm-gray leading-relaxed mb-4">
                      I was 12, glued to my computer, watching YouTube tutorials on how to make games. I had this crazy idea that I could build my own version of the games I loved playing. Spoiler: my first game was terrible. But something clicked.
                    </p>
                    <p className="text-warm-gray leading-relaxed">
                      That feeling when your code actually works? When you fix a bug you&apos;ve been staring at for hours? I was hooked. Fast forward 10 years, and I&apos;m still chasing that feeling every single day.
                    </p>
                  </div>
                </div>

                {/* The Decision */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-1">
                    <h3 className="text-snow-white font-bold text-2xl mb-4 flex items-center gap-3">
                      <span className="text-3xl">🚀</span>
                      The Leap
                    </h3>
                    <p className="text-warm-gray leading-relaxed mb-4">
                      At 17, I made one of the biggest decisions of my life: I left traditional school to pursue a Diploma in Computer Science. People thought I was crazy. Maybe I was. But I knew sitting in a classroom learning things I could teach myself wasn&apos;t for me.
                    </p>
                    <p className="text-warm-gray leading-relaxed">
                      That decision changed everything. I dove deep into software development, systems design, and actually building things people could use. No regrets.
                    </p>
                  </div>
                </div>

                {/* The Now */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-cyber-purple/40 transition-all duration-500 hover:-translate-y-1">
                    <h3 className="text-snow-white font-bold text-2xl mb-4 flex items-center gap-3">
                      <span className="text-3xl">🇯🇵</span>
                      The Now
                    </h3>
                    <p className="text-warm-gray leading-relaxed mb-4">
                      Four years into my professional career, 17 projects delivered, and I&apos;m living in Tokyo doing what I love. I work with clients globally while experiencing one of the most incredible cities on Earth.
                    </p>
                    <p className="text-warm-gray leading-relaxed mb-4">
                      My days are a mix of solving complex automation puzzles, building web applications that don&apos;t suck, and constantly learning new tech. The job never gets boring because technology never stops evolving.
                    </p>
                    <p className="text-warm-gray leading-relaxed text-sm italic">
                      And yeah, I&apos;m that person who automates everything. If I have to do something manually twice, I&apos;m already thinking about how to build a script for it.
                    </p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="flex items-center gap-3">
                    <Zap className="w-10 h-10 text-electric-blue" />
                    What I&apos;m Up To
                  </span>
                  <span className="font-noto text-warm-gray text-xl mt-2 block">| 現在</span>
                </h2>
                <p className="text-warm-gray/80 text-lg leading-relaxed mb-8">
                  Here&apos;s what&apos;s occupying my brain space right now:
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-tokyo-red mt-2 animate-pulse" />
                    <div>
                      <p className="text-snow-white font-semibold text-lg mb-2">Going Deep on AI/ML</p>
                      <p className="text-warm-gray leading-relaxed">I&apos;m obsessed with TensorFlow.js right now. The idea that you can run neural networks entirely in the browser without any server? Mind-blowing. Building computer vision apps that process everything client-side means better privacy and zero server costs. Win-win.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-electric-blue mt-2 animate-pulse" />
                    <div>
                      <p className="text-snow-white font-semibold text-lg mb-2">Leveling Up Cloud Skills</p>
                      <p className="text-warm-gray leading-relaxed">AWS is massive, and I&apos;m working through it systematically. Serverless architecture, Lambda functions, automated deployments - the whole ecosystem. The goal? Build systems that scale without me having to babysit servers at 3 AM.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-cyber-purple mt-2 animate-pulse" />
                    <div>
                      <p className="text-snow-white font-semibold text-lg mb-2">Building Free Tools</p>
                      <p className="text-warm-gray leading-relaxed">Not everything has to make money. I&apos;m creating tools like CareerLift and Background Remover because I believe good technology should be accessible to everyone. If I can save someone $50/month on a subscription they can&apos;t afford, that&apos;s a win.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Code Section - Personal Interests */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <JapaneseDivider character="心" />
          <div className="text-center mb-16 mt-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-snow-white to-warm-gray bg-clip-text text-transparent">
                The Human Side
              </span>
              <span className="font-noto text-tokyo-red block mt-2">| 心</span>
            </h2>
            <p className="text-warm-gray text-xl max-w-3xl mx-auto leading-relaxed">
              I promise I&apos;m not just a code-writing robot. Here&apos;s what actually makes me, me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Living in Tokyo */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/20 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-urban-gray/30 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red h-full">
                <h3 className="text-2xl font-bold text-snow-white mb-4 flex items-center gap-3">
                  <span className="text-4xl">🇯🇵</span>
                  Living the Tokyo Dream
                </h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Moving to Tokyo was one of those &quot;why not?&quot; decisions that turned out to be one of my best. This city is wild - you can go from a 400-year-old temple to a robot cafe in 10 minutes.
                </p>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Working from my apartment here while collaborating with clients globally is surreal. I&apos;ll be debugging code at midnight with a Sydney client, then wake up and grab 7-Eleven breakfast like it&apos;s totally normal (because it is).
                </p>
                <p className="text-warm-gray/80 leading-relaxed text-sm italic">
                  Pro tip: Japanese convenience stores are better than most restaurants back home. Fight me on this.
                </p>
              </div>
            </div>

            {/* Work Philosophy */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-urban-gray/30 rounded-tokyo border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-blue h-full">
                <h3 className="text-2xl font-bold text-snow-white mb-4 flex items-center gap-3">
                  <span className="text-4xl">⚡</span>
                  My Approach to Work
                </h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  I have this thing where I can&apos;t stand inefficiency. If I see someone doing something manually that could be automated, it physically hurts me a little. That&apos;s probably why I ended up specializing in automation.
                </p>
                <p className="text-warm-gray leading-relaxed mb-4">
                  My philosophy: Write code like the next person reading it knows where you live. Clean, simple, documented. Future you (and future developers) will thank you.
                </p>
                <p className="text-warm-gray/80 leading-relaxed text-sm italic">
                  I&apos;ve spent way too many hours cursing at poorly documented code to ever inflict that on someone else.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-urban-gray/30 rounded-tokyo border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-purple h-full">
                <h3 className="text-2xl font-bold text-snow-white mb-4 flex items-center gap-3">
                  <span className="text-4xl">❤️</span>
                  What I Actually Care About
                </h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Not everything needs to be monetized. Some of the best things I&apos;ve built are completely free. Background Remover, CareerLift - these exist because I saw a problem and thought &quot;I bet I could fix that.&quot;
                </p>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Technology should help everyone, not just people with money. If I can build a free tool that saves someone from paying $50/month for a subscription they can&apos;t afford, that&apos;s worth more to me than any paycheck.
                </p>
                <p className="text-warm-gray/80 leading-relaxed text-sm italic">
                  Hot take: Open source and free tools are the future. Gatekeeping knowledge behind paywalls is lame.
                </p>
              </div>
            </div>

            {/* Reality */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/20 via-electric-blue/20 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red h-full">
                <h3 className="text-2xl font-bold text-snow-white mb-4 flex items-center gap-3">
                  <span className="text-4xl">☕</span>
                  Real Talk
                </h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  I&apos;m not some coding prodigy who never struggles. I Google things constantly. I debug for hours. I build features that don&apos;t work and have to start over. That&apos;s just part of the job.
                </p>
                <p className="text-warm-gray leading-relaxed mb-4">
                  The difference between a junior and senior developer isn&apos;t that seniors don&apos;t make mistakes - it&apos;s that we&apos;ve made so many mistakes that we know how to fix them faster.
                </p>
                <p className="text-warm-gray/80 leading-relaxed text-sm italic">
                  Also, coffee. Lots of coffee. Tokyo has some incredible coffee shops.
                </p>
              </div>
            </div>
          </div>

          {/* Random Things */}
          <div className="group relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-cyber-purple/10 to-tokyo-red/10 rounded-tokyo blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <div className="relative p-12 bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo border-2 border-electric-blue/30 hover:border-electric-blue/50 transition-all duration-500">
              <h3 className="text-3xl font-bold text-snow-white mb-3 text-center">
                Random Things About Me
              </h3>
              <p className="text-warm-gray/80 text-center mb-8 font-noto">| 豆知識</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎮</span>
                  <div>
                    <p className="text-snow-white font-semibold mb-1">Gaming Was My Gateway</p>
                    <p className="text-warm-gray text-sm">Wanted to make games, ended up making everything else. No regrets though - debugging code is just as addictive as gaming.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🌏</span>
                  <div>
                    <p className="text-snow-white font-semibold mb-1">Remote Since Before COVID</p>
                    <p className="text-warm-gray text-sm">Been fully remote since 2020. Zoom calls from Tokyo to Sydney at 2 AM? Just another Tuesday for me.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🍜</span>
                  <div>
                    <p className="text-snow-white font-semibold mb-1">Ramen Enthusiast</p>
                    <p className="text-warm-gray text-sm">Living in Tokyo means I&apos;ve tried more ramen shops than I can count. Still haven&apos;t found a bad one. Seriously.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="text-snow-white font-semibold mb-1">Phone Full of Dev Tools</p>
                    <p className="text-warm-gray text-sm">I have more coding apps than social media apps on my phone. This is either dedication or a problem.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎧</span>
                  <div>
                    <p className="text-snow-white font-semibold mb-1">Lo-Fi Coding Sessions</p>
                    <p className="text-warm-gray text-sm">Can&apos;t code without music. Lo-fi beats are my productivity hack. Sometimes I spend more time finding the perfect playlist than actually coding.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🚶</span>
                  <div>
                    <p className="text-snow-white font-semibold mb-1">Debug Walking</p>
                    <p className="text-warm-gray text-sm">When stuck on a bug, I go for a walk. 80% of the time, the solution hits me before I get back to my desk.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 bg-urban-gray/5 relative overflow-hidden">
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

      {/* Closing Message */}
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
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-6 leading-tight">
                  So that&apos;s me.
                </p>
                <p className="text-warm-gray text-lg md:text-xl leading-relaxed mb-6 max-w-2xl mx-auto">
                  Just a 22-year-old developer in Tokyo who loves building things that work, helping people, and probably drinking too much coffee.
                </p>
                <p className="text-warm-gray leading-relaxed mb-4 max-w-2xl mx-auto">
                  If you&apos;ve got a project that needs automating, a system that needs building, or just want to chat about code, I&apos;m always up for it.
                </p>
                <p className="text-tokyo-red font-noto text-xl mb-8 italic">
                  Let&apos;s build something cool together 🚀
                </p>
                <Button href="/contact/">Get In Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
