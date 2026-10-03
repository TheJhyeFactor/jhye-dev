import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ContactBand from "@/components/ContactBand";
export const metadata: Metadata = {
  title: "About Jhye",
  description:
    "Software developer focused on AI and cybersecurity, with experience across APIs, connected systems and technical delivery.",
  alternates: { canonical: "/about/" },
};
export default function About() {
  return (
    <>
      <header className="shell page-intro">
        <p className="eyebrow">About / Jhye O’Meley</p>
        <h1>
          Curious about the
          <br />
          <em>whole system.</em>
        </h1>
      </header>
      <section className="shell about-grid" id="about">
        <div className="about-portrait">
          <Image
            src="/images/headshot.webp"
            alt="Jhye O’Meley"
            width={700}
            height={900}
            sizes="(max-width: 760px) 100vw, 35vw"
          />
        </div>
        <div className="about-narrative">
          <p className="lead">
            I’m a software developer in Newcastle, Australia, focused on AI and
            cybersecurity.
          </p>
          <p>
            My path has taken me through electronic key-management systems,
            customer integrations, technical project delivery, software
            engineering and independent consulting. I’m now bringing those
            experiences together through AI tooling and cybersecurity work.
          </p>
          <p>
            I enjoy understanding how things connect: the interface someone
            uses, the data behind it, the API between systems and the failure
            that only appears once the system is running.
          </p>
          <p>
            My independent work includes local AI tools and security workflows.
            My open-source contributions focus on practical improvements to
            reliability, performance and testing.
          </p>
          <Link className="text-link" href="/career">
            Explore my career <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="shell section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Capabilities / With context</p>
            <h2>
              Tools follow
              <br />
              <em>the problem.</em>
            </h2>
          </div>
          <p>
            The useful question is how I use a technology. These are connected
            to work you can explore.
          </p>
        </div>
        <div className="capability-grid">
          {[
            {
              title: "Software & integrations",
              tools:
                "Python · Go · JavaScript · TypeScript · C/C++ · Rust · REST/SOAP · .NET/MVC",
              body: "Application development, embedded-connected systems, customer APIs and operational tooling.",
              href: "/career/intellidesign",
              link: "Software engineering experience",
            },
            {
              title: "AI tooling",
              tools:
                "Ollama · Electron · Tool calls · Streaming · Local persistence",
              body: "Local AI interfaces, explicit action review and the workflows surrounding model inference.",
              href: "/work/wixal",
              link: "Wixal case study",
            },
            {
              title: "Cybersecurity workflows",
              tools:
                "Linux · Scope controls · Approval gates · Evidence · Reporting",
              body: "Authorised investigation and tooling that makes target boundaries and operator decisions visible.",
              href: "/work/sentinel-local",
              link: "Sentinel Local case study",
            },
            {
              title: "Delivery & reliability",
              tools:
                "Git · GitHub · Code review · Testing · CI/CD · Troubleshooting",
              body: "Changes that can be reviewed and verified, plus the information needed to support a system afterwards.",
              href: "/open-source",
              link: "Merged contributions",
            },
          ].map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p className="capability-tools">{item.tools}</p>
              <p>{item.body}</p>
              <Link className="text-link" href={item.href}>
                {item.link}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="education-section">
        <div className="shell education-grid">
          <div>
            <p className="eyebrow">Education / Continuing the work</p>
            <h2>Always learning.</h2>
          </div>
          <div>
            <article>
              <span className="mono">
                Jul 2026 — May 2028 · Currently completing
              </span>
              <h3>
                Diploma of Information Technology
                <br />
                in Advanced Programming
              </h3>
              <p>TAFE NSW · Expected graduation May 2028</p>
            </article>
            <article>
              <span className="mono">Jan 2021 — Oct 2021</span>
              <h3>Certificate III</h3>
              <p>Electrical, Electronics & Communications</p>
            </article>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
