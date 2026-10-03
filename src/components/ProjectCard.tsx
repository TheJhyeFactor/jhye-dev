import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Link
      className={`work-card work-card-${project.slug}`}
      href={`/work/${project.slug}/`}
    >
      <div className="work-image">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <span className="image-label">{project.status}</span>
      </div>
      <div className="work-copy">
        <p className="eyebrow">
          <span>{String(index + 1).padStart(2, "0")}</span> / {project.eyebrow}
        </p>
        <div className="card-title">
          <h3>{project.title}</h3>
          <ArrowUpRight aria-hidden="true" />
        </div>
        <p>{project.summary}</p>
        <div className="card-takeaway">{project.takeaway}</div>
        <span className="text-link">
          Read the case study <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
