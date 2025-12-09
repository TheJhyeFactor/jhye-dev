import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-urban-gray p-8 rounded-tokyo transition-all duration-200 hover:bg-urban-gray/80">
      <div className="mb-5">
        <Icon className="w-8 h-8 text-tokyo-red stroke-[1.5]" />
      </div>
      <h3 className="text-lg font-semibold mb-3 text-snow-white">{title}</h3>
      <p className="text-warm-gray text-sm leading-relaxed">{description}</p>
      <div className="mt-5 h-0.5 w-0 bg-tokyo-red transition-all duration-200 group-hover:w-12" />
    </div>
  )
}
