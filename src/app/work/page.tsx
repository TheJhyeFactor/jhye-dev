import type { Metadata } from "next";
import WorkBrowser from "@/components/WorkBrowser";
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
          Explore AI tools, cybersecurity projects and client delivery. Browse
          by area, narrow by project stage, or find the technology you’re interested
          in. Each case study explains the problem, my role and the result.
        </p>
      </div>
      <WorkBrowser />
      <ContactBand />
    </>
  );
}
