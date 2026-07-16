'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/portfolio/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Capabilities' },
  { href: '/contact/', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ''))

  return (
    <header className="site-header">
      <nav className="page-shell flex min-h-[76px] items-center justify-between gap-8" aria-label="Primary navigation">
        <Link href="/" className="focus-ring flex items-baseline gap-3" aria-label="Jhye dot dev, home">
          <span className="font-display text-xl font-bold tracking-[-0.04em]">jhye<span className="text-[var(--accent)]">.</span>dev</span>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] sm:inline">Product / Engineering</span>
        </Link>
        <ul className="flex items-center gap-4 sm:gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={`focus-ring text-sm transition-colors hover:text-[var(--accent)] ${isActive(item.href) ? 'font-bold text-[var(--ink)]' : 'text-[var(--muted)]'}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
