import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  href?: string
}

export default function ProjectCard({ title, description, image, tags, href }: ProjectCardProps) {
  const content = (
    <>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-urban-gray/80 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-snow-white">{title}</h3>
          {href && (
            <ArrowUpRight className="w-5 h-5 text-tokyo-red opacity-0 -translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0" />
          )}
        </div>
        <p className="mt-2 text-warm-gray text-sm leading-relaxed">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs text-warm-gray border border-warm-gray/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  const className = "group block bg-urban-gray rounded-tokyo overflow-hidden transition-all duration-200 hover:bg-urban-gray/80"

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <div className={className}>
      {content}
    </div>
  )
}
