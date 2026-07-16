import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import { clientProjects, experiments, featuredProjects, projectCount } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Work',
  description: "Explore Jhye O'Meley's product platforms, client systems, and software experiments.",
  alternates: { canonical: '/portfolio/' },
  openGraph: { title: "Work — Jhye O'Meley", description: 'Products, operational systems, and experiments built from idea to release.', url: '/portfolio/', images: ['/og.webp'] },
  twitter: { card: 'summary_large_image', title: "Work — Jhye O'Meley", description: 'Products, operational systems, and experiments built from idea to release.', images: ['/og.webp'] },
}

export default function PortfolioPage() {
  return (
    <div className="page-shell">
      <section className="grid gap-10 py-20 md:grid-cols-[1.25fr_0.55fr] md:items-end md:py-28">
        <div>
          <p className="eyebrow mb-5">Work index · {projectCount} projects since 2021</p>
          <h1 className="display-title">Built, tested, and put to work.</h1>
        </div>
        <p className="text-lg leading-8 text-[var(--muted)]">
          Products, client systems, and experiments across logistics, education, creator tools, trade operations, and the open web.
        </p>
      </section>

      <section className="section-block" aria-labelledby="product-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow mb-3">01 · Product platforms</p>
            <h2 id="product-work" className="section-title">From first idea to live software.</h2>
          </div>
          <span className="mono-label">5 selected products</span>
        </div>

        <div className="work-list">
          {featuredProjects.map((project, index) => (
            <article key={project.slug} className="work-entry">
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer" className="work-image focus-ring group" aria-label={`Open ${project.title}`}>
                  <Image src={project.image} alt={`${project.title} product interface`} fill sizes="(max-width: 767px) 100vw, 58vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.015]" />
                </a>
              ) : (
                <div className="work-image"><Image src={project.image} alt={`${project.title} product interface`} fill sizes="(max-width: 767px) 100vw, 58vw" className="object-cover" /></div>
              )}
              <div className="work-copy">
                <p className="mono-label">0{index + 1} / {project.year}</p>
                <div>
                  <p className="eyebrow mb-3">{project.status}</p>
                  <h3 className="font-display text-3xl font-bold tracking-[-0.035em] md:text-4xl">{project.title}</h3>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{project.description}</p>
                </div>
                <div>
                  <p className="project-scope">{project.scope}</p>
                  <p className="project-disciplines">{project.disciplines.join(' · ')}</p>
                </div>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer" className="text-link w-fit">
                    Visit product <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : <p className="mono-label">Public preview not available</p>}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--muted)]">
          “Live product” describes the current build and deployment state. It does not imply user, revenue, or commercial performance metrics.
        </p>
      </section>

      <section className="section-block" aria-labelledby="client-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow mb-3">02 · Client and commissioned work</p>
            <h2 id="client-work" className="section-title">Systems made for a job.</h2>
          </div>
          <span className="mono-label">6 projects</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientProjects.map((project) => <ProjectCard key={project.slug} {...project} />)}
        </div>
      </section>

      <section className="section-block" aria-labelledby="experiments-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow mb-3">03 · Experiments</p>
            <h2 id="experiments-title" className="section-title">Small builds, real learning.</h2>
          </div>
          <span className="mono-label">{experiments.length} from the archive</span>
        </div>
        <div className="border-y border-[var(--ink)]">
          {experiments.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="focus-ring grid gap-4 border-b border-[var(--border)] py-5 last:border-0 hover:text-[var(--accent)] sm:grid-cols-[54px_0.65fr_1.35fr_auto] sm:items-center"
            >
              <span className="mono-label">0{index + 1}</span>
              <strong className="font-display text-lg text-[var(--ink)]">{project.title}</strong>
              <span className="text-sm text-[var(--muted)]">{project.description}</span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="statement-block">
        <p className="eyebrow">Next project</p>
        <div>
          <h2 className="section-title max-w-3xl">Looking for someone who can take an idea through to a working release?</h2>
          <Link href="/contact/" className="text-link mt-7">Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  )
}
