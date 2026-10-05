"use client";

import { contributions } from "@/data/portfolio";
import { contributionAreas, contributionStatuses } from "@/data/browse";
import { matchesSearch } from "@/lib/browse";
import BrowseControls, { BrowseEmpty } from "./BrowseControls";
import ContributionList from "./ContributionList";
import useBrowseFilters from "./useBrowseFilters";

const languages = [...new Set(contributions.flatMap((item) => item.languages))].sort();
const statuses = contributionStatuses.filter((status) => contributions.some((item) => item.status === status.value));

export default function ContributionBrowser() {
  const filters = useBrowseFilters(["area", "status", "language", "q"]);
  const area = contributionAreas.find((item) => item.value === filters.get("area"));
  const status = statuses.find((item) => item.value === filters.get("status"));
  const language = languages.find((item) => item === filters.get("language"));
  const query = filters.get("q");
  const active = Boolean(area || status || language || query);
  const visible = contributions.filter((item) =>
    (!area || item.focus.includes(area.value)) &&
    (!status || item.status === status.value) &&
    (!language || item.languages.includes(language)) &&
    matchesSearch(query, [item.project, item.title, item.category, item.language, item.number, item.status, item.problem, item.change, item.result, ...contributionAreas.filter((entry) => item.focus.includes(entry.value)).map((entry) => entry.label)])
  );

  return (
    <section className="shell browse-index source-index" aria-label="Browse open-source contributions">
      <BrowseControls
        id="source"
        areas={contributionAreas.map((item) => ({ ...item, count: contributions.filter((entry) => entry.focus.includes(item.value)).length }))}
        area={area?.value ?? ""}
        total={contributions.length}
        allLabel="All contributions"
        allDescription="Upstream fixes, test coverage and documented investigations."
        query={query}
        searchHint="Repository, PR or keyword"
        filters={[
          { key: "status", label: "Contribution status", allLabel: "All statuses", value: status?.value ?? "", options: statuses.map((item) => ({ value: item.value, label: item.value })) },
          { key: "language", label: "Language", allLabel: "All languages", value: language ?? "", options: languages.map((value) => ({ value, label: value })) },
        ]}
        active={active}
        onArea={(value) => filters.update({ area: value })}
        onQuery={(value) => filters.update({ q: value })}
        onFilter={(key, value) => filters.update({ [key]: value })}
        onReset={filters.reset}
      />
      <div className="browse-results-heading">
        <div>
          <p className="eyebrow">Code & investigation</p>
          <h2>{area?.label ?? "All contributions"}</h2>
        </div>
        <p role="status" aria-live="polite" aria-atomic="true">Showing {visible.length} of {contributions.length} contributions</p>
      </div>
      <div id="source-results">
        {visible.length ? statuses.map((group) => {
          const items = visible.filter((item) => item.status === group.value);
          return items.length ? (
            <section className="contribution-group" key={group.value} aria-label={group.label}>
              <div className="contribution-group-heading">
                <h3>{group.label} <span className="browse-count">{items.length}</span></h3>
                <p>{group.description}</p>
              </div>
              <ContributionList full items={items} />
            </section>
          ) : null;
        }) : <BrowseEmpty onReset={filters.reset} />}
      </div>
      <p className="source-status">
        Contribution status checked on 4 October 2026. Released labels mean
        the merged commit is included in the linked stable release tag; they
        do not identify the first release containing the change. Benchmarks
        describe the stated workload, rather than whole-product performance.
        Contributions can span more than one area.
      </p>
    </section>
  );
}
