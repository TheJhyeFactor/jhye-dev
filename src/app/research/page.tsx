import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ContactBand from "@/components/ContactBand";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Enter Privileged, Jhye O’Meley’s notebook for security research, technical experiments and notes.",
  alternates: { canonical: "/research/" },
};

export default function ResearchEntry() {
  return (
    <>
      <header className="shell page-intro">
        <p className="eyebrow">Research / Privileged</p>
        <h1>
          A notebook for
          <br />
          <em>things worth breaking.</em>
        </h1>
        <p className="lead">
          Privileged is my focused space for security research, technical
          experiments, software notes and the details behind a failure. It
          sits inside jhye.dev, with its own quieter layout and archive.
        </p>
        <Link className="button" href="/privileged/">
          Enter Privileged <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </header>
      <section className="shell section research-entry-note" aria-label="About Privileged">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What you will find there</p>
            <h2>
              Research, notes
              <br />
              <em>and working evidence.</em>
            </h2>
          </div>
          <p>
            The notebook keeps the status of each piece clear: demo writing is
            labelled, public upstream work links to its source, and a merged
            change is not presented as a release or vulnerability without
            evidence.
          </p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
