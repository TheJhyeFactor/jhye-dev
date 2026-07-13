import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const capabilities = [
  ['01', 'Full-stack web development', 'Responsive, production-ready web applications with clear component structure and sensible data flow.'],
  ['02', 'Automation & integrations', 'Connected workflows that remove repetitive work across business tools, APIs, and internal systems.'],
  ['03', 'Dashboards & operational tools', 'Focused interfaces that turn live information into useful decisions for teams and operators.'],
  ['04', 'AI/ML prototypes', 'Practical experiments that test new technology against a real user problem before investment.'],
]

export default function ServicesPage() {
  return <div className="page-shell"><section className="py-20 md:py-28"><p className="eyebrow mb-5">Capabilities</p><h1 className="max-w-3xl font-['Space_Grotesk'] text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl">The kind of work I&apos;m good at.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">I work across product, interface, and implementation to make useful software for teams and the people they serve.</p></section><section className="section-rule divide-y divide-[var(--border)] border-b border-[var(--border)]">{capabilities.map(([number, title, description]) => <article key={number} className="grid gap-5 py-8 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start"><span className="text-sm font-bold text-[var(--accent)]">{number}</span><h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">{title}</h2><p className="max-w-xl leading-7 text-[var(--muted)]">{description}</p></article>)}</section><section className="section-rule flex flex-col justify-between gap-6 py-16 md:flex-row md:items-end"><div><p className="eyebrow mb-3">Work together</p><h2 className="max-w-xl font-['Space_Grotesk'] text-3xl font-bold tracking-tight md:text-4xl">Have a system that needs building or simplifying?</h2></div><Link href="/contact/" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:underline">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link></section></div>
}
