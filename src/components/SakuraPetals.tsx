'use client'

import { useMemo } from 'react'

export default function SakuraPetals() {
  // Memoize petal configurations so they don't change on re-render
  const petals = useMemo(() =>
    [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `-${Math.random() * 20}px`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${15 + Math.random() * 15}s`,
    })),
    [] // Empty dependency array means this only runs once on mount
  )

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-sakura"
          style={{
            left: petal.left,
            top: petal.top,
            animationDelay: petal.animationDelay,
            animationDuration: petal.animationDuration,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              opacity: 0.6,
              filter: 'blur(0.5px)',
            }}
          >
            <path
              d="M12 2C12 2 10.5 5 9 7C7.5 9 5 10 5 12C5 14 7.5 15 9 17C10.5 19 12 22 12 22C12 22 13.5 19 15 17C16.5 15 19 14 19 12C19 10 16.5 9 15 7C13.5 5 12 2 12 2Z"
              fill="#FF2D55"
              fillOpacity="0.3"
            />
            <path
              d="M12 5C12 5 14 6.5 16 7.5C18 8.5 19 10 19 12C19 14 18 15.5 16 16.5C14 17.5 12 19 12 19C12 19 10 17.5 8 16.5C6 15.5 5 14 5 12C5 10 6 8.5 8 7.5C10 6.5 12 5 12 5Z"
              fill="#FF2D55"
              fillOpacity="0.2"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
