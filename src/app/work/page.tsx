import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import ContactBand from "@/components/ContactBand";
export const metadata: Metadata = {
  title: "Selected work",
  description:
    "AI tools, cybersecurity workflows and client delivery by Jhye O’Meley.",
  alternates: { canonical: "/work/" },
};
export default function Work() {
  return (
    <>
      <div className="shell page-intro">
        <p className="eyebrow">Selected work / 2026</p>
        <h1>
          What I build.
          <br />
          <em>Why it matters.</em>
        </h1>
        <p className="lead">
          A deliberately small selection. Each story explains the problem, my
          contribution, the decisions and the limits of the result.
        </p>
      </div>
      <section
        className="shell work-grid work-index"
        aria-label="Project case studies"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </section>
      <ContactBand />
    </>
  );
}
