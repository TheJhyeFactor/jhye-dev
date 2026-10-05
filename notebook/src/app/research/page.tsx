import type { Metadata } from "next";
import { ArchivePage } from "@/components/archive-page";
export const metadata: Metadata = {
  title: "Research",
  description:
    "Security investigations, technical deep dives, and experiments from Jhye’s notebook.",
  alternates: { canonical: "/research" },
};
export default function ResearchPage() {
  return (
    <ArchivePage
      kind="research"
      title="Research"
      description="Security investigations and technical experiments."
    />
  );
}
