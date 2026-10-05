import { ArrowUpRight, FileSearch, GitMerge, GitPullRequest } from "lucide-react";
import { contributions, type Contribution } from "@/data/portfolio";
export default function ContributionList({
  full = false,
  items = contributions,
}: {
  full?: boolean;
  items?: Contribution[];
}) {
  const Heading = full ? "h4" : "h3";
  return (
    <div className={full ? "contributions full" : "contributions"}>
      {items.map((item) => (
        <article className="contribution" key={item.slug} id={full ? item.slug : undefined}>
          <div className="contribution-top">
            <span className={`merge-badge ${item.status === "Submitted for review" ? "badge-submitted" : item.status === "Investigation documented" ? "badge-investigation" : "badge-accepted"}`}>
              {item.status === "Merged" || item.status === "Released" ? (
                <GitMerge size={13} aria-hidden="true" />
              ) : item.status === "Investigation documented" ? (
                <FileSearch size={13} aria-hidden="true" />
              ) : (
                <GitPullRequest size={13} aria-hidden="true" />
              )} {item.status}
            </span>
            <span className="mono">
              {item.language} / {item.number}
            </span>
          </div>
          <p className="eyebrow">
            {item.project}{full && <span>/ {item.category}</span>}
          </p>
          <Heading className={full ? "contribution-title" : undefined}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.title}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </Heading>
          {full && (
            <div className="contribution-story">
              <div className="contribution-section">
                <h5>The problem</h5>
                <p>{item.problem}</p>
              </div>
              <div className="contribution-section">
                <h5>The change</h5>
                <p>{item.change}</p>
              </div>
              <div className="contribution-section contribution-outcome">
                <h5>The result</h5>
                <p>{item.result}</p>
              </div>
            </div>
          )}
          {!full && <p className="contribution-result">{item.result}</p>}
          <div className="contribution-links">
            <a
              className="text-link"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.status === "Investigation documented" ? "Read investigation" : "Inspect pull request"}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            {item.release && (
              <a className="text-link" href={item.release.href} target="_blank" rel="noreferrer">
                {item.release.label} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
            {full && item.issueHref && (
              <a className="text-link" href={item.issueHref} target="_blank" rel="noreferrer">
                Original issue <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
          </div>
          {full && (
            <details className="contribution-details">
              <summary>Verification & context</summary>
              {item.validation && <p>{item.validation}</p>}
              <p className="fine-print">{item.note}</p>
            </details>
          )}
        </article>
      ))}
    </div>
  );
}
