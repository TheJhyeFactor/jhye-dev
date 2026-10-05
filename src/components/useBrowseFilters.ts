"use client";

import { useSyncExternalStore } from "react";

const filterEvent = "portfolio-filters-change";
function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(filterEvent, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(filterEvent, callback);
  };
}

// The server renders the complete index. The browser restores shareable filters
// after hydration, including when returning from a case study with Back.
export default function useBrowseFilters(keys: string[]) {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const params = new URLSearchParams(search);
  const update = (changes: Record<string, string>) => {
    const url = new URL(window.location.href);
    for (const [key, value] of Object.entries(changes)) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new Event(filterEvent));
  };
  return {
    get: (key: string) => params.get(key) ?? "",
    update,
    reset: () => update(Object.fromEntries(keys.map((key) => [key, ""]))),
  };
}
