import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-black border-t border-urban-gray/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-semibold tracking-wide">
              jhye<span className="text-tokyo-red">.</span>dev
            </Link>
            <span className="text-tokyo-red">•</span>
            <span className="text-warm-gray text-sm font-noto">ジェイ</span>
          </div>

          <nav className="flex items-center gap-8">
            <Link href="/about/" className="text-warm-gray text-sm hover:text-snow-white transition-colors duration-150">
              About
            </Link>
            <Link href="/services/" className="text-warm-gray text-sm hover:text-snow-white transition-colors duration-150">
              Services
            </Link>
            <Link href="/portfolio/" className="text-warm-gray text-sm hover:text-snow-white transition-colors duration-150">
              Portfolio
            </Link>
            <Link href="/contact/" className="text-warm-gray text-sm hover:text-snow-white transition-colors duration-150">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-urban-gray/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-gray text-xs">
            © {currentYear} Jhye O&apos;Meley. All rights reserved.
          </p>
          <p className="text-warm-gray/60 text-xs">
            Automation <span className="text-tokyo-red">•</span> Development <span className="text-tokyo-red">•</span> Optimisation
          </p>
        </div>
      </div>
    </footer>
  )
}
