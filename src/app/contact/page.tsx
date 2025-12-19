'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Button from '@/components/Button'
import { Send, CheckCircle, Clock, DollarSign, Briefcase } from 'lucide-react'
import SakuraPetals from '@/components/SakuraPetals'

export default function ContactPage() {
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
      <section className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-30" />
        <div className="absolute inset-0 grid-background opacity-10" />
        <div className="absolute top-40 -right-20 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-transparent bg-gradient-accent bg-clip-text text-sm font-medium tracking-widest mb-6 font-noto">
                連絡 | CONTACT
              </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Let&apos;s Build Something
            </h1>
            <p className="text-warm-gray text-lg leading-relaxed mb-4">
              Have a project in mind? Let&apos;s discuss how I can help streamline your systems and build something efficient together.
            </p>
            <p className="text-tokyo-red font-noto text-sm italic mb-12">
              一緒に素晴らしいものを作りましょう
            </p>

            <div className="space-y-8 mb-12">
              <div className="group">
                <p className="text-snow-white font-medium mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-tokyo-red rounded-full" />
                  Email
                </p>
                <a
                  href="mailto:omelejhye@gmail.com"
                  className="text-warm-gray hover:text-tokyo-red transition-colors duration-300 text-lg ml-3"
                >
                  omelejhye@gmail.com
                </a>
              </div>
              <div className="group">
                <p className="text-snow-white font-medium mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-electric-blue rounded-full" />
                  Location
                </p>
                <p className="text-warm-gray text-lg ml-3">Tokyo, Japan</p>
                <p className="text-warm-gray/60 text-sm ml-3 mt-1">Australian • Fully Remote</p>
              </div>
              <div className="group">
                <p className="text-snow-white font-medium mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-cyber-purple rounded-full" />
                  Response Time
                </p>
                <p className="text-warm-gray text-lg ml-3">Usually within 24 hours</p>
              </div>
            </div>

            <div className="p-6 bg-urban-gray/50 rounded-tokyo border border-tokyo-red/20">
              <h3 className="text-snow-white font-semibold mb-3">What I Can Help With</h3>
              <ul className="space-y-2 text-warm-gray text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-tokyo-red mt-1">•</span>
                  <span>Automation & workflow optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tokyo-red mt-1">•</span>
                  <span>Custom web applications & dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tokyo-red mt-1">•</span>
                  <span>System integrations & Apps Script</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tokyo-red mt-1">•</span>
                  <span>Technical consulting & planning</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-urban-gray to-urban-gray/50 rounded-tokyo p-8 md:p-10 border border-tokyo-red/10 shadow-glow-red">
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[600px] text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <CheckCircle className="w-8 h-8 text-snow-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 gradient-text">Message Sent!</h3>
                <p className="text-warm-gray mb-4">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-4 text-tokyo-red hover:text-snow-white transition-colors duration-300 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-tokyo-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-black border border-warm-gray/30 rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-tokyo-red focus:shadow-glow-red transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-tokyo-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-black border border-warm-gray/30 rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-tokyo-red focus:shadow-glow-red transition-all duration-300"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-black border border-warm-gray/30 rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-electric-blue focus:shadow-glow-blue transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                {/* Work Type */}
                <div>
                  <label htmlFor="workType" className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-tokyo-red" />
                    Type of Work <span className="text-tokyo-red">*</span>
                  </label>
                  <select
                    id="workType"
                    name="workType"
                    value={formData.workType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-black border border-warm-gray/30 rounded-tokyo text-snow-white focus:outline-none focus:border-tokyo-red focus:shadow-glow-red transition-all duration-300 cursor-pointer"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-electric-blue" />
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-black border border-warm-gray/30 rounded-tokyo text-snow-white focus:outline-none focus:border-electric-blue focus:shadow-glow-blue transition-all duration-300 cursor-pointer"
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

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyber-purple" />
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-black border border-warm-gray/30 rounded-tokyo text-snow-white focus:outline-none focus:border-cyber-purple focus:shadow-glow-purple transition-all duration-300 cursor-pointer"
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
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details <span className="text-tokyo-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-primary-black border border-warm-gray/30 rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-tokyo-red focus:shadow-glow-red transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

                <Button type="submit" className="w-full" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-pulse">Sending</span>
                      <span className="flex gap-1">
                        <span className="w-1 h-1 bg-snow-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                        <span className="w-1 h-1 bg-snow-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <span className="w-1 h-1 bg-snow-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                      </span>
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-warm-gray/60 text-xs text-center mt-4">
                  By submitting this form, you agree to be contacted regarding your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
