import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { career } from "@/data/portfolio";
import ContactBand from "@/components/ContactBand";
export function generateStaticParams() {
  return career.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = career.find((r) => r.slug === slug);
  return r
    ? {
        title: `${r.company} · ${r.title}`,
        description: r.summary,
        alternates: { canonical: `/career/${slug}/` },
      }
    : {};
}
export default async function Role({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = career.find((r) => r.slug === slug);
  if (!role) notFound();
  const index = career.indexOf(role);
  const adjacent = career[(index + 1) % career.length];
  return (
    <>
      <article>
        <header className="shell page-intro role-intro">
          <Link className="back-link" href="/career">
            <ArrowLeft size={15} aria-hidden="true" /> Career timeline
          </Link>
          <p className="eyebrow">
            {role.theme} / {role.type}
          </p>
          <h1>{role.company}</h1>
          <p className="role-title">{role.title}</p>
          <p className="lead">{role.summary}</p>
          <dl className="project-facts">
            <div>
              <dt>Started</dt>
              <dd>{role.start}</dd>
            </div>
            <div>
              <dt>{role.end === "Present" ? "Status" : "Finished"}</dt>
              <dd>{role.end === "Present" ? "Current role" : role.end}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{role.location}</dd>
            </div>
          </dl>
        </header>
        <div className="shell case-body">
          <aside className="case-sidebar">
            <p className="eyebrow">This chapter</p>
            <nav aria-label="Role page contents">
              <a href="#role">The role</a>
              <a href="#work">Work & projects</a>
              {role.photos.length > 0 && <a href="#photos">Photographs</a>}
              <a href="#learning">What I take forward</a>
              {role.transition && <a href="#transition">Career transition</a>}
            </nav>
            <div className="tag-list">
              {role.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </aside>
          <div className="case-content">
            <section id="role">
              <p className="eyebrow">01 / The role</p>
              <h2>What I worked on</h2>
              <p>{role.intro}</p>
              <ul className="responsibility-list">
                {role.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section id="work">
              <p className="eyebrow">02 / Work & projects</p>
              <h2>Behind the job title</h2>
              <p className="fine-print">
                Work areas described at a level suitable for a public portfolio.
              </p>
              <div className="role-work-grid">
                {role.areas.map((area, i) => (
                  <article key={area.title}>
                    <span className="mono">0{i + 1}</span>
                    <h3>{area.title}</h3>
                    <p>{area.body}</p>
                  </article>
                ))}
              </div>
            </section>
            {role.photos.length > 0 && (
              <section id="photos">
                <p className="eyebrow">03 / Photographs</p>
                <h2>From this chapter</h2>
                {role.photos.map((photo) => (
                  <figure className="career-photo" key={photo.src}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={1100}
                      height={1467}
                      sizes="(max-width: 760px) 100vw, 60vw"
                    />
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </section>
            )}
            <section id="learning">
              <p className="eyebrow">04 / Perspective</p>
              <h2>What I take forward</h2>
              <p>{role.reflection}</p>
            </section>
            {role.transition && (
              <section id="transition" className="transition-draft">
                <span className="draft-label">
                  Draft reflection · To be refined
                </span>
                <h2>Why I moved on</h2>
                <p>{role.transition}</p>
                <small>
                  Proposed career-progression wording, awaiting my final review.
                </small>
              </section>
            )}
          </div>
        </div>
      </article>
      <div className="shell next-project">
        <span className="eyebrow">Another chapter</span>
        <Link href={`/career/${adjacent.slug}/`}>
          {adjacent.company}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <ContactBand />
    </>
  );
}
