import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="section-rule mt-24">
      <div className="page-shell flex flex-col gap-6 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div><Link href="/" className="font-['Space_Grotesk'] font-bold text-[var(--ink)]">jhye<span className="text-[var(--accent)]">.</span>dev</Link><span className="ml-4">Building useful software with clarity.</span></div>
        <div className="flex gap-5"><a className="focus-ring hover:text-[var(--accent)]" href="https://github.com/TheJhyeFactor" target="_blank" rel="noreferrer">GitHub</a><a className="focus-ring hover:text-[var(--accent)]" href="https://www.linkedin.com/in/jhye-o-meley-529960213/" target="_blank" rel="noreferrer">LinkedIn</a><a className="focus-ring hover:text-[var(--accent)]" href="mailto:omelejhye@gmail.com">Email</a></div>
      </div>
    </footer>
  )
}
