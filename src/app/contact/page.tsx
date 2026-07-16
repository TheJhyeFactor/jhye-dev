import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contact Jhye O'Meley about product development, full-stack work, or simplifying an operational system.",
  alternates: { canonical: '/contact/' },
  openGraph: { title: "Contact — Jhye O'Meley", description: 'Have a product to build or a system to untangle?', url: '/contact/', images: ['/og-interactive.webp'] },
  twitter: { card: 'summary_large_image', title: "Contact — Jhye O'Meley", description: 'Have a product to build or a system to untangle?', images: ['/og-interactive.webp'] },
}

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="grid min-h-[calc(100vh-77px)] gap-12 py-20 md:grid-cols-[1.2fr_0.6fr] md:items-end md:py-28">
        <div>
          <p className="eyebrow mb-5">Contact · New work and conversations</p>
          <h1 className="display-title">Let&apos;s make the complicated part clear.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            If you&apos;re hiring, shaping a product, or trying to simplify a difficult workflow, send me the context and what a useful outcome looks like.
          </p>
          <a href={`mailto:${profile.email}`} className="button-primary mt-9">
            Email {profile.email} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <aside className="border-t border-[var(--ink)] pt-5">
          <p className="eyebrow mb-5">Elsewhere</p>
          <div className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
            <a className="focus-ring flex items-center justify-between py-4 hover:text-[var(--accent)]" href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            <a className="focus-ring flex items-center justify-between py-4 hover:text-[var(--accent)]" href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
          <p className="mt-8 text-sm leading-6 text-[var(--muted)]">Based in Tokyo, working with people and teams across time zones.</p>
        </aside>
      </section>
    </div>
  )
}
