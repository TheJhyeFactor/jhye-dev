import type { Metadata } from "next";
import CareerTimeline from "@/components/CareerTimeline";
import ContactBand from "@/components/ContactBand";
export const metadata: Metadata = {
  title: "Career & experience",
  description:
    "Explore Jhye O’Meley’s roles, dates, responsibilities and work across software, integrations, AI and cybersecurity.",
  alternates: { canonical: "/career/" },
};
export default function Career() {
  return (
    <>
      <header className="shell page-intro">
        <p className="eyebrow">Career / 2021 to now</p>
        <h1>
          Every role adds
          <br />
          <em>another perspective.</em>
        </h1>
        <p className="lead">
          Technical delivery, integrations, software engineering and now AI and
          cybersecurity. Choose a chapter to explore the work behind the job
          title.
        </p>
      </header>
      <section className="shell career-index" aria-label="Career timeline">
        <div className="timeline-legend">
          <span>
            <span className="status-dot" /> Current roles
          </span>
          <span>Most recent first · Some roles overlap</span>
        </div>
        <CareerTimeline />
      </section>
      <ContactBand />
    </>
  );
}
