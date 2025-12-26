'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/Button'
import { Send, CheckCircle, Clock, DollarSign, Briefcase, MessageSquare, Code, Rocket, Mail, MapPin, Clock4 } from 'lucide-react'
import SakuraPetals from '@/components/SakuraPetals'
import JapaneseDivider from '@/components/JapaneseDivider'

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0)
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    workType: '',
    budget: '',
    timeline: '',
    message: '',
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    // Simulate form submission - replace with Cloudflare Worker or form service
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setFormState('success')
    setFormData({ name: '', email: '', company: '', workType: '', budget: '', timeline: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <SakuraPetals />

      {/* Hero Section with Parallax */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #FF2D55 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <p
            className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-8 font-noto"
            style={{
              opacity: 1 - scrollY / 400,
            }}
          >
            連絡 | GET IN TOUCH
          </p>

          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: 1 - scrollY / 600,
            }}
          >
            <span className="inline-block bg-gradient-to-r from-snow-white via-snow-white to-tokyo-red bg-clip-text text-transparent animate-gradient">
              Let&apos;s Build
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-tokyo-red via-electric-blue to-snow-white bg-clip-text text-transparent animate-gradient">
              Something Great
            </span>
          </h1>

          <p
            className="text-warm-gray text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{
              opacity: 1 - scrollY / 500,
            }}
          >
            Have a project in mind? Let&apos;s discuss how I can help streamline your systems and build something efficient together.
          </p>

          <p className="text-tokyo-red font-noto text-lg italic mt-6" style={{ opacity: 1 - scrollY / 500 }}>
            一緒に素晴らしいものを作りましょう
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-warm-gray/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-tokyo-red rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {/* Email Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/20 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-deep-black" />
                </div>
                <h3 className="text-snow-white font-semibold mb-3">Email</h3>
                <a
                  href="mailto:omelejhye@gmail.com"
                  className="text-warm-gray hover:text-tokyo-red transition-colors duration-300"
                >
                  omelejhye@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-blue text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent-blue rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-deep-black" />
                </div>
                <h3 className="text-snow-white font-semibold mb-3">Location</h3>
                <p className="text-warm-gray">Tokyo, Japan</p>
                <p className="text-warm-gray/60 text-sm mt-1">Australian • Fully Remote</p>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-purple text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyber-purple to-electric-blue rounded-full flex items-center justify-center">
                  <Clock4 className="w-8 h-8 text-snow-white" />
                </div>
                <h3 className="text-snow-white font-semibold mb-3">Response Time</h3>
                <p className="text-warm-gray">Usually within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Premium Form Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 via-electric-blue/10 to-cyber-purple/10 rounded-tokyo blur-2xl group-hover:blur-3xl transition-all duration-700" />
            <div className="relative bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo p-8 md:p-12 border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-500">
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[600px] text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl" />
                  <div className="relative w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <CheckCircle className="w-10 h-10 text-snow-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-snow-white to-tokyo-red bg-clip-text text-transparent">
                  Message Sent!
                </h3>
                <p className="text-warm-gray text-lg mb-4">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-6 px-6 py-3 bg-urban-gray/50 border border-tokyo-red/30 rounded-tokyo text-tokyo-red hover:text-snow-white hover:border-tokyo-red hover:shadow-glow-red transition-all duration-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-snow-white to-warm-gray bg-clip-text text-transparent">
                  Start Your Project
                </h2>

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-snow-white">
                      Name <span className="text-tokyo-red">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-primary-black/50 border border-warm-gray/30 rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-tokyo-red focus:shadow-glow-red focus:bg-primary-black transition-all duration-300 hover:border-warm-gray/50"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-snow-white">
                      Email <span className="text-tokyo-red">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-primary-black/50 border border-warm-gray/30 rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-tokyo-red focus:shadow-glow-red focus:bg-primary-black transition-all duration-300 hover:border-warm-gray/50"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className="group">
                  <label htmlFor="company" className="block text-sm font-semibold mb-3 text-snow-white">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-primary-black/50 border border-warm-gray/30 rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-electric-blue focus:shadow-glow-blue focus:bg-primary-black transition-all duration-300 hover:border-warm-gray/50"
                    placeholder="Your company name"
                  />
                </div>

                {/* Work Type */}
                <div className="group">
                  <label htmlFor="workType" className="block text-sm font-semibold mb-3 text-snow-white flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-tokyo-red" />
                    Type of Work <span className="text-tokyo-red">*</span>
                  </label>
                  <select
                    id="workType"
                    name="workType"
                    value={formData.workType}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-primary-black/50 border border-warm-gray/30 rounded-tokyo text-snow-white focus:outline-none focus:border-tokyo-red focus:shadow-glow-red focus:bg-primary-black transition-all duration-300 cursor-pointer hover:border-warm-gray/50"
                  >
                    <option value="">Select a service...</option>
                    <option value="automation">Automation & Workflow Optimization</option>
                    <option value="web-development">Web Development</option>
                    <option value="dashboard">Custom Dashboard / Reporting</option>
                    <option value="apps-script">Google Apps Script / Integration</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                {/* Budget and Timeline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="budget" className="block text-sm font-semibold mb-3 text-snow-white flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-electric-blue" />
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-primary-black/50 border border-warm-gray/30 rounded-tokyo text-snow-white focus:outline-none focus:border-electric-blue focus:shadow-glow-blue focus:bg-primary-black transition-all duration-300 cursor-pointer hover:border-warm-gray/50"
                    >
                      <option value="">Select budget range...</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="group">
                    <label htmlFor="timeline" className="block text-sm font-semibold mb-3 text-snow-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyber-purple" />
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-primary-black/50 border border-warm-gray/30 rounded-tokyo text-snow-white focus:outline-none focus:border-cyber-purple focus:shadow-glow-purple focus:bg-primary-black transition-all duration-300 cursor-pointer hover:border-warm-gray/50"
                    >
                      <option value="">Select timeline...</option>
                      <option value="asap">ASAP / Urgent</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible / Just exploring</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-snow-white">
                    Project Details <span className="text-tokyo-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-primary-black/50 border border-warm-gray/30 rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-tokyo-red focus:shadow-glow-red focus:bg-primary-black transition-all duration-300 resize-none hover:border-warm-gray/50"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

                <div className="relative group mt-8">
                  <div className="absolute inset-0 bg-gradient-accent rounded-tokyo blur-lg group-hover:blur-xl transition-all duration-300" />
                  <Button
                    type="submit"
                    className="w-full relative py-5 text-lg font-semibold"
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="animate-pulse">Sending</span>
                        <span className="flex gap-1">
                          <span className="w-2 h-2 bg-snow-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                          <span className="w-2 h-2 bg-snow-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <span className="w-2 h-2 bg-snow-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </span>
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-3 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-warm-gray/60 text-sm text-center mt-6">
                  By submitting this form, you agree to be contacted regarding your project.
                </p>
              </form>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <JapaneseDivider character="流" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 mt-16 text-center">
            <span className="bg-gradient-to-r from-snow-white to-warm-gray bg-clip-text text-transparent">
              How It Works
            </span>
            <span className="font-noto text-tokyo-red block mt-2">| 流れ</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/20 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-urban-gray/30 rounded-tokyo border border-tokyo-red/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-red text-center h-full">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-accent rounded-full blur-md" />
                  <div className="relative w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center">
                    <MessageSquare className="w-10 h-10 text-deep-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-snow-white">1. Initial Discussion</h3>
                <p className="text-warm-gray leading-relaxed">
                  We&apos;ll hop on a call to discuss your project, requirements, and goals. I&apos;ll ask questions to understand what you need.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-urban-gray/30 rounded-tokyo border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-blue text-center h-full">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-accent-blue rounded-full blur-md" />
                  <div className="relative w-20 h-20 bg-gradient-accent-blue rounded-full flex items-center justify-center">
                    <Code className="w-10 h-10 text-deep-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-snow-white">2. Build & Iterate</h3>
                <p className="text-warm-gray leading-relaxed">
                  I&apos;ll build your solution with regular check-ins. You&apos;ll see progress updates and can request changes along the way.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-transparent rounded-tokyo blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-10 bg-urban-gray/30 rounded-tokyo border border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-purple text-center h-full">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-electric-blue rounded-full blur-md" />
                  <div className="relative w-20 h-20 bg-gradient-to-r from-cyber-purple to-electric-blue rounded-full flex items-center justify-center">
                    <Rocket className="w-10 h-10 text-snow-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-snow-white">3. Launch & Support</h3>
                <p className="text-warm-gray leading-relaxed">
                  Once everything&apos;s tested and approved, we&apos;ll launch. I&apos;ll provide support to ensure everything runs smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-urban-gray/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <JapaneseDivider character="問" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 mt-16 text-center">
            <span className="bg-gradient-to-r from-snow-white to-warm-gray bg-clip-text text-transparent">
              Common Questions
            </span>
            <span className="font-noto text-electric-blue block mt-2">| よくある質問</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* FAQ 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 to-transparent rounded-tokyo blur-lg group-hover:blur-xl transition-all duration-500" />
              <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-snow-white font-bold text-lg mb-3 flex items-start gap-3">
                  <span className="text-tokyo-red text-2xl">Q:</span>
                  <span>What&apos;s your typical project timeline?</span>
                </h3>
                <p className="text-warm-gray leading-relaxed ml-8">
                  Most projects take 2-6 weeks depending on complexity. Smaller tasks can be done in a few days, while larger systems may take a couple months.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent rounded-tokyo blur-lg group-hover:blur-xl transition-all duration-500" />
              <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-electric-blue/40 transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-snow-white font-bold text-lg mb-3 flex items-start gap-3">
                  <span className="text-electric-blue text-2xl">Q:</span>
                  <span>Do you work with international clients?</span>
                </h3>
                <p className="text-warm-gray leading-relaxed ml-8">
                  Absolutely. I&apos;m based in Tokyo but work remotely with clients globally. I&apos;m flexible with time zones and communication.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent rounded-tokyo blur-lg group-hover:blur-xl transition-all duration-500" />
              <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-cyber-purple/40 transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-snow-white font-bold text-lg mb-3 flex items-start gap-3">
                  <span className="text-cyber-purple text-2xl">Q:</span>
                  <span>What if I need changes after launch?</span>
                </h3>
                <p className="text-warm-gray leading-relaxed ml-8">
                  I provide post-launch support and can handle updates or modifications. We can discuss ongoing maintenance or one-off changes.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/10 to-transparent rounded-tokyo blur-lg group-hover:blur-xl transition-all duration-500" />
              <div className="relative p-8 bg-urban-gray/30 rounded-tokyo border border-warm-gray/20 hover:border-tokyo-red/40 transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-snow-white font-bold text-lg mb-3 flex items-start gap-3">
                  <span className="text-tokyo-red text-2xl">Q:</span>
                  <span>Can you help with existing projects?</span>
                </h3>
                <p className="text-warm-gray leading-relaxed ml-8">
                  Yes! I can jump into existing codebases to fix bugs, add features, or optimize performance. Just share what you&apos;re working with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
