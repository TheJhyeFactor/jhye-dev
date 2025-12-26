import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CursorFollower from '@/components/CursorFollower'
import FloatingOrbs from '@/components/FloatingOrbs'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Jhye O\'Meley | Automation • Development • Optimisation',
  description: 'I build fast, clean systems that help businesses move with clarity and precision.',
  keywords: ['developer', 'automation', 'web development', 'apps script', 'dashboards', 'consulting'],
  authors: [{ name: 'Jhye O\'Meley' }],
  openGraph: {
    title: 'Jhye O\'Meley | Automation • Development • Optimisation',
    description: 'I build fast, clean systems that help businesses move with clarity and precision.',
    url: 'https://jhye.dev',
    siteName: 'jhye.dev',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DM0L507283"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DM0L507283');
          `}
        </Script>
      </head>
      <body className="bg-primary-black text-snow-white min-h-screen flex flex-col overflow-x-hidden">
        <CursorFollower />
        <FloatingOrbs />
        <Header />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
