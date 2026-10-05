import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site, absoluteUrl } from "@/lib/site";
import "./globals.css";
const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Privileged — Jhye’s security notebook",
    template: "%s | Privileged",
  },
  description: site.description,
  authors: [{ name: site.author }],
  alternates: { canonical: "/", types: { "application/rss+xml": "/rss.xml" } },
  openGraph: {
    title: "Privileged",
    description: site.description,
    url: absoluteUrl(),
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Privileged — security research by Jhye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privileged",
    description: site.description,
    images: ["/og"],
  },
  robots: site.url.includes("localhost")
    ? { index: false, follow: false }
    : { index: true, follow: true },
};
export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
