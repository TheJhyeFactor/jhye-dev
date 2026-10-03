import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk with Jhye O’Meley about software engineering, AI, cybersecurity and collaboration.",
  alternates: { canonical: "/contact/" },
};
export default function Contact() {
  return (
    <section className="shell page-intro contact-page" id="contact">
      <p className="eyebrow">Contact / Let’s talk</p>
      <h1>
        A good problem.
        <br />
        <em>A thoughtful team.</em>
      </h1>
      <p className="lead">
        I’m interested in software engineering opportunities where I can
        contribute, keep learning, and work on useful systems across AI and
        cybersecurity.
      </p>
      <div className="contact-details">
        <a className="email-link" href={`mailto:${profile.email}`}>
          <Mail size={23} aria-hidden="true" />
          <span>{profile.email}</span>
          <ArrowUpRight size={24} aria-hidden="true" />
        </a>
        <div className="contact-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="contact-context">
        <span className="eyebrow">Useful context to include</span>
        <p>
          The role or project, the team, the problem you’re working on, and what
          you’d like to discuss.
        </p>
        <span className="mono">Based in Newcastle, Australia</span>
      </div>
    </section>
  );
}
