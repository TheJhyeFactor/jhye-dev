import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { researchStories } from "@/data/research";
import ContactBand from "@/components/ContactBand";

export const metadata: Metadata = {
  title: "Research & notes",
  description:
    "Evidence-backed technical notes from Jhye O’Meley’s software, systems and security work.",
  alternates: { canonical: "/research/" },
};

export default function ResearchIndex() {
  return (
    <>
      <header className="shell page-intro">
        <p className="eyebrow">Research / Systems & security</p>
        <h1>
          Follow the failure.
          <br />
          <em>Keep the evidence.</em>
        </h1>
        <p className="lead">
          A small notebook for debugging sessions, security-adjacent findings
          and the decisions that make technical work easier to review.
        </p>
      </header>
      <main className="shell research-index">
        {researchStories.map((story, index) => (
          <article className="research-card" key={story.slug}>
            <div className="research-card-meta">
              <span className="eyebrow">0{index + 1} / {story.category}</span>
              <span className="mono">{story.date}</span>
            </div>
            <h2>{story.title}</h2>
            <p>{story.description}</p>
            <div className="research-card-bottom">
              <span>{story.tags.join(" · ")}</span>
              <Link className="text-link" href={`/research/${story.slug}/`}>
                Read the story <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </main>
      <ContactBand />
    </>
  );
}
