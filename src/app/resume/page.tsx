import type { Metadata } from "next";
import Link from "next/link";
import { career, profile } from "@/data/portfolio";
export const metadata: Metadata = {
  title: "Résumé",
  description: "Jhye O’Meley’s experience, capabilities and education.",
  alternates: { canonical: "/resume/" },
};
export default function Resume() {
  return (
    <article className="shell resume-page">
      <header>
        <p className="eyebrow">Résumé / Updated October 2026</p>
        <h1>Jhye O’Meley</h1>
        <p className="resume-role">Software development · AI · Cybersecurity</p>
        <div className="resume-contact">
          <span>Newcastle, Australia</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github}>GitHub ↗</a>
          <a href={profile.linkedin}>LinkedIn ↗</a>
        </div>
        <p>
          I bring experience in application development, API integrations,
          connected systems and technical delivery, with a current focus on AI
          and cybersecurity.
        </p>
      </header>
      <section>
        <h2>Experience</h2>
        {career.map((role) => (
          <section className="resume-job" key={role.slug}>
            <div>
              <h3>{role.title}</h3>
              <span>
                {role.start} — {role.end}
              </span>
            </div>
            <p className="resume-company">
              {role.company} · {role.type} · {role.location}
            </p>
            <ul>
              {role.responsibilities.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              className="text-link resume-more"
              href={`/career/${role.slug}/`}
            >
              Explore this role ↗
            </Link>
          </section>
        ))}
      </section>
      <section>
        <h2>Selected engineering work</h2>
        <p>
          <Link href="/work/garak-scan-planner">garak scan planner</Link> · Local Python AI security prototype covering 30 audited static probes and three local transformations. Recorded validation: 61 feature tests within 1,730 relevant passing tests and four CLI scenarios without configured-target requests. Public proposal; no upstream PR or release.
        </p>
        <p>
          <Link href="/open-source">ZAP application security</Link> · Submitted Java 403-bypass scanner fix, with 33 focused tests, 346 add-on tests and six installed comparisons passing locally. Separately documented a CSP-filter investigation across ten controlled runs. Awaiting upstream review.
        </p>
        <p>
          <Link href="/work/wixal">Wixal</Link> · Local AI desktop workspace
          with reviewed tool actions and persistent project context.
        </p>
        <p>
          <Link href="/work/sentinel-local">Sentinel Local</Link> · Local
          cybersecurity operations console with scope checks, approvals and
          evidence workflows.
        </p>
        <p>
          <Link href="/open-source">Open-source contributions</Link> ·
          Ollama, Charmbracelet Crush, W&B RAI Toolkit and OpenTelemetry Go.
        </p>
      </section>
      <section>
        <h2>Education</h2>
        <h3>Diploma of Information Technology in Advanced Programming</h3>
        <p>TAFE NSW · Jul 2026 — May 2028 · Currently completing</p>
        <h3>Certificate III</h3>
        <p>Electrical, Electronics & Communications · Jan 2021 — Oct 2021</p>
      </section>
      <p className="fine-print resume-more">
        A readable web résumé. Your browser’s Print command can save a PDF.
        Career-transition drafts are excluded.
      </p>
    </article>
  );
}
