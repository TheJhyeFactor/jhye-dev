import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Jhye O\'Meley — Full-stack developer',
  description: 'Jhye O\'Meley is a full-stack developer building useful software and operational systems.',
  keywords: ['full-stack developer', 'web development', 'automation', 'software', 'portfolio'],
  authors: [{ name: 'Jhye O\'Meley' }],
  openGraph: { title: 'Jhye O\'Meley — Full-stack developer', description: 'Building useful software and operational systems.', url: 'https://jhye.dev', siteName: 'jhye.dev', type: 'website' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DM0L507283" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-DM0L507283');`}</Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
