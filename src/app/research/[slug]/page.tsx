import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getResearchStory, researchStories } from "@/data/research";
import ContactBand from "@/components/ContactBand";

export function generateStaticParams() {
  return researchStories.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getResearchStory(slug);
  return story
    ? {
        title: story.title,
        description: story.description,
        alternates: { canonical: `/research/${story.slug}/` },
      }
    : {};
}

export default async function ResearchStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getResearchStory(slug);
  if (!story) return null;

  return (
    <>
      <article>
        <header className="shell page-intro case-intro">
          <Link className="back-link" href="/research/">
            <ArrowLeft size={15} aria-hidden="true" /> Research & notes
          </Link>
          <p className="eyebrow">
            {story.category} / {story.date}
          </p>
          <h1>{story.title}</h1>
          <p className="lead">{story.description}</p>
          <div className="research-facts">
            <span>{story.tags.join(" · ")}</span>
            <a className="text-link" href={story.sourceHref} target="_blank" rel="noreferrer">
              {story.sourceLabel} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </header>
        <div className="shell case-body research-body">
          <aside className="case-sidebar">
            <span className="eyebrow">Inside the investigation</span>
            <nav aria-label="Research story contents">
              <a href="#symptom">The symptom</a>
              <a href="#first-byte">Following the first byte</a>
              <a href="#evidence">Evidence and scope</a>
            </nav>
          </aside>
          <div className="case-content">
            <section id="symptom">
              <p className="eyebrow">01 / The symptom</p>
              <h2>A connection that never starts</h2>
              <p>
                An Ollama model download could connect successfully and still
                appear to hang. The request had reached the server, but the
                first response body byte never arrived, so the client waited
                instead of retrying.
              </p>
              <p>
                This was a reliability bug, not a security vulnerability. It
                was still a useful failure mode to investigate because the
                behaviour sat at the boundary between an HTTP connection, a
                ranged transfer and the timeout monitor meant to recover it.
              </p>
            </section>
            <section id="first-byte">
              <p className="eyebrow">02 / The boundary</p>
              <h2>Following the first byte</h2>
              <p>
                The download path updated its activity timestamp from
                <code>blobDownloadPart.Write</code>. That meant the inactivity
                monitor only had a meaningful timestamp after data had already
                been written. When a range request connected, returned headers
                and then delivered no body bytes, <code>lastUpdated</code> stayed
                at its zero value and the monitor skipped the attempt.
              </p>
              <p>
                I changed the monitor to record the start of each attempt,
                signal transfer completion explicitly and keep the existing
                30-second threshold and retry behaviour. The regression
                coverage exercises both the headers-without-a-body case and
                the normal completion path.
              </p>
            </section>
            <section id="evidence">
              <p className="eyebrow">03 / Evidence and scope</p>
              <h2>What the record supports</h2>
              <p>
                The change was submitted in the linked Ollama pull request,
                which merged upstream on 21 July 2026. The recorded checks
                included the server tests, repeated focused download tests, a
                race run, module tidiness and a whitespace check.
              </p>
              <p>
                On an Apple M4 test machine, the recorded completion-path
                benchmark moved from 1.001113 seconds per operation to 689.5
                microseconds per operation, with no meaningful allocation
                change. The precise status is merged upstream. This note does
                not claim a release binary or a security advisory.
              </p>
              <a className="text-link" href={story.sourceHref} target="_blank" rel="noreferrer">
                Read the upstream pull request <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </section>
          </div>
        </div>
      </article>
      <ContactBand />
    </>
  );
}
