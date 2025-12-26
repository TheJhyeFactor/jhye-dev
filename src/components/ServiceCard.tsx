import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-urban-gray/50 p-8 rounded-tokyo transition-all duration-300 hover:bg-urban-gray/80 border border-transparent hover:border-electric-blue/30 hover:shadow-glow-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/0 to-cyber-purple/0 group-hover:from-electric-blue/5 group-hover:to-cyber-purple/5 transition-all duration-500" />
      <div className="relative z-10">
        <div className="mb-5 inline-block p-3 bg-urban-gray rounded-lg group-hover:bg-electric-blue/10 transition-all duration-300">
          <Icon className="w-6 h-6 text-electric-blue stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-lg font-semibold mb-3 text-snow-white group-hover:text-transparent group-hover:bg-gradient-accent-blue group-hover:bg-clip-text transition-all duration-300">{title}</h3>
        <p className="text-warm-gray text-sm leading-relaxed">{description}</p>
        <div className="mt-5 h-0.5 w-0 bg-gradient-accent-blue transition-all duration-300 group-hover:w-16" />
      </div>
    </div>
  )
}
