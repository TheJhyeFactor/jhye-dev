"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
const links = [
  { href: "/job-tracker", label: "Job tracker" },
  { href: "/work", label: "Work" },
  { href: "/career", label: "Career" },
  { href: "/open-source", label: "Open source" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          className="wordmark"
          href="/"
          aria-label="Jhye dot dev, home"
          onClick={() => setOpen(false)}
        >
          jhye<span>.</span>dev
        </Link>
        <nav
          className={open ? "header-nav is-open" : "header-nav"}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="nav-contact"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
