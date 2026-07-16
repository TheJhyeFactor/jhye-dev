'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { profile } from '@/data/portfolio'
import TrackedEmailLink from '@/components/TrackedEmailLink'

export default function Footer() {
  const pathname = usePathname()
  if (pathname === '/') return null

  return (
    <footer className="mt-24 border-t border-[var(--ink)]">
      <div className="page-shell grid gap-8 py-10 text-sm md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" className="focus-ring font-display text-xl font-bold tracking-[-0.04em]">jhye<span className="text-[var(--accent)]">.</span>dev</Link>
          <p className="mt-2 max-w-md text-[var(--muted)]">Independent product design and full-stack development from Tokyo to Australia.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[var(--muted)]">
          <a className="focus-ring hover:text-[var(--accent)]" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="focus-ring hover:text-[var(--accent)]" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <TrackedEmailLink className="focus-ring hover:text-[var(--accent)]" href={`mailto:${profile.email}`} location="footer">Email</TrackedEmailLink>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
