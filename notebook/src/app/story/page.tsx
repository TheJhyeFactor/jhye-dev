import { Suspense } from "react";
import { LiveStoryPage } from "@/components/live-story";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Story", alternates: { canonical: "/story/" } };
export default function StoryPage() {
  return <Suspense fallback={<div className="container page-content"><p>Loading story…</p></div>}><LiveStoryPage /></Suspense>;
}
