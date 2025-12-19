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
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-urban-gray via-urban-gray/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-tokyo-red/0 to-cyber-purple/0 group-hover:from-tokyo-red/10 group-hover:to-cyber-purple/10 transition-all duration-500" />

        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shine" />
        </div>

        {/* View overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-black/60 backdrop-blur-sm">
          <span className="text-snow-white font-semibold flex items-center gap-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Project
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-snow-white group-hover:text-transparent group-hover:bg-gradient-accent group-hover:bg-clip-text transition-all duration-300">{title}</h3>
        </div>
        <p className="mt-2 text-warm-gray text-sm leading-relaxed">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs text-warm-gray bg-primary-black/50 border border-warm-gray/30 rounded-full group-hover:border-tokyo-red/50 group-hover:text-tokyo-red/80 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  const className = "group block bg-urban-gray rounded-tokyo overflow-hidden transition-all duration-500 hover:bg-urban-gray/80 hover:shadow-glow-red hover:-translate-y-2 border border-transparent hover:border-tokyo-red/20 relative"

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
