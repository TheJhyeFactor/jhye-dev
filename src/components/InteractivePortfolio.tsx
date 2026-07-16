'use client'

import Image from 'next/image'
import { FormEvent, useEffect, useRef, useState, type ComponentType } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Braces,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Mail,
  MessageCircleMore,
  Sparkles,
  UserRound,
} from 'lucide-react'
import { capabilities, featuredProjects, profile, projectCount, skills } from '@/data/portfolio'
import type { Project } from '@/data/portfolio'

type PortfolioView = 'me' | 'projects' | 'skills' | 'fun' | 'contact'

const navigation = [
  { id: 'me' as const, label: 'Me', icon: UserRound, color: '#2b91b8' },
  { id: 'projects' as const, label: 'Projects', icon: BriefcaseBusiness, color: '#d47b45' },
  { id: 'skills' as const, label: 'Skills', icon: Layers3, color: '#6e63c7' },
  { id: 'fun' as const, label: 'Curious', icon: Sparkles, color: '#d4598a' },
  { id: 'contact' as const, label: 'Contact', icon: MessageCircleMore, color: '#b18122' },
]

const skillMarks: Record<string, { label: string; icon: ComponentType<{ 'aria-hidden'?: boolean | 'true' | 'false' }>; color: string }> = {
  React: { label: '⚛', icon: Atom, color: '#2b91b8' },
  'Next.js': { label: 'N', icon: Braces, color: '#171717' },
  TypeScript: { label: 'TS', icon: Braces, color: '#3178c6' },
  'Node.js': { label: 'JS', icon: Code2, color: '#7f9d32' },
  Firebase: { label: 'FB', icon: Cloud, color: '#e0a62c' },
  PostgreSQL: { label: 'SQL', icon: Database, color: '#3978a6' },
  Python: { label: 'PY', icon: Code2, color: '#447da8' },
  'Tailwind CSS': { label: 'TW', icon: Layers3, color: '#2d9fbd' },
  Vercel: { label: '▲', icon: TriangleMark, color: '#171717' },
  Git: { label: 'GIT', icon: GitBranch, color: '#de654d' },
}

const skillGroups = [
  { id: 'languages', label: 'Languages', skills: ['TypeScript', 'Python'] },
  { id: 'frontend', label: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
  { id: 'backend', label: 'Backend & data', skills: ['Node.js', 'Firebase', 'PostgreSQL'] },
  { id: 'delivery', label: 'Delivery', skills: ['Vercel', 'Git'] },
] as const

function TriangleMark({ 'aria-hidden': ariaHidden }: { 'aria-hidden'?: boolean | 'true' | 'false' }) {
  return <span aria-hidden={ariaHidden} />
}

const questionRoutes: Array<{ terms: string[]; view: PortfolioView }> = [
  { terms: ['project', 'work', 'build', 'built', 'portfolio', 'tripmate', 'buildly', 'tradieflow', 'castivo', 'quickmeet'], view: 'projects' },
  { terms: ['skill', 'stack', 'tool', 'technology', 'code', 'capability', 'service'], view: 'skills' },
  { terms: ['contact', 'email', 'hire', 'available', 'talk', 'reach'], view: 'contact' },
  { terms: ['fun', 'curious', 'experiment', 'learn', 'interest'], view: 'fun' },
  { terms: ['who', 'about', 'jhye', 'you', 'location', 'tokyo', 'australia'], view: 'me' },
]

export default function InteractivePortfolio() {
  const [activeView, setActiveView] = useState<PortfolioView>('me')
  const [question, setQuestion] = useState('')
  const [reply, setReply] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const viewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const syncViewFromHash = () => {
      const hash = window.location.hash.slice(1) as PortfolioView
      if (navigation.some(({ id }) => id === hash)) setActiveView(hash)
    }

    syncViewFromHash()
    window.addEventListener('hashchange', syncViewFromHash)
    window.addEventListener('popstate', syncViewFromHash)
    return () => {
      window.removeEventListener('hashchange', syncViewFromHash)
      window.removeEventListener('popstate', syncViewFromHash)
    }
  }, [])

  useEffect(() => {
    viewRef.current?.focus({ preventScroll: true })
  }, [activeView])

  const showView = (view: PortfolioView) => {
    setActiveView(view)
    setReply('')
    window.history.pushState(null, '', `#${view}`)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--cursor-x', `${((event.clientX - bounds.left) / bounds.width) * 100}%`)
    event.currentTarget.style.setProperty('--cursor-y', `${((event.clientY - bounds.top) / bounds.height) * 100}%`)
  }

  const handleQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalizedQuestion = question.trim().toLowerCase()
    if (!normalizedQuestion) return

    const mentionedProject = featuredProjects.find((project) => normalizedQuestion.includes(project.slug) || normalizedQuestion.includes(project.title.toLowerCase()))
    const matchedRoute = mentionedProject
      ? { view: 'projects' as const }
      : questionRoutes.find(({ terms }) => terms.some((term) => normalizedQuestion.includes(term)))

    if (mentionedProject) {
      showView('projects')
      setReply(`${mentionedProject.title}: ${mentionedProject.description} ${mentionedProject.why ?? ''} ${mentionedProject.problem ? `It solves this: ${mentionedProject.problem}` : ''}`.trim())
    } else if (matchedRoute) {
      showView(matchedRoute.view)
      const answers: Record<PortfolioView, string> = {
        me: `I’m Jhye, a product engineer working between ${profile.location}. I turn complicated operations into clear, useful software.`,
        projects: `I build products end to end—from product direction and interface design through frontend, backend, integrations, and release.`,
        skills: `My core stack includes ${skills.slice(0, 6).join(', ')}, plus Python, Tailwind CSS, Vercel, and Git.`,
        fun: `I’m curious about browser-native tools, operational clarity, and new product interfaces where automation earns trust.`,
        contact: `The quickest way to reach me is ${profile.email}. I’m happy to talk through a product or system that needs untangling.`,
      }
      setReply(answers[matchedRoute.view])
    } else {
      setReply('I can help with questions about my projects, skills, experiments, availability, or contact details. Try “what have you built?”')
    }
    setQuestion('')
  }

  return (
    <div className={`interactive-portfolio view-${activeView}`} onPointerMove={handlePointerMove}>
      <section className="portfolio-stage" id="portfolio-content" aria-label="Portfolio content">
        <div className="portfolio-view" key={activeView} ref={viewRef} tabIndex={-1}>
          {activeView === 'me' && <AboutView />}
          {activeView === 'projects' && <ProjectsView onSelect={setSelectedProject} />}
          {activeView === 'skills' && <SkillsView />}
          {activeView === 'fun' && <CuriousView />}
          {activeView === 'contact' && <ContactView />}
        </div>
        <p className="sr-only" role="status">Showing {navigation.find((item) => item.id === activeView)?.label}.</p>
      </section>

      <div className="portfolio-controls">
        <form className="portfolio-question" onSubmit={handleQuestion} role="search">
          <label className="sr-only" htmlFor="portfolio-question">Jump to a section of Jhye&apos;s portfolio</label>
          <input
            id="portfolio-question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Ask me anything..."
            autoComplete="off"
          />
          <button type="submit" aria-label="Submit question" disabled={!question.trim()}>
            <ArrowRight aria-hidden="true" />
          </button>
        </form>

        {reply && <p className="portfolio-reply" role="status">{reply}</p>}

        <nav className="portfolio-nav" aria-label="Portfolio sections">
          {navigation.map(({ id, label, icon: Icon, color }) => (
            <button
              key={id}
              type="button"
              className={activeView === id ? 'is-active' : undefined}
              onClick={() => showView(id)}
              aria-pressed={activeView === id}
              aria-controls="portfolio-content"
              style={{ '--nav-color': color } as React.CSSProperties}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      <p className="portfolio-watermark" aria-hidden="true">Jhye O&apos;Meley</p>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

function AboutView() {
  return (
    <section className="portfolio-hero" aria-labelledby="portfolio-title">
      <p className="hero-intro">Hey, I&apos;m Jhye <span aria-hidden="true">👋</span></p>
      <h1 id="portfolio-title">Product Engineer</h1>
      <div className="hero-portrait">
        <Image
          src="/images/projects/Headshot.jpeg"
          alt="Jhye O'Meley"
          fill
          priority
          sizes="(max-width: 640px) 210px, 260px"
          className="object-cover"
        />
      </div>
      <p className="hero-summary">I turn complicated operations into clear, useful software—from first idea to working release.</p>
    </section>
  )
}

function ProjectsView({ onSelect }: { onSelect: (project: Project) => void }) {
  return (
    <section className="portfolio-panel" aria-labelledby="projects-title">
      <div className="panel-heading">
        <div>
          <p className="panel-kicker">Selected work</p>
          <h2 id="projects-title">My Projects</h2>
        </div>
        <p>{featuredProjects.length} product platforms · {projectCount} builds in the full index</p>
      </div>

      <div className="project-carousel">
        {featuredProjects.map((project) => (
          <button key={project.slug} type="button" className="project-tile" onClick={() => onSelect(project)} aria-label={`View details for ${project.title}`}>
            <>
              <div className="project-card-copy">
                <span>{project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.disciplines.join(' · ')}</small>
              </div>
              <Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 640px) 78vw, 360px" className="object-cover" />
              <ArrowUpRight className="project-card-arrow" aria-hidden="true" />
            </>
          </button>
        ))}
      </div>

      <div className="panel-note">
        <p>I build across product strategy, interface design, frontend, backend, integrations, and delivery.</p>
        <a href="/portfolio/">Open the complete project index <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  )
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      {project && (
        <div className="project-dialog-card">
          <button type="button" className="dialog-close" onClick={onClose} aria-label="Close project details">Close</button>
          <div className="dialog-image"><Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 760px) 100vw, 52vw" className="object-cover" /></div>
          <div className="dialog-copy">
            <p className="panel-kicker">{project.status} · {project.year}</p>
            <h2 id="project-dialog-title">{project.title}</h2>
            <div className="dialog-sections">
              <section><h3>What it is</h3><p>{project.description}</p></section>
              {project.problem && <section><h3>The problem</h3><p>{project.problem}</p></section>}
              {project.why && <section><h3>Why I built it</h3><p>{project.why}</p></section>}
              {project.approach && <section><h3>How I approached it</h3><p>{project.approach}</p></section>}
            </div>
            <dl className="dialog-meta">
              <div><dt>Scope</dt><dd>{project.scope ?? 'Product design and development'}</dd></div>
              <div><dt>Built with</dt><dd>{project.disciplines.join(' · ')}</dd></div>
            </dl>
            {project.href ? <a href={project.href} target="_blank" rel="noreferrer">Open live product <ArrowUpRight aria-hidden="true" /></a> : <span className="dialog-private">Public preview not available</span>}
          </div>
        </div>
      )}
    </dialog>
  )
}

function SkillsView() {
  const [selectedSkill, setSelectedSkill] = useState<string>(skillGroups[0].skills[0])
  const [selectedGroup, setSelectedGroup] = useState<(typeof skillGroups)[number]['id']>('languages')
  const skillDetails: Record<string, { summary: string; use: string }> = {
    React: { summary: 'Component architecture for interfaces that need to feel fast, clear, and easy to evolve.', use: 'Used across TripMate, Buildly, QuickMeet, and internal product surfaces.' },
    'Next.js': { summary: 'Full-stack web foundations for content, routing, data, and production-ready product surfaces.', use: 'Used for TradieFlow, Castivo, and portfolio-scale applications.' },
    TypeScript: { summary: 'A shared language for making product behavior explicit and safer to change.', use: 'Used to keep frontend state, APIs, and reusable components aligned.' },
    'Node.js': { summary: 'Server-side workflows, integrations, automation, and services around the product.', use: 'Used when the product needs trusted business logic beyond the browser.' },
    Firebase: { summary: 'Authentication, realtime data, hosting, and pragmatic infrastructure for connected products.', use: 'Used for TripMate, Castivo, and realtime collaboration flows.' },
    PostgreSQL: { summary: 'Relational data modeling for systems where relationships, history, and reporting matter.', use: 'Used when operational data needs durable structure and clear querying.' },
    Python: { summary: 'Automation, data work, and experiments where a small script can remove a lot of manual effort.', use: 'Used for prototypes, processing workflows, and focused tooling.' },
    'Tailwind CSS': { summary: 'A fast way to compose consistent interface systems without losing control of the details.', use: 'Used for responsive layout, tokens, and product UI iteration.' },
    Vercel: { summary: 'A simple path from a working product to a reliable public deployment.', use: 'Used to ship and iterate on several live product surfaces.' },
    Git: { summary: 'A shared history for shipping carefully, reviewing changes, and keeping experiments reversible.', use: 'Used across every project from first commit to production release.' },
  }

  return (
    <section className="portfolio-panel" aria-labelledby="skills-title">
      <div className="panel-heading">
        <div><p className="panel-kicker">What I use</p><h2 id="skills-title">Skills &amp; Systems</h2></div>
        <p>Tools chosen around the problem—not the other way around.</p>
      </div>

      <div className="skill-layout">
        <div className="skill-explorer">
          <div className="skill-groups" role="tablist" aria-label="Skill categories">
            {skillGroups.map((group) => (
              <button key={group.id} type="button" role="tab" aria-selected={selectedGroup === group.id} className={selectedGroup === group.id ? 'is-selected' : undefined} onClick={() => { setSelectedGroup(group.id); setSelectedSkill(group.skills[0]) }}>
                {group.label}
              </button>
            ))}
          </div>
          <div className="skill-grid" role="list" aria-label="Technical skills">
            {(skillGroups.find((group) => group.id === selectedGroup)?.skills ?? []).map((skill, index) => {
              const mark = skillMarks[skill]
              const MarkIcon = mark.icon
              return (
              <button key={skill} type="button" className={selectedSkill === skill ? 'is-selected' : undefined} onClick={() => setSelectedSkill(skill)} aria-pressed={selectedSkill === skill}>
                <span className="skill-index">{String(index + 1).padStart(2, '0')}</span><span className="skill-mark" style={{ '--skill-color': mark.color } as React.CSSProperties}><MarkIcon aria-hidden="true" /><b>{mark.label}</b></span><strong>{skill}</strong>
              </button>
              )
            })}
          </div>
          <article className="skill-detail" aria-live="polite">
            <p className="panel-kicker">Selected skill</p>
            <h3>{selectedSkill}</h3>
            <p>{skillDetails[selectedSkill].summary}</p>
            <small>{skillDetails[selectedSkill].use}</small>
          </article>
        </div>
        <div className="capability-stack">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <div><h3>{capability.title}</h3><p>{capability.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CuriousView() {
  return (
    <section className="portfolio-panel" aria-labelledby="curious-title">
      <div className="panel-heading">
        <div><p className="panel-kicker">Beyond the main build</p><h2 id="curious-title">Things I&apos;m Curious About</h2></div>
        <p>Small experiments keep the bigger work sharp.</p>
      </div>

      <div className="curious-grid">
        <article><span>01</span><h3>Browser-native tools</h3><p>Testing how much useful software can run privately in the browser—from video editing to PDFs and computer vision.</p></article>
        <article><span>02</span><h3>Operational clarity</h3><p>Finding better ways to turn bookings, routes, costs, live events, and team decisions into one understandable workflow.</p></article>
        <article><span>03</span><h3>New product interfaces</h3><p>Exploring where AI and automation genuinely remove work without making the product harder to trust or use.</p></article>
      </div>
      <p className="curious-location">Currently building between <strong>Tokyo</strong> and <strong>Australia</strong>.</p>
    </section>
  )
}

function ContactView() {
  return (
    <section className="portfolio-panel contact-panel" aria-labelledby="contact-title">
      <div>
        <p className="panel-kicker">Let&apos;s make something useful</p>
        <h2 id="contact-title">Have a product to build or a system to untangle?</h2>
        <p>Send me the context, the difficult part, and what a useful outcome would look like.</p>
      </div>

      <div className="contact-actions">
        <a className="contact-primary" href={`mailto:${profile.email}`}><Mail aria-hidden="true" />{profile.email}<ArrowUpRight aria-hidden="true" /></a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  )
}
