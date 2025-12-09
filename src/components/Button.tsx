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
  const baseStyles = 'inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded-tokyo transition-all duration-150'

  const variants = {
    primary: 'bg-tokyo-red text-snow-white hover:bg-tokyo-red/90',
    secondary: 'border border-warm-gray text-warm-gray hover:border-snow-white hover:text-snow-white',
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
