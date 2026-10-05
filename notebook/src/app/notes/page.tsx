import type { Metadata } from "next";
import { ArchivePage } from "@/components/archive-page";
export const metadata: Metadata = {
  title: "Notes",
  description:
    "Small discoveries, useful commands, and things Jhye is learning.",
  alternates: { canonical: "/notes" },
};
export default function NotesPage() {
  return (
    <ArchivePage
      kind="notes"
      title="Notes"
      description="Small discoveries, useful commands, and things I’m learning."
    />
  );
}
