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
  const CardContent = (
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

        {href && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-tokyo-red/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
        )}

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shine" />
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

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-urban-gray rounded-tokyo overflow-hidden transition-all duration-500 hover:bg-urban-gray/80 hover:shadow-glow-red hover:-translate-y-2 border border-transparent hover:border-tokyo-red/20 relative block cursor-pointer"
      >
        {CardContent}
      </a>
    )
  }

  return (
    <div className="group bg-urban-gray rounded-tokyo overflow-hidden transition-all duration-500 hover:bg-urban-gray/80 hover:shadow-glow-red hover:-translate-y-2 border border-transparent hover:border-tokyo-red/20 relative">
      {CardContent}
    </div>
  )
}
