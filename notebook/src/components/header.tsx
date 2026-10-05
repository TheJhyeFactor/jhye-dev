"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "@/components/icons";
const links = [
  ["/", "Home"],
  ["/research", "Research"],
  ["/notes", "Notes"],
  ["/projects", "Projects"],
  ["/about", "About"],
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="masthead">
          <div>
            {" "}
            <Link
              href="/"
              className="brand"
              aria-label="Privileged home"
              onClick={() => setOpen(false)}
            >
              Privileged
            </Link>
            <p className="site-tagline">
              Security research & technical notes by Jhye.
            </p>
          </div>{" "}
          <div className="header-actions">
            <button
              className="menu-toggle"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="main-navigation"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <nav
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
          id="main-navigation"
        >
          {links.map(([url, title]) => (
            <Link
              key={url}
              href={url}
              onClick={() => setOpen(false)}
              aria-current={
                (url === "/" ? pathname === "/" : pathname.startsWith(url))
                  ? "page"
                  : undefined
              }
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
