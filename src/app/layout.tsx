import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://jhye.dev/#person',
      name: "Jhye O'Meley",
      url: 'https://jhye.dev',
      image: 'https://jhye.dev/images/projects/Headshot.jpeg',
      sameAs: ['https://github.com/TheJhyeFactor', 'https://www.linkedin.com/in/jhye-o-meley-529960213/'],
      jobTitle: 'Product Engineer',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://jhye.dev/#website',
      url: 'https://jhye.dev',
      name: 'jhye.dev',
      publisher: { '@id': 'https://jhye.dev/#person' },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://jhye.dev'),
  title: {
    default: "Jhye O'Meley — Product Engineer",
    template: "%s — Jhye O'Meley",
  },
  description: "Jhye O'Meley designs and builds operational products, web applications, and automations from first idea to working release.",
  keywords: ['product developer', 'full-stack developer', 'product design', 'web applications', 'automation'],
  authors: [{ name: "Jhye O'Meley", url: 'https://jhye.dev' }],
  creator: "Jhye O'Meley",
  alternates: { canonical: '/' },
  openGraph: {
    title: "Jhye O'Meley — Product Engineer",
    description: 'Complicated work, turned into software people can actually use.',
    url: 'https://jhye.dev',
    siteName: 'jhye.dev',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-interactive.webp', width: 1729, height: 910, alt: "Jhye O'Meley — Product Engineer" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jhye O'Meley — Product Engineer",
    description: 'Complicated work, turned into software people can actually use.',
    images: ['/og-interactive.webp'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--ink)] focus:px-4 focus:py-3 focus:text-white">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DM0L507283" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-DM0L507283',{anonymize_ip:true});`}</Script>
      </body>
    </html>
  )
}
