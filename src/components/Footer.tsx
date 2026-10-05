import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Link className="wordmark" href="/">
            jhye<span>.</span>dev
          </Link>
          <p>
            Software engineering. AI. Cybersecurity.
            <br />
            Built with curiosity, backed by evidence.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/career">Career</Link>
          <Link href="/open-source">Open source</Link>
          <Link href="/research">Research</Link>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`}>
            Email <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Jhye O’Meley</span>
        <span>Newcastle, Australia · Working across systems</span>
        <a
          href="https://github.com/TheJhyeFactor/jhye-dev"
          target="_blank"
          rel="noreferrer"
        >
          Site source ↗
        </a>
      </div>
    </footer>
  );
}
