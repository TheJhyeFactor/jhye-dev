/* Uploaded clips may not include a caption file; descriptive labels are provided. */
/* eslint-disable jsx-a11y/media-has-caption */
import { embedUrl, type Block } from "@/lib/publishing";
export function Blocks({ blocks, origin = "" }: { blocks: Block[]; origin?: string }) {
  return <div className="story-content">{blocks.map((b) => {
    const url = b.assetId ? `${origin}/api/media/${b.assetId}` : "";
    if (b.type === "heading") return <h2 key={b.id}>{b.text}</h2>;
    if (b.type === "quote") return <blockquote key={b.id}>{b.text}</blockquote>;
    if (b.type === "code") return <pre key={b.id}><code>{b.text}</code></pre>;
    if (b.type === "list") return <ul key={b.id}>{b.text.split("\n").filter(Boolean).map((s, i) => <li key={i}>{s}</li>)}</ul>;
    if (b.type === "image" && url) return <figure key={b.id}><img src={url} alt={b.alt} loading="lazy" />{b.caption && <figcaption>{b.caption}</figcaption>}</figure>;
    if (b.type === "video" && url) return <figure key={b.id}><video src={url} controls preload="metadata" aria-label={b.alt || b.caption || "Uploaded video"} />{b.caption && <figcaption>{b.caption}</figcaption>}</figure>;
    if (b.type === "embed") { const src = embedUrl(b.url); return src ? <figure key={b.id}><iframe src={src} title={b.alt || b.caption || "Embedded video"} loading="lazy" allow="fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />{b.caption && <figcaption>{b.caption}</figcaption>}</figure> : <p key={b.id}>Add a YouTube or Vimeo URL to preview the embed.</p>; }
    return <p key={b.id}>{b.text}</p>;
  })}</div>;
}
