'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/contact/', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-primary-black/90 backdrop-blur-md border-b border-urban-gray/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-wide hover:text-tokyo-red transition-colors duration-150">
          jhye<span className="text-tokyo-red">.</span>dev
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative font-medium text-sm tracking-wide transition-colors duration-150 hover:text-snow-white ${
                  pathname === item.href || pathname === item.href.slice(0, -1)
                    ? 'text-snow-white'
                    : 'text-warm-gray'
                }`}
              >
                {item.label}
                {(pathname === item.href || pathname === item.href.slice(0, -1)) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-tokyo-red" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-snow-white transition-transform duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-snow-white transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-snow-white transition-transform duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-black/95 backdrop-blur-md border-b border-urban-gray/50">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium text-lg tracking-wide ${
                    pathname === item.href || pathname === item.href.slice(0, -1)
                      ? 'text-tokyo-red'
                      : 'text-warm-gray'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
