'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/portfolio/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Capabilities' },
  { href: '/contact/', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ''))

  return (
    <header className="site-header">
      <nav className="page-shell flex min-h-[76px] items-center justify-between gap-8" aria-label="Primary navigation">
        <Link href="/" className="focus-ring flex items-baseline gap-3" aria-label="Jhye dot dev, home">
          <span className="font-display text-xl font-bold tracking-[-0.04em]">jhye<span className="text-[var(--accent)]">.</span>dev</span>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] sm:inline">Product / Engineering</span>
        </Link>

        <button
          type="button"
          className="focus-ring flex min-h-11 min-w-11 items-center justify-center font-mono text-xs uppercase tracking-[0.1em] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`focus-ring text-sm transition-colors hover:text-[var(--accent)] ${isActive(item.href) ? 'font-bold text-[var(--ink)]' : 'text-[var(--muted)]'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-[var(--border)] bg-[var(--background)] md:hidden">
          <ul className="page-shell flex flex-col py-3">
            {navItems.map((item, index) => (
              <li key={item.href} className="border-b border-[var(--border)] last:border-0">
                <Link href={item.href} onClick={() => setOpen(false)} aria-current={isActive(item.href) ? 'page' : undefined} className="focus-ring flex items-center justify-between py-4 text-lg">
                  <span>{item.label}</span><span className="mono-label">0{index + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
