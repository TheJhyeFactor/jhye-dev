'use client'

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orb 1 - Top Right */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 bg-tokyo-red/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '0s', animationDuration: '20s' }}
      />

      {/* Orb 2 - Bottom Left */}
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '3s', animationDuration: '25s' }}
      />

      {/* Orb 3 - Middle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-blue/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '6s', animationDuration: '30s' }}
      />

      {/* Orb 4 - Top Left */}
      <div
        className="absolute top-20 left-1/4 w-64 h-64 bg-neon-cyan/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s', animationDuration: '22s' }}
      />

      {/* Orb 5 - Bottom Right */}
      <div
        className="absolute bottom-40 right-1/4 w-72 h-72 bg-tokyo-red/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '4s', animationDuration: '28s' }}
      />
    </div>
  )
}
