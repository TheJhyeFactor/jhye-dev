import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import ContributionBrowser from "@/components/ContributionBrowser";
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
          Focused changes to projects other people use. Browse by area, status
          or language, then follow the problem, change and result back to the
          original pull request or investigation.
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
      <ContributionBrowser />
      <ContactBand />
    </>
  );
}
