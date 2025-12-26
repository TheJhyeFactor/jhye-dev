import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded-tokyo transition-all duration-300 relative overflow-hidden group'

  const variants = {
    primary: 'bg-gradient-accent text-snow-white hover:shadow-glow-red border border-tokyo-red/30 hover:border-tokyo-red/60 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'border border-warm-gray/50 text-warm-gray hover:border-electric-blue hover:text-snow-white hover:shadow-glow-blue bg-urban-gray/20 hover:bg-urban-gray/40 disabled:opacity-50 disabled:cursor-not-allowed',
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
    <button type={type} onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  )
}
