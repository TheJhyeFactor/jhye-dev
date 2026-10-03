import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import CareerTimeline from "@/components/CareerTimeline";
import ContributionList from "@/components/ContributionList";
import ContactBand from "@/components/ContactBand";
export default function Home() {
  return (
    <>
      <section className="hero shell" id="me">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Jhye O’Meley / Newcastle, Australia
          </p>
          <h1>
            Software.
            <br />
            Intelligence.
            <br />
            <em>Real-world systems.</em>
          </h1>
          <p className="hero-summary">
            I’m a software developer focused on{" "}
            <strong>AI and cybersecurity.</strong> I build practical tools,
            connect systems, and improve the details that make software
            reliable.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/work">
              Explore my work <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/career">
              Follow my career <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <a className="hero-scroll" href="#projects">
            <ArrowDown size={15} aria-hidden="true" /> A closer look at what I
            do
          </a>
        </div>
        <div className="hero-visual">
          <div className="portrait-wrap">
            <Image
              src="/images/headshot.webp"
              alt="Jhye O’Meley"
              fill
              priority
              sizes="(max-width: 760px) 90vw, 38vw"
            />
            <div className="portrait-caption">
              <span>Builder. Investigator. Teammate.</span>
              <span>01 / About me</span>
            </div>
          </div>
          <div className="hero-note">
            <span className="note-mark">↳</span>
            <div>
              <span className="eyebrow">Currently</span>
              <p>
                AI & cybersecurity internship
                <br />
                at PowerData Group Consulting
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="focus-strip">
        <div className="shell">
          <span>
            <Braces size={18} aria-hidden="true" /> Software engineering
          </span>
          <span>
            <Cpu size={18} aria-hidden="true" /> Local AI & automation
          </span>
          <span>
            <ShieldCheck size={18} aria-hidden="true" /> Cybersecurity tooling
          </span>
          <span className="strip-note">
            From the interface to the system behind it.
          </span>
        </div>
      </div>
      <section className="section shell" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>
              Fewer projects.
              <br />
              <em>More of the story.</em>
            </h2>
          </div>
          <div>
            <p>
              A focused look at the tools I build, the problems behind them, and
              the decisions that shape the result.
            </p>
            <Link className="text-link" href="/work">
              All selected work <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="work-grid">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="client-work-note">
          <span>Also delivered through SOVA</span>
          <Link href="/work/finest-group">
            The Finest Group <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <Link href="/work/hunter-valley">
            Hunter Valley Prestige Wine Tours{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="source-section" id="opensource">
        <div className="shell section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Open source</p>
              <h2>
                Small changes.
                <br />
                <em>Real contributions.</em>
              </h2>
            </div>
            <div>
              <p>
                Submitted and merged work in application security, AI tooling,
                reliability, performance and cross-platform engineering.
              </p>
              <Link className="text-link" href="/open-source">
                The problems, fixes & results{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ContributionList />
        </div>
      </section>
      <section className="section shell" id="career">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / The path so far</p>
            <h2>
              A career built
              <br />
              <em>across systems.</em>
            </h2>
          </div>
          <div>
            <p>
              From technical delivery and API integrations to software
              engineering, independent work, AI and cybersecurity.
            </p>
            <Link className="text-link" href="/career">
              Explore every chapter{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <CareerTimeline compact />
      </section>
      <section className="approach-section" id="skills">
        <div className="shell section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / How I work</p>
              <h2>
                Understand it.
                <br />
                <em>Build it. Follow through.</em>
              </h2>
            </div>
            <p>
              Technical work has to make sense to the next person using,
              reviewing or supporting it.
            </p>
          </div>
          <div className="approach-grid">
            {[
              {
                n: "01",
                title: "Start with the system",
                body: "Follow the workflow and data path. Understand the constraints before deciding what needs to change.",
              },
              {
                n: "02",
                title: "Make decisions visible",
                body: "Use reviewable changes, clear permission boundaries and explanations that connect the implementation to the problem.",
              },
              {
                n: "03",
                title: "Stay with the details",
                body: "Think through failures, configuration, testing and handover. Delivery includes what happens after the first successful run.",
              },
            ].map((item) => (
              <article key={item.n}>
                <span className="mono">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
