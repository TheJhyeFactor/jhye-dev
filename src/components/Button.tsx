import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded-tokyo transition-all duration-300 relative overflow-hidden group'

  const variants = {
    primary: 'bg-gradient-accent text-snow-white hover:shadow-glow-red border border-tokyo-red/30 hover:border-tokyo-red/60',
    secondary: 'border border-warm-gray/50 text-warm-gray hover:border-electric-blue hover:text-snow-white hover:shadow-glow-blue bg-urban-gray/20 hover:bg-urban-gray/40',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
