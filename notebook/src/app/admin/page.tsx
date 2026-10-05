import type { Metadata } from "next";
import { PublisherDesk } from "@/components/publisher-desk";
import "../publisher.css";
export const metadata: Metadata = { title: "Publishing desk", robots: { index: false, follow: false }, alternates: { canonical: "/admin/" } };
export default function AdminPage() { return <PublisherDesk />; }
