"use client";
/* Uploaded clips may not have a caption file; use descriptive labels and captions. */
/* eslint-disable jsx-a11y/media-has-caption */
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { publisherOrigin, safeEmbed, type LiveStory } from "@/lib/publisher";
import { formatDate } from "@/lib/content-utils";
import { absoluteUrl } from "@/lib/site";

export function LiveStoryPage() {
  const params = useSearchParams();
  const slug = params.get("slug") || "";
  return <Story key={slug} slug={slug} />;
}
function Story({ slug }: { slug: string }) {
  const [post, setPost] = useState<LiveStory | null>(null);
  const [state, setState] = useState("loading");
  useEffect(() => {
    const controller = new AbortController();
    fetch(`${publisherOrigin}/api/posts?slug=${encodeURIComponent(slug || "missing")}`, { signal: controller.signal, credentials: "omit" })
      .then(async (r) => { if (!r.ok) throw new Error(r.status === 404 ? "missing" : "error"); return await r.json() as { post: LiveStory }; })
      .then(({ post }) => { setPost(post); setState("ready"); document.title = `${post.title} | Privileged`;
        document.querySelector('link[rel="canonical"]')?.setAttribute("href", absoluteUrl(`/story/?slug=${encodeURIComponent(post.slug)}`));
        document.querySelector('meta[name="description"]')?.setAttribute("content", post.description); })
      .catch((e) => { if (e.name !== "AbortError") setState(e.message); });
    return () => controller.abort();
  }, [slug]);
  if (!post) return <div className="container page-content"><h1>{state === "loading" ? "Loading story…" : state === "missing" ? "Story unavailable" : "Unable to load this story"}</h1><p>{state === "missing" ? "This story may be a draft or may have been removed." : "Please try again in a moment."}</p><Link href="/">Back to the notebook</Link></div>;
  return <div className="container article-page">
    <Link className="back-link" href={`/${post.kind}`}>← Back to {post.kind}</Link>
    <header className="article-header"><div className="post-meta"><span>{post.category}</span><span>·</span><time dateTime={post.date}>{formatDate(post.date)}</time><span>·</span><span>{post.readingTime} min read</span></div><h1>{post.title}</h1><p className="article-description">{post.description}</p><div className="article-author"><span>Written by <Link href="/about">Jhye</Link></span><div className="tags">{post.tags.map((t) => <Link key={t} href={`/${post.kind}?q=${encodeURIComponent(t)}`}>#{t}</Link>)}</div></div></header>
    <article className="prose live-prose">{post.blocks?.map((b) => {
      const url = b.assetId && /^[0-9a-f-]{36}$/.test(b.assetId) ? `${publisherOrigin}/api/media/${b.assetId}` : "";
      if (b.type === "heading") return <h2 key={b.id}>{b.text}</h2>;
      if (b.type === "quote") return <blockquote key={b.id}>{b.text}</blockquote>;
      if (b.type === "list") return <ul key={b.id}>{b.text.split("\n").filter(Boolean).map((s, i) => <li key={i}>{s}</li>)}</ul>;
      if (b.type === "code") return <pre key={b.id}><code>{b.text}</code></pre>;
      if (b.type === "image" && url) return <figure key={b.id}><img src={url} alt={b.alt} loading="lazy" />{b.caption && <figcaption>{b.caption}</figcaption>}</figure>;
      if (b.type === "video" && url) return <figure key={b.id}><video src={url} controls preload="metadata" aria-label={b.alt || b.caption || "Uploaded video"} />{b.caption && <figcaption>{b.caption}</figcaption>}</figure>;
      if (b.type === "embed") { const src = safeEmbed(b.url); return src ? <figure key={b.id}><iframe src={src} title={b.alt || b.caption || "Embedded video"} loading="lazy" allow="fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />{b.caption && <figcaption>{b.caption}</figcaption>}</figure> : null; }
      return <p key={b.id}>{b.text}</p>;
    })}<div className="article-signoff"><span>— Jhye</span></div></article>
  </div>;
}
