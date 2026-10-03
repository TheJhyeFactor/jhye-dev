import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import ContributionList from "@/components/ContributionList";
import ContactBand from "@/components/ContactBand";
export const metadata: Metadata = {
  title: "Open-source contributions",
  description:
    "Merged contributions to Ollama, Charmbracelet Crush, W&B RAI Toolkit and OpenTelemetry Go.",
  alternates: { canonical: "/open-source/" },
};
export default function OpenSource() {
  return (
    <>
      <header className="shell page-intro">
        <p className="eyebrow">Open source / Accepted upstream work</p>
        <h1>
          Read the code.
          <br />
          <em>Follow the reasoning.</em>
        </h1>
        <p className="lead">
          Focused changes to projects other people use. The problem, the fix and
          the result, with the original pull request one click away.
        </p>
        <a
          className="text-link"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          Explore my GitHub <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>
      <section className="shell source-index" aria-label="Merged contributions">
        <ContributionList full />
        <p className="source-status">
          Merge status checked on 3 October 2026. Benchmarks describe the stated
          workload, rather than whole-product performance.
        </p>
      </section>
      <ContactBand />
    </>
  );
}
