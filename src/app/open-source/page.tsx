import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import ContributionList from "@/components/ContributionList";
import ContactBand from "@/components/ContactBand";
export const metadata: Metadata = {
  title: "Open-source contributions",
  description:
    "Application security work submitted to ZAP and merged contributions to Ollama, Charmbracelet Crush, W&B RAI Toolkit and OpenTelemetry Go.",
  alternates: { canonical: "/open-source/" },
};
export default function OpenSource() {
  return (
    <>
      <header className="shell page-intro">
        <p className="eyebrow">Open source / Code & investigation</p>
        <h1>
          Read the code.
          <br />
          <em>Follow the reasoning.</em>
        </h1>
        <p className="lead">
          Focused changes to projects other people use. The problem, the fix and
          the result, with the original pull request or investigation one click away.
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
      <section className="shell source-index" aria-label="Open-source contributions">
        <ContributionList full />
        <p className="source-status">
          Contribution status checked on 4 October 2026. Released labels mean
          the merged commit is included in the linked stable release tag; they
          do not identify the first release containing the change. Submitted
          work and documented investigations are labelled separately. Benchmarks describe the stated
          workload, rather than whole-product performance.
        </p>
      </section>
      <ContactBand />
    </>
  );
}
