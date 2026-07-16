import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { capabilities } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Capabilities',
  description: "Product direction, interface design, full-stack development, and software improvement by Jhye O'Meley.",
  alternates: { canonical: '/services/' },
  openGraph: { title: "Capabilities — Jhye O'Meley", description: 'Useful software, built as one connected practice.', url: '/services/', images: ['/og-interactive.webp'] },
  twitter: { card: 'summary_large_image', title: "Capabilities — Jhye O'Meley", description: 'Useful software, built as one connected practice.', images: ['/og-interactive.webp'] },
}

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <section className="grid gap-10 py-20 md:grid-cols-[1.2fr_0.6fr] md:items-end md:py-28">
        <div>
          <p className="eyebrow mb-5">Capabilities · Product to production</p>
          <h1 className="display-title">Useful software, built as one connected practice.</h1>
        </div>
        <p className="text-lg leading-8 text-[var(--muted)]">
          I work across product, interface, and engineering when an idea needs clarity, an existing system needs untangling, or a team needs a working release.
        </p>
      </section>

      <section className="section-block" aria-labelledby="capabilities-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow mb-3">01 · What I do</p>
            <h2 id="capabilities-title" className="section-title">Four ways I can help.</h2>
          </div>
        </div>
        <ol className="capability-list">
          {capabilities.map((capability) => (
            <li key={capability.number}>
              <span className="mono-label">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="statement-block">
        <div><p className="eyebrow mb-3">Typical fit</p><p className="mono-label">Where this works best</p></div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="border-t border-[var(--ink)] pt-4"><h2 className="font-display text-2xl font-bold tracking-tight">New products</h2><p className="mt-3 leading-7 text-[var(--muted)]">You have a real problem, early evidence, or a rough prototype and need a clear, credible product.</p></div>
          <div className="border-t border-[var(--ink)] pt-4"><h2 className="font-display text-2xl font-bold tracking-tight">Operational systems</h2><p className="mt-3 leading-7 text-[var(--muted)]">Important work is spread across spreadsheets, messages, and manual steps that should become one system.</p></div>
          <div className="border-t border-[var(--ink)] pt-4"><h2 className="font-display text-2xl font-bold tracking-tight">Product recovery</h2><p className="mt-3 leading-7 text-[var(--muted)]">The software exists, but its interface, architecture, or delivery path is making progress harder than it should be.</p></div>
          <div className="border-t border-[var(--ink)] pt-4"><h2 className="font-display text-2xl font-bold tracking-tight">Focused prototypes</h2><p className="mt-3 leading-7 text-[var(--muted)]">A new technology or workflow needs to be tested against real use before a larger investment.</p></div>
        </div>
      </section>

      <section className="contact-cta">
        <p className="eyebrow">Start a conversation</p>
        <h2>Have a system that needs building or simplifying?</h2>
        <Link href="/contact/" className="button-light">Contact Jhye <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
      </section>
    </div>
  )
}
