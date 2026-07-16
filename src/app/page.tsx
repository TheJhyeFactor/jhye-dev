import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { featuredProjects, profile, projectCount } from '@/data/portfolio'

export default function Home() {
  return (
    <div className="page-shell">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow mb-5">Product engineer · {profile.location}</p>
          <h1 className="display-title">I design and ship software for complicated work.</h1>
          <p className="home-lede">I&apos;m {profile.name}. I work across product direction, interface design, and full-stack engineering to turn tangled workflows into useful releases.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/portfolio/" className="button-primary">View selected work <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/contact/" className="text-link">Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
        <aside className="home-hero-aside">
          <div className="portrait-frame"><Image src="/images/projects/Headshot.jpeg" alt="Jhye O'Meley" fill priority sizes="(max-width: 767px) 100vw, 35vw" className="object-cover" /><span className="portrait-index" aria-hidden="true">J.O</span></div>
          <div className="aside-caption"><p>Independent builder working between Tokyo and Australia.</p><span className="mono-label">Available for product work</span></div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Portfolio summary">
        <p><strong>{featuredProjects.length}</strong><span>product platforms</span></p>
        <p><strong>{projectCount}</strong><span>indexed builds</span></p>
        <p><strong>{new Date().getFullYear() - profile.startYear}+</strong><span>years building</span></p>
        <p><strong>01→∞</strong><span>idea to release</span></p>
      </section>

      <section className="section-block" aria-labelledby="home-work-title">
        <div className="section-heading"><div><p className="eyebrow mb-3">Selected work</p><h2 id="home-work-title" className="section-title">Products made to be used.</h2></div><Link href="/portfolio/" className="text-link">View all {projectCount} projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        <div className="work-list">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <article key={project.slug} id={project.slug} className="work-entry">
              <Link href={`/portfolio/#${project.slug}`} className="work-image focus-ring group" aria-label={`View ${project.title} case study`}><Image src={project.image} alt={`${project.title} product interface`} fill sizes="(max-width: 767px) 100vw, 58vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.015]" /></Link>
              <div className="work-copy"><p className="mono-label">0{index + 1} / {project.year}</p><div><p className="eyebrow mb-3">{project.status}</p><h3 className="font-display text-3xl font-bold tracking-[-0.035em] md:text-4xl">{project.title}</h3><p className="mt-4 leading-7 text-[var(--muted)]">{project.description}</p></div><div><p className="project-scope">{project.scope}</p><p className="project-disciplines">{project.disciplines.join(' · ')}</p></div><Link href={`/portfolio/#${project.slug}`} className="text-link w-fit">Read the case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-block"><p className="eyebrow">Where I&apos;m useful</p><div><h2 className="section-title max-w-3xl">When the problem is bigger than the interface.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">I&apos;m strongest when a team needs someone who can understand the real workflow, make the important path clear, and carry the work through implementation and release.</p><Link href="/services/" className="text-link mt-7">See capabilities <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div></section>
      <section className="contact-cta"><p className="eyebrow">Next project</p><h2>Have a system that needs building or simplifying?</h2><Link href="/contact/" className="button-light">Contact Jhye <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></section>
    </div>
  )
}
