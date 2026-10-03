import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://jhye.dev/#person",
      name: "Jhye O'Meley",
      url: "https://jhye.dev",
      image: "https://jhye.dev/images/headshot.webp",
      sameAs: [
        "https://github.com/TheJhyeFactor",
        "https://www.linkedin.com/in/jhye-o-meley-529960213/",
      ],
      jobTitle: "Software Developer · AI & Cybersecurity",
    },
    {
      "@type": "WebSite",
      "@id": "https://jhye.dev/#website",
      url: "https://jhye.dev",
      name: "jhye.dev",
      publisher: { "@id": "https://jhye.dev/#person" },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jhye.dev"),
  title: {
    default: "Jhye O'Meley — Software Developer · AI & Cybersecurity",
    template: "%s — Jhye O'Meley",
  },
  description:
    "Jhye O'Meley is a software developer focused on AI and cybersecurity. Explore engineering projects, career experience and merged open-source contributions.",
  keywords: [
    "software developer",
    "AI engineering",
    "cybersecurity",
    "systems integration",
    "open source",
  ],
  authors: [{ name: "Jhye O'Meley", url: "https://jhye.dev" }],
  creator: "Jhye O'Meley",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jhye O'Meley — Software Developer · AI & Cybersecurity",
    description:
      "Software engineering, AI and cybersecurity. Projects, career experience and merged open-source contributions.",
    url: "https://jhye.dev",
    siteName: "jhye.dev",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Jhye O'Meley — Software Developer · AI & Cybersecurity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhye O'Meley — Software Developer · AI & Cybersecurity",
    description:
      "Software engineering, AI and cybersecurity. Projects, career experience and merged open-source contributions.",
    images: ["/og.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f5f0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DM0L507283"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-DM0L507283',{anonymize_ip:true});`}</Script>
      </body>
    </html>
  );
}
