import type { Metadata } from "next";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "About Jhye",
  description:
    "The person behind Privileged. Software engineering, security, and curiosity.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  const profiles = [
    { label: "GitHub", url: site.profiles.github },
    { label: "LinkedIn", url: site.profiles.linkedin },
    { label: "Personal website", url: site.profiles.personal },
  ].filter((profile) => profile.url);
  return (
    <div className="container page-content">
      <div className="page-intro">
        <h1>About</h1>
      </div>
      <div className="about-body prose">
        <p>
          I’m Jhye, a software engineer with an interest in cybersecurity,
          systems, networking, and figuring out how things work.
        </p>
        <p>
          Privileged is my personal technical notebook. I write about security
          experiments, software projects, tools I build, and things I’m
          learning.
        </p>
        <p>
          Some posts are detailed investigations. Others are just a useful
          command or something interesting I found. This is a place for both.
        </p>
        <h2 id="profiles">Find me elsewhere</h2>
        <div className="profile-links">
          {profiles.map(({ label, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </div>
        <p>
          You can also follow new posts through the{" "}
          <a href="/rss.xml">RSS feed</a>.
        </p>
      </div>
    </div>
  );
}
