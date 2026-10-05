"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, ArrowRight } from "@/components/icons";
import { PostRow } from "@/components/post-card";
import { usePublishedPosts } from "./live-posts";
import type { Post } from "@/lib/content-utils";
type Summary = Omit<Post, "content" | "headings">;
export function Archive({ posts, kind }: { posts: Summary[]; kind: Post["kind"] }) {
  const params = useSearchParams();
  const live = usePublishedPosts();
  const all = [...live.posts.filter((p) => p.kind === kind), ...posts].sort((a, b) => b.date.localeCompare(a.date));
  const initialQuery = params.get("q") || "";
  return (
    <><ArchiveContent
      key={initialQuery}
      posts={all}
      initialQuery={initialQuery}
    />{live.loading && <p className="archive-end" role="status">Checking for new posts…</p>}{live.error && <p className="archive-end">New posts are temporarily unavailable. Please refresh in a moment.</p>}</>
  );
}
function ArchiveContent({
  posts,
  initialQuery,
}: {
  posts: Summary[];
  initialQuery: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const filtered = posts.filter(
    (post) =>
      (category === "All" || post.category === category) &&
      `${post.title} ${post.category} ${post.description} ${post.tags.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <div className="archive-controls">
        <div
          className="filter-chips"
          role="group"
          aria-label="Filter by category"
        >
          {categories.map((name) => (
            <button
              key={name}
              className={category === name ? "active" : ""}
              aria-pressed={category === name}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={17} />
          <input
            placeholder="Search posts"
            aria-label="Search posts"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button aria-label="Clear search" onClick={() => setQuery("")}>
              <X size={15} />
            </button>
          )}
        </label>
      </div>
      <div className="archive-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
        {category !== "All" && ` / ${category}`}
      </div>
      <div className="archive-list">
        {filtered.map((post) => (
          <PostRow
            key={post.slug}
            post={{ ...post, content: "", headings: [] }}
          />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <Search size={28} />
          <h2>No entries found.</h2>
          <p>Try a different topic or a broader search.</p>
          <button
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Reset filters <ArrowRight size={15} />
          </button>
        </div>
      )}
    </>
  );
}
