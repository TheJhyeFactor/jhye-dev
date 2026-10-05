import type { Metadata } from "next";
import { ArchivePage } from "@/components/archive-page";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Tools, scripts, and software experiments from Jhye’s workbench.",
  alternates: { canonical: "/projects" },
};
export default function ProjectsPage() {
  return (
    <ArchivePage
      kind="projects"
      title="Projects"
      description="Tools, scripts, and software I’m working on."
    />
  );
}
