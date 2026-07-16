 'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/portfolio'
import { trackEvent } from '@/lib/analytics'

type ProjectCardProps = Project

export default function ProjectCard({ title, description, image, disciplines, href, year }: ProjectCardProps) {
  const content = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#ddd6ca]">
        <Image
          src={image}
          alt={`${title} project interface`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </div>
      <div className="border-t border-[var(--border)] p-5 md:p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="mono-label mb-2">Project / {year}</p>
            <h3 className="font-display text-xl font-bold tracking-[-0.03em]">{title}</h3>
          </div>
          {href && <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />}
        </div>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{description}</p>
        <p className="project-disciplines mt-5">{disciplines.join(' · ')}</p>
      </div>
    </>
  )

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="group block border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--ink)] focus-ring" onClick={() => trackEvent('project_click', { project: title, source: 'project_index' })}>
      {content}
    </a>
  ) : (
    <article className="group border border-[var(--border)] bg-[var(--surface)]">{content}</article>
  )
}
