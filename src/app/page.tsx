import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { capabilities, featuredProjects, profile, projectCount } from '@/data/portfolio'

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero-grid py-14 md:py-20" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow mb-6">Independent full-stack developer · Tokyo / Australia</p>
          <h1 id="intro-title" className="display-title max-w-5xl">
            I turn complicated work into software people can actually use.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
            I&apos;m {profile.name}. I design and build operational products, web applications, and automations from first idea to working release.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="#selected-work" className="button-primary">
              Explore selected work <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact/" className="text-link">
              Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Jhye at a glance">
          <div className="portrait-frame">
            <Image
              src="/images/projects/Headshot.jpeg"
              alt="Jhye O'Meley"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 34vw"
              className="object-cover object-center"
            />
            <span className="portrait-index" aria-hidden="true">01</span>
          </div>
          <div className="aside-caption">
            <p>Product thinking, interface design, and full-stack engineering in one practice.</p>
            <p className="mono-label">Building since {profile.startYear}</p>
          </div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Experience summary">
        <p><strong>{projectCount}</strong><span>projects in the index</span></p>
        <p><strong>5</strong><span>product platforms</span></p>
        <p><strong>4</strong><span>core disciplines</span></p>
        <p><strong>01</strong><span>person, end to end</span></p>
      </section>

      <section id="selected-work" className="section-block scroll-mt-8" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow mb-3">01 · Selected work</p>
            <h2 id="work-title" className="section-title">Products built around real workflows.</h2>
          </div>
          <Link href="/portfolio/" className="text-link shrink-0">
            Full project index <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="work-list">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <article key={project.slug} className="work-entry">
              <a href={project.href} target="_blank" rel="noreferrer" className="work-image focus-ring group" aria-label={`Open ${project.title}`}>
                <Image
                  src={project.image}
                  alt={`${project.title} product interface`}
                  fill
                  sizes="(max-width: 767px) 100vw, 58vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </a>
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
                <a href={project.href} target="_blank" rel="noreferrer" className="text-link w-fit">
                  View live product <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="approach-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow mb-3">02 · How I work</p>
            <h2 id="approach-title" className="section-title">One line from problem to production.</h2>
          </div>
          <p className="max-w-md leading-7 text-[var(--muted)]">
            The handoffs between strategy, design, and engineering are often where good products lose clarity. I keep those decisions connected.
          </p>
        </div>
        <ol className="capability-list">
          {capabilities.slice(0, 3).map((capability) => (
            <li key={capability.number}>
              <span className="mono-label">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="statement-block" aria-labelledby="about-title">
        <p className="eyebrow">03 · About</p>
        <div>
          <h2 id="about-title" className="section-title max-w-3xl">
            A practical builder with a product designer&apos;s eye.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I&apos;ve shipped software across transport, education, creator tools, trade operations, and internal business systems. The domain changes; the goal stays the same—make difficult work feel clear.
          </p>
          <Link href="/about/" className="text-link mt-7">
            More about me <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="contact-title">
        <p className="eyebrow">04 · Start something useful</p>
        <h2 id="contact-title">Have a product to build or a system to untangle?</h2>
        <a href={`mailto:${profile.email}`} className="button-light">
          Email Jhye <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>
    </div>
  )
}
