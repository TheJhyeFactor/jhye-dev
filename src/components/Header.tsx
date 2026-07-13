'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' }, { href: '/portfolio/', label: 'Work' }, { href: '/about/', label: 'About' }, { href: '/services/', label: 'Capabilities' }, { href: '/contact/', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (href: string) => href === '/' ? pathname === href : pathname.startsWith(href.replace(/\/$/, ''))

  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <nav className="page-shell flex min-h-[76px] items-center justify-between gap-8" aria-label="Primary navigation">
        <div className="flex items-center gap-5">
          <Link href="/" className="focus-ring font-['Space_Grotesk'] text-xl font-bold tracking-tight">jhye<span className="text-[var(--accent)]">.</span>dev</Link>
          <span className="hidden border-l border-[var(--border)] pl-5 text-xs text-[var(--muted)] sm:inline">Available for work</span>
        </div>
        <button type="button" className="focus-ring flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">
          <span className="block h-px w-5 bg-[var(--ink)]" /><span className="block h-px w-5 bg-[var(--ink)]" /><span className="block h-px w-5 bg-[var(--ink)]" />
        </button>
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => <li key={item.href}><Link href={item.href} className={`focus-ring text-sm transition-colors hover:text-[var(--accent)] ${isActive(item.href) ? 'font-bold text-[var(--ink)]' : 'text-[var(--muted)]'}`}>{item.label}</Link></li>)}
        </ul>
      </nav>
      {open && <div id="mobile-navigation" className="border-t border-[var(--border)] md:hidden"><ul className="page-shell flex flex-col gap-5 py-6">{navItems.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setOpen(false)} className={`focus-ring block text-lg ${isActive(item.href) ? 'font-bold text-[var(--accent)]' : 'text-[var(--muted)]'}`}>{item.label}</Link></li>)}</ul></div>}
    </header>
  )
}
