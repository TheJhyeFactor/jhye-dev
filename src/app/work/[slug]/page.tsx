import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import ContactBand from "@/components/ContactBand";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p
    ? {
        title: p.title,
        description: p.summary,
        alternates: { canonical: `/work/${p.slug}/` },
        openGraph: {
          title: `${p.title} — Jhye O’Meley`,
          description: p.summary,
          url: `/work/${p.slug}/`,
          images: [{ url: p.image, alt: p.alt }],
        },
      }
    : {};
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <>
      <article>
        <header className="shell page-intro case-intro">
          <Link className="back-link" href="/work">
            <ArrowLeft size={15} aria-hidden="true" /> Selected work
          </Link>
          <p className="eyebrow">
            {p.eyebrow} / {p.year}
          </p>
          <h1>{p.title}</h1>
          <p className="lead">{p.summary}</p>
          <dl className="project-facts">
            <div>
              <dt>My role</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Stage</dt>
              <dd>{p.status}</dd>
            </div>
            <div>
              <dt>
                {p.category === "Client delivery" ? "Scope" : "Built with"}
              </dt>
              <dd>{p.stack.join(" · ")}</dd>
            </div>
          </dl>
        </header>
        <figure className="shell case-cover">
          <Image
            src={p.image}
            alt={p.alt}
            width={1600}
            height={1000}
            priority
            sizes="100vw"
          />
          <figcaption>
            {p.category === "Client delivery"
              ? "Work delivered through SOVA."
              : "Actual application interface."}{" "}
            {p.slug === "finest-group"
              ? "Photography and video produced by SOVA."
              : ""}
          </figcaption>
        </figure>
        <div className="shell case-body">
          <aside className="case-sidebar">
            <span className="eyebrow">Inside the project</span>
            <nav aria-label="Case study contents">
              <a href="#problem">The problem</a>
              <a href="#contribution">My contribution</a>
              <a href="#decisions">Key decisions</a>
              {p.gallery.length > 0 && <a href="#walkthrough">In practice</a>}
              <a href="#verification">Evidence & limits</a>
            </nav>
            {p.links.map((link) => (
              <a
                className="text-link"
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </aside>
          <div className="case-content">
            <section id="problem">
              <p className="eyebrow">01 / Context</p>
              <h2>The problem</h2>
              <p>{p.problem}</p>
            </section>
            <section id="contribution">
              <p className="eyebrow">02 / Ownership</p>
              <h2>My contribution</h2>
              <p>{p.contribution}</p>
              <div className="system-flow" aria-label="System workflow">
                {p.flow.map((step, i) => (
                  <div key={step}>
                    <span className="mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <strong>{step}</strong>
                    {i < p.flow.length - 1 && (
                      <span aria-hidden="true" className="flow-arrow">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
            <section id="decisions">
              <p className="eyebrow">03 / Reasoning</p>
              <h2>The decisions behind it</h2>
              <div className="decision-list">
                {p.decisions.map((decision, i) => (
                  <article key={decision.title}>
                    <span className="mono">0{i + 1}</span>
                    <div>
                      <h3>{decision.title}</h3>
                      <p>{decision.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            {p.gallery.length > 0 && (
              <section id="walkthrough">
                <p className="eyebrow">04 / In practice</p>
                <h2>A closer look</h2>
                {p.gallery.map((image) => (
                  <figure className="case-gallery" key={image.src}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1600}
                      height={1000}
                      sizes="(max-width: 760px) 100vw, 70vw"
                    />
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </section>
            )}
            <section id="verification">
              <p className="eyebrow">05 / Evidence</p>
              <h2>Verification & boundaries</h2>
              <p>{p.verification}</p>
              <div className="boundary-note">
                <h3>What this does and does not establish</h3>
                <p>{p.limits}</p>
              </div>
            </section>
            <section>
              <p className="eyebrow">06 / Looking ahead</p>
              <h2>What comes next</h2>
              <p>{p.next}</p>
            </section>
          </div>
        </div>
      </article>
      <div className="shell next-project">
        <span className="eyebrow">Next case study</span>
        <Link href={`/work/${next.slug}/`}>
          {next.title}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <ContactBand />
    </>
  );
}
