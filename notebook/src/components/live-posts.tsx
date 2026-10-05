"use client";
import { useEffect, useState } from "react";
import { publisherOrigin, type LiveStory } from "@/lib/publisher";
import type { Post } from "@/lib/content-utils";

export function usePublishedPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`${publisherOrigin}/api/posts`, { signal: controller.signal, credentials: "omit" })
      .then(async (response) => { if (!response.ok) throw new Error("Unavailable"); return await response.json() as { posts: LiveStory[] }; })
      .then((data) => setPosts(data.posts.map((p) => ({ ...p, live: true, demo: false, featured: false, art: "api", content: "", headings: [] }))))
      .catch((e) => { if (e.name !== "AbortError") setError(true); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);
  return { posts, loading, error };
}
