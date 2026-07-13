import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps { title: string; description: string; image: string; tags: string[]; href?: string; year?: number; featured?: boolean; status?: string }

export default function ProjectCard({ title, description, image, tags, href, year, featured, status }: ProjectCardProps) {
  const content = <>
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e3da]">
      <Image src={image} alt={`${title} project screenshot`} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
    </div>
    <div className="border-t border-[var(--border)] p-5 md:p-6">
      <div className="flex items-start justify-between gap-5"><div><p className="eyebrow mb-2">{status ?? (featured ? 'Selected work' : 'Project')}</p><h3 className="font-['Space_Grotesk'] text-xl font-bold tracking-tight">{title}</h3></div>{href && <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />}</div>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{description}</p>
      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--subtle)]">{tags.map((tag) => <span key={tag}>{tag}</span>)}{year && <span className="ml-auto">{year}</span>}</div>
    </div>
  </>
  return href ? <a href={href} target="_blank" rel="noreferrer" className="group block border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)] focus-ring">{content}</a> : <div className="group border border-[var(--border)] bg-[var(--surface)]">{content}</div>
}
