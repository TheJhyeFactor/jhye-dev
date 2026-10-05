"use client";

import { projects } from "@/data/portfolio";
import { workAreas, workStages } from "@/data/browse";
import { matchesSearch } from "@/lib/browse";
import BrowseControls, { BrowseEmpty } from "./BrowseControls";
import ProjectCard from "./ProjectCard";
import useBrowseFilters from "./useBrowseFilters";

export default function WorkBrowser() {
  const filters = useBrowseFilters(["area", "stage", "q"]);
  const area = workAreas.find((item) => item.value === filters.get("area"));
  const stage = workStages.find((item) => item.value === filters.get("stage"));
  const query = filters.get("q");
  const active = Boolean(area || stage || query);
  const visible = projects.filter((project) =>
    (!area || project.focus.includes(area.value)) &&
    (!stage || project.stage === stage.value) &&
    matchesSearch(query, [project.title, project.eyebrow, project.summary, project.takeaway, project.role, project.status, project.year, ...project.stack, ...workAreas.filter((item) => project.focus.includes(item.value)).map((item) => item.label)])
  );

  return (
    <section className="shell browse-index" aria-label="Browse project case studies">
      <BrowseControls
        id="work"
        areas={workAreas.map((item) => ({ ...item, count: projects.filter((project) => project.focus.includes(item.value)).length }))}
        area={area?.value ?? ""}
        total={projects.length}
        allLabel="All work"
        allDescription="The full collection of tools, prototypes and client projects."
        query={query}
        searchHint="Project, technology or keyword"
        filters={[{ key: "stage", label: "Project stage", allLabel: "All stages", value: stage?.value ?? "", options: workStages }]}
        active={active}
        onArea={(value) => filters.update({ area: value })}
        onQuery={(value) => filters.update({ q: value })}
        onFilter={(key, value) => filters.update({ [key]: value })}
        onReset={filters.reset}
      />
      <div className="browse-results-heading">
        <div>
          <p className="eyebrow">Project case studies</p>
          <h2>{area?.label ?? "All selected work"}</h2>
        </div>
        <p role="status" aria-live="polite" aria-atomic="true">Showing {visible.length} of {projects.length} projects</p>
      </div>
      <div id="work-results">
        {visible.length ? (
          <div className="work-grid">
            {visible.map((project) => <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} showMetadata />)}
          </div>
        ) : <BrowseEmpty onReset={filters.reset} />}
      </div>
      <p className="browse-footnote">Projects can span more than one area. Each case study includes my role, technical decisions and the current limits of the work.</p>
    </section>
  );
}
