import { ArrowUpRight, GitMerge, GitPullRequest } from "lucide-react";
import { contributions } from "@/data/portfolio";
export default function ContributionList({ full = false }: { full?: boolean }) {
  return (
    <div className={full ? "contributions full" : "contributions"}>
      {contributions.map((item) => (
        <article className="contribution" key={item.slug}>
          <div className="contribution-top">
            <span className="merge-badge">
              {item.status === "Merged" ? (
                <GitMerge size={13} aria-hidden="true" />
              ) : (
                <GitPullRequest size={13} aria-hidden="true" />
              )} {item.status}
            </span>
            <span className="mono">
              {item.language} / {item.number}
            </span>
          </div>
          <p className="eyebrow">{item.project}</p>
          <h3>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.title}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </h3>
          {full && (
            <>
              <div className="contribution-section">
                <h4>The problem</h4>
                <p>{item.problem}</p>
              </div>
              <div className="contribution-section">
                <h4>The change</h4>
                <p>{item.change}</p>
              </div>
            </>
          )}
          <p className="contribution-result">{item.result}</p>
          {full && item.validation && (
            <div className="contribution-section">
              <h4>Verification & review</h4>
              <p>{item.validation}</p>
            </div>
          )}
          {full && <p className="fine-print">{item.note}</p>}
          {full && item.issueHref && (
            <a className="text-link" href={item.issueHref} target="_blank" rel="noreferrer">
              Original issue <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          <a
            className="text-link"
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            Inspect pull request <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </article>
      ))}
    </div>
  );
}
