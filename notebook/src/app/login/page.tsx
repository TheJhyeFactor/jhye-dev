import type { Metadata } from "next";
import { PublisherLogin } from "@/components/publisher-login";
import "../publisher.css";
export const metadata: Metadata = { title: "Login", robots: { index: false, follow: false }, alternates: { canonical: "/login/" } };
export default function LoginPage() { return <PublisherLogin />; }
