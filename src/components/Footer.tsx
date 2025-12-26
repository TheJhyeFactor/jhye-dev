'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-black border-t border-urban-gray/30 relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-6 md:right-12 bg-gradient-accent text-snow-white p-3 rounded-full shadow-glow-red hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      </button>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-wide inline-block mb-4 group">
              <span className="group-hover:text-transparent group-hover:bg-gradient-accent group-hover:bg-clip-text transition-all duration-300">
                jhye<span className="text-tokyo-red">.</span>dev
              </span>
            </Link>
            <p className="text-warm-gray text-sm mb-4 font-noto">
              ジェイ・オメリー
            </p>
            <p className="text-warm-gray/80 text-sm leading-relaxed">
              Building fast, clean systems with clarity and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-snow-white font-semibold mb-4 accent-line pb-2">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/about/" className="text-warm-gray text-sm hover:text-tokyo-red hover:translate-x-1 transition-all duration-200 inline-block">
                About
              </Link>
              <Link href="/services/" className="text-warm-gray text-sm hover:text-tokyo-red hover:translate-x-1 transition-all duration-200 inline-block">
                Services
              </Link>
              <Link href="/portfolio/" className="text-warm-gray text-sm hover:text-tokyo-red hover:translate-x-1 transition-all duration-200 inline-block">
                Portfolio
              </Link>
              <Link href="/contact/" className="text-warm-gray text-sm hover:text-tokyo-red hover:translate-x-1 transition-all duration-200 inline-block">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-snow-white font-semibold mb-4 accent-line pb-2">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/TheJhyeFactor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-urban-gray/50 rounded-lg hover:bg-urban-gray transition-all duration-300 hover:shadow-glow-blue hover:-translate-y-1 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-warm-gray group-hover:text-electric-blue transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/jhye-o-meley-529960213/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-urban-gray/50 rounded-lg hover:bg-urban-gray transition-all duration-300 hover:shadow-glow-blue hover:-translate-y-1 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-warm-gray group-hover:text-electric-blue transition-colors duration-300" />
              </a>
              <a
                href="mailto:omelejhye@gmail.com"
                className="p-3 bg-urban-gray/50 rounded-lg hover:bg-urban-gray transition-all duration-300 hover:shadow-glow-red hover:-translate-y-1 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-warm-gray group-hover:text-tokyo-red transition-colors duration-300" />
              </a>
            </div>
            <p className="text-warm-gray/60 text-xs">
              Automation <span className="text-tokyo-red">•</span> Development <span className="text-tokyo-red">•</span> Optimisation
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-urban-gray/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-gray text-xs">
            © {currentYear} Jhye O&apos;Meley. All rights reserved.
          </p>
          <p className="text-warm-gray/60 text-xs">
            Built with Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}
