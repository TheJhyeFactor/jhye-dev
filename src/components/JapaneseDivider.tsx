interface JapaneseDividerProps {
  character?: string
  className?: string
}

export default function JapaneseDivider({ character = '◆', className = '' }: JapaneseDividerProps) {
  return (
    <div className={`japanese-divider ${className}`}>
      <span className="relative z-10 px-6 bg-primary-black text-tokyo-red font-noto text-2xl">
        {character}
      </span>
    </div>
  )
}
