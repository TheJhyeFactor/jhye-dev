"use client";

import { Search, X } from "lucide-react";
import type { BrowseArea } from "@/data/browse";

type Area = BrowseArea & { count: number };
type SelectFilter = {
  key: string;
  label: string;
  allLabel: string;
  value: string;
  options: { value: string; label: string }[];
};

export default function BrowseControls({
  id, areas, area, total, allLabel, allDescription, query, searchHint, filters, active, onArea, onQuery, onFilter, onReset,
}: {
  id: string;
  areas: Area[];
  area: string;
  total: number;
  allLabel: string;
  allDescription: string;
  query: string;
  searchHint: string;
  filters: SelectFilter[];
  active: boolean;
  onArea: (value: string) => void;
  onQuery: (value: string) => void;
  onFilter: (key: string, value: string) => void;
  onReset: () => void;
}) {
  return (
    <div className="browse-controls">
      <fieldset className="browse-areas">
        <legend className="eyebrow">Browse by area</legend>
        <div className="browse-area-grid">
          {[{ value: "", label: allLabel, description: allDescription, count: total }, ...areas].map((item) => (
            <button
              type="button"
              key={item.value}
              className="browse-area"
              aria-pressed={area === item.value}
              aria-controls={`${id}-results`}
              onClick={() => onArea(item.value)}
            >
              <span className="browse-area-top">
                <span>{item.label}</span>
                <span className="browse-count">{item.count}</span>
              </span>
              <span className="browse-area-description">{item.description}</span>
            </button>
          ))}
        </div>
      </fieldset>
      <div className="browse-toolbar">
        <div className="browse-search-field">
          <label htmlFor={`${id}-search`}>Search</label>
          <div className="browse-search">
            <Search size={17} aria-hidden="true" />
            <input
              id={`${id}-search`}
              type="search"
              value={query}
              placeholder={searchHint}
              onChange={(event) => onQuery(event.target.value)}
              aria-controls={`${id}-results`}
            />
          </div>
        </div>
        {filters.map((filter) => (
          <div className="browse-select" key={filter.key}>
            <label htmlFor={`${id}-${filter.key}`}>{filter.label}</label>
            <select id={`${id}-${filter.key}`} value={filter.value} onChange={(event) => onFilter(filter.key, event.target.value)} aria-controls={`${id}-results`}>
              <option value="">{filter.allLabel}</option>
              {filter.options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
          </div>
        ))}
        <button className="browse-reset" type="button" disabled={!active} onClick={onReset}>
          <X size={15} aria-hidden="true" /> Clear filters
        </button>
      </div>
    </div>
  );
}

export function BrowseEmpty({ onReset }: { onReset: () => void }) {
  return (
    <div className="browse-empty">
      <Search size={25} aria-hidden="true" />
      <h3>No matches for these filters.</h3>
      <p>Try a broader search or clear the filters to see everything.</p>
      <button className="button" type="button" onClick={onReset}>Clear all filters</button>
    </div>
  );
}
