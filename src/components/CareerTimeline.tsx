import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { career } from "@/data/portfolio";
export default function CareerTimeline({
  compact = false,
}: {
  compact?: boolean;
}) {
  const roles = compact
    ? career.filter((role) => role.slug !== "independent-support")
    : career;
  return (
    <ol className="career-timeline">
      {roles.map((role, index) => (
        <li key={role.slug} className={role.end === "Present" ? "current" : ""}>
          <Link href={`/career/${role.slug}/`} className="career-row">
            <div className="career-date">
              <span>
                {role.start} — {role.end}
              </span>
              <small>
                {role.type}
                {role.end === "Present" ? " · Current" : ""}
              </small>
            </div>
            <div className="career-node">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="career-copy">
              <p className="eyebrow">{role.company}</p>
              <h3>{role.title}</h3>
              <p>{role.summary}</p>
              <span className="career-theme">{role.theme}</span>
            </div>
            <ArrowUpRight className="career-arrow" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ol>
  );
}
