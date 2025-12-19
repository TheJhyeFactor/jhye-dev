'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Button from '@/components/Button'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    // Simulate form submission - replace with Cloudflare Worker or form service
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setFormState('success')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-tokyo-red text-sm font-medium tracking-widest mb-6">
              CONTACT
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Get in Touch
            </h1>
            <p className="text-warm-gray text-lg leading-relaxed mb-8">
              Have a project in mind? Let&apos;s discuss how I can help streamline your systems and build something efficient together.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-snow-white font-medium mb-1">Email</p>
                <a
                  href="mailto:omelejhye@gmail.com"
                  className="text-warm-gray hover:text-tokyo-red transition-colors duration-150"
                >
                  omelejhye@gmail.com
                </a>
              </div>
              <div>
                <p className="text-snow-white font-medium mb-1">Location</p>
                <p className="text-warm-gray">Australia</p>
              </div>
            </div>
          </div>

          <div className="bg-urban-gray rounded-tokyo p-8 md:p-10">
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <CheckCircle className="w-12 h-12 text-tokyo-red mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
                <p className="text-warm-gray">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-6 text-tokyo-red hover:text-snow-white transition-colors duration-150"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-black border border-urban-gray rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-tokyo-red transition-colors duration-150"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-black border border-urban-gray rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-tokyo-red transition-colors duration-150"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-primary-black border border-urban-gray rounded-tokyo text-snow-white placeholder-warm-gray/50 focus:outline-none focus:border-tokyo-red transition-colors duration-150 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  {formState === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
