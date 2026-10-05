"use client";
import Link from "next/link";
import { PostRow } from "./post-card";
import { usePublishedPosts } from "./live-posts";
import type { Post } from "@/lib/content-utils";

export function HomePosts({ initialPosts }: { initialPosts: Post[] }) {
  const { posts, loading, error } = usePublishedPosts();
  const all = [...posts, ...initialPosts].sort((a, b) => b.date.localeCompare(a.date));
  return <>
    {(["research", "notes", "projects"] as const).map((kind) => {
      const entries = all.filter((p) => p.kind === kind).slice(0, kind === "research" ? 3 : 2);
      if (!entries.length) return null;
      return <section key={kind} className="home-section" aria-labelledby={`${kind}-heading`}>
        <div className="section-heading"><h2 id={`${kind}-heading`}>{kind[0].toUpperCase() + kind.slice(1)}</h2><Link href={`/${kind}`}>View all</Link></div>
        {entries.map((post) => <PostRow key={post.slug} post={post} />)}
      </section>;
    })}
    {loading && <p className="archive-end" role="status">Checking for new posts…</p>}
    {error && <p className="archive-end">New posts are temporarily unavailable. Please refresh in a moment.</p>}
  </>;
}
