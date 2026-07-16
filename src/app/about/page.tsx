import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { featuredProjects, profile, projectCount, skills } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'About',
  description: "About Jhye O'Meley, a full-stack developer from Australia working across product, interface, and engineering.",
  alternates: { canonical: '/about/' },
  openGraph: { title: "About — Jhye O'Meley", description: 'A practical builder with a product designer’s eye.', url: '/about/', images: ['/og.webp'] },
  twitter: { card: 'summary_large_image', title: "About — Jhye O'Meley", description: 'A practical builder with a product designer’s eye.', images: ['/og.webp'] },
}

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="grid gap-12 py-20 md:grid-cols-[1.15fr_0.65fr] md:items-end md:py-28">
        <div>
          <p className="eyebrow mb-5">About · Jhye O&apos;Meley</p>
          <h1 className="display-title">I like making hard things feel obvious.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I&apos;m a full-stack developer from Australia, currently based in Tokyo. I work across product, interface, and engineering to build software that earns its place in someone&apos;s day.
          </p>
        </div>
        <div className="portrait-frame">
          <Image src="/images/projects/Headshot.jpeg" alt="Jhye O'Meley" fill priority sizes="(max-width: 767px) 100vw, 35vw" className="object-cover" />
          <span className="portrait-index" aria-hidden="true">J.O</span>
        </div>
      </section>

      <section className="statement-block">
        <div>
          <p className="eyebrow mb-3">The short version</p>
          <p className="mono-label">Building since {profile.startYear}</p>
        </div>
        <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
          <p>I&apos;ve built {projectCount} indexed projects across logistics, education, creator tools, trade software, transport operations, and internal business systems.</p>
          <p>I&apos;m most useful where product thinking meets implementation: understanding the real workflow, making the important path clear, and turning it into maintainable software.</p>
          <p>My current work includes {featuredProjects.length} product platforms—{featuredProjects.map((project) => project.title).join(', ')}—alongside client systems and smaller experiments.</p>
        </div>
      </section>

      <section className="statement-block">
        <div>
          <p className="eyebrow mb-3">Working principles</p>
          <p className="mono-label">How decisions get made</p>
        </div>
        <ol className="space-y-7">
          <li className="grid gap-3 border-b border-[var(--border)] pb-7 sm:grid-cols-[48px_1fr]"><span className="mono-label">01</span><div><h2 className="font-display text-2xl font-bold tracking-tight">Understand the work first.</h2><p className="mt-2 leading-7 text-[var(--muted)]">The interface should reflect how people actually make decisions, not how the database happens to be structured.</p></div></li>
          <li className="grid gap-3 border-b border-[var(--border)] pb-7 sm:grid-cols-[48px_1fr]"><span className="mono-label">02</span><div><h2 className="font-display text-2xl font-bold tracking-tight">Make the main path unmistakable.</h2><p className="mt-2 leading-7 text-[var(--muted)]">Good product design removes uncertainty before it adds polish.</p></div></li>
          <li className="grid gap-3 sm:grid-cols-[48px_1fr]"><span className="mono-label">03</span><div><h2 className="font-display text-2xl font-bold tracking-tight">Ship something honest.</h2><p className="mt-2 leading-7 text-[var(--muted)]">A clear, useful release is worth more than a broad promise or a decorative prototype.</p></div></li>
        </ol>
      </section>

      <section className="statement-block">
        <div><p className="eyebrow mb-3">Toolkit</p><p className="mono-label">Used as needed</p></div>
        <div className="grid grid-cols-2 border-t border-[var(--ink)] sm:grid-cols-3">
          {skills.map((skill, index) => <span key={skill} className="border-b border-r border-[var(--border)] py-4 pr-3 text-sm sm:text-base"><span className="mono-label mr-3">{String(index + 1).padStart(2, '0')}</span>{skill}</span>)}
        </div>
      </section>

      <section className="statement-block">
        <p className="eyebrow">Selected work</p>
        <div><h2 className="section-title max-w-2xl">The best way to understand my work is to see what shipped.</h2><Link href="/portfolio/" className="text-link mt-7">Explore the project index <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
      </section>
    </div>
  )
}
