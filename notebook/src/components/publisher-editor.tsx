"use client";
import { useEffect, useState } from "react";
import { upload as uploadBlob } from "@vercel/blob/client";
import { newBlock, type Block, type PostInput, type PublishedPost } from "@/lib/publishing";
import { Blocks } from "./blocks";
type Media = { id: string; name: string; mime: string; size: number; url: string };
type EditingPost = PostInput & { id?: string };
const emptyPost = (): EditingPost => ({ title: "", slug: "", description: "", kind: "research", category: "Research", tags: [], date: new Intl.DateTimeFormat("en-CA", { timeZone: "Australia/Sydney", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()), status: "draft", blocks: [], version: 0 });

async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, { credentials: "same-origin", ...init });
  const result = await response.json() as T & { error?: string };
  if (!response.ok) throw new Error(result.error || "The request failed.");
  return result;
}

export function Editor({ email }: { email: string }) {
  const [posts, setPosts] = useState<PublishedPost[]>([]);
  const [media, setMedia] = useState<Media[]>([]);
  const [post, setPost] = useState<EditingPost>(emptyPost);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [failure, setFailure] = useState("");
  const [preview, setPreview] = useState(false);
  const [library, setLibrary] = useState(false);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    const [p, m] = await Promise.all([api<{ posts: PublishedPost[] }>("/privileged/api/admin/posts"), api<{ media: Media[] }>("/privileged/api/admin/media")]);
    setPosts(p.posts); setMedia(m.media);
  }
  useEffect(() => {
    let active = true;
    Promise.all([api<{ posts: PublishedPost[] }>("/privileged/api/admin/posts"), api<{ media: Media[] }>("/privileged/api/admin/media")])
      .then(([p, m]) => { if (active) { setPosts(p.posts); setMedia(m.media); } })
      .catch((e) => { if (active) setFailure(e.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);
  useEffect(() => {
    const guard = (e: BeforeUnloadEvent) => { if (dirty) { e.preventDefault(); e.returnValue = ""; } };
    window.addEventListener("beforeunload", guard);
    return () => window.removeEventListener("beforeunload", guard);
  }, [dirty]);
  function update(patch: Partial<EditingPost>) { setPost((p) => ({ ...p, ...patch })); setDirty(true); setMessage(""); }
  function choose(next: EditingPost) {
    if (dirty && !confirm("Discard unsaved changes to this post?")) return;
    setPost(next); setDirty(false); setFailure(""); setMessage(""); setPreview(false);
  }
  function updateBlock(id: string, patch: Partial<Block>) { update({ blocks: post.blocks.map((b) => b.id === id ? { ...b, ...patch } : b) }); }
  function move(index: number, direction: number) {
    const blocks = [...post.blocks]; const target = index + direction;
    if (target < 0 || target >= blocks.length) return;
    [blocks[index], blocks[target]] = [blocks[target], blocks[index]]; update({ blocks });
  }
  function insertMedia(m: Media) {
    update({ blocks: [...post.blocks, { ...newBlock(m.mime.startsWith("image/") ? "image" : "video"), assetId: m.id, url: m.url }] });
    setLibrary(false);
  }
  async function upload(file: File) {
    setBusy(true); setFailure(""); setMessage("Uploading…");
    try { const types: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif", "video/mp4": "mp4", "video/webm": "webm" };
      const extension = types[file.type];
      const limit = (file.type.startsWith("image/") ? 10 : 50) * 1024 * 1024;
      if (!extension || !file.size || file.size > limit) throw new Error("Use an image up to 10 MB or an MP4/WebM video up to 50 MB.");
      const id = crypto.randomUUID();
      await uploadBlob(`media/${id}.${extension}`, file, { access: "private", multipart: true, handleUploadUrl: "/privileged/api/upload", clientPayload: JSON.stringify({ name: file.name, mime: file.type }) });
      const result = await api<{ media: Media }>("/privileged/api/admin/media", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
      setMedia((items) => [result.media, ...items]); insertMedia(result.media); setMessage("Upload complete. Add an image description and save your post.");
    } catch (e) { setFailure((e as Error).message); setMessage(""); } finally { setBusy(false); }
  }
  async function save(status: "draft" | "published") {
    setBusy(true); setFailure(""); setMessage("");
    try {
      const result = await api<{ post: PublishedPost }>(post.id ? `/privileged/api/admin/posts/${post.id}` : "/privileged/api/admin/posts", {
        method: post.id ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...post, status }),
      });
      setPost(result.post); setDirty(false); await refresh();
      setMessage(status === "published" ? "Published. Your story is live in Privileged." : "Draft saved. Only you can see it.");
    } catch (e) { setFailure((e as Error).message); } finally { setBusy(false); }
  }
  async function remove() {
    if (!post.id || !confirm(`Delete “${post.title}”? This removes the post from the notebook.`)) return;
    setBusy(true); setFailure("");
    try { await api(`/privileged/api/admin/posts/${post.id}?version=${post.version}`, { method: "DELETE" }); setPost(emptyPost()); setDirty(false); await refresh(); setMessage("Post deleted."); }
    catch (e) { setFailure((e as Error).message); } finally { setBusy(false); }
  }
  const publicUrl = post.id ? `https://jhye.dev/privileged/story/?slug=${encodeURIComponent(post.slug)}` : "";
  return <>
    <div className="desk-heading"><div><h1>Publishing desk</h1><p>Signed in as {email}</p></div><button disabled={busy} onClick={() => choose(emptyPost())}>+ New post</button></div>
    <div className="desk">
      <aside className="post-list"><h2>Your posts</h2>
        {loading && <p>Loading your posts…</p>}
        {!loading && !posts.length && <p>No posts yet. Start your first draft.</p>}
        {posts.map((p) => <button key={p.id} disabled={busy} className={post.id === p.id ? "selected" : ""} onClick={() => choose(p)}><strong>{p.title}</strong><span>{p.status} · {p.date}</span></button>)}
        <p className="small">The original Ollama story remains in the notebook. New stories are managed here.</p>
      </aside>
      <section className="editor" aria-label="Post editor">
        <div className="editor-toolbar"><span>{dirty ? "Unsaved changes" : post.id ? `Saved ${post.status}` : "New draft"}</span><div><button disabled={busy} onClick={() => setPreview(!preview)}>{preview ? "Edit" : "Preview"}</button><button disabled={busy} onClick={() => save("draft")}>{post.status === "published" ? "Unpublish / save draft" : "Save draft"}</button><button className="primary" disabled={busy} onClick={() => save("published")}>{busy ? "Working…" : post.status === "published" ? "Update published post" : "Publish"}</button></div></div>
        {failure && <p className="error" role="alert">{failure}</p>}
        {message && <p className="notice" role="status">{message}</p>}
        {preview ? <div className="preview"><p className="small">{post.category} · {post.date}</p><h1>{post.title || "Untitled story"}</h1><p>{post.description}</p><Blocks blocks={post.blocks} /></div> : <fieldset disabled={busy}>
          <label>Title<input value={post.title} maxLength={180} onChange={(e) => { const title = e.target.value; update({ title, ...(!post.id ? { slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") } : {}) }); }} placeholder="Give the story a title" /></label>
          <label>Short introduction<textarea rows={2} value={post.description} maxLength={500} onChange={(e) => update({ description: e.target.value })} placeholder="A sentence or two for the archive" /></label>
          <div className="form-grid"><label>Section<select value={post.kind} onChange={(e) => update({ kind: e.target.value as PostInput["kind"] })}><option value="research">Research</option><option value="notes">Notes</option><option value="projects">Projects</option></select></label><label>Topic<input value={post.category} onChange={(e) => update({ category: e.target.value })} maxLength={80} /></label><label>Date<input type="date" value={post.date} onChange={(e) => update({ date: e.target.value })} /></label><label>Slug<input value={post.slug} onChange={(e) => update({ slug: e.target.value })} maxLength={120} /></label></div>
          <label>Tags, separated by commas<input value={post.tags.join(", ")} onChange={(e) => update({ tags: e.target.value.split(",").map((t) => t.trimStart()) })} onBlur={() => update({ tags: post.tags.map((t) => t.trim()).filter(Boolean) })} placeholder="security, go, networking" /></label>
          <div className="blocks-editor"><h2>Story content</h2>
            {!post.blocks.length && <p>Add text, an image or a video to begin.</p>}
            {post.blocks.map((b, i) => <section className="block-editor" key={b.id} aria-label={`${b.type} block ${i + 1}`}><div className="block-controls"><strong>{i + 1}. {b.type}</strong><div><button type="button" aria-label={`Move block ${i + 1} up`} disabled={!i} onClick={() => move(i, -1)}>↑</button><button type="button" aria-label={`Move block ${i + 1} down`} disabled={i === post.blocks.length - 1} onClick={() => move(i, 1)}>↓</button><button type="button" aria-label={`Remove block ${i + 1}`} onClick={() => update({ blocks: post.blocks.filter((item) => item.id !== b.id) })}>Remove</button></div></div>
              {["paragraph", "heading", "quote", "list", "code"].includes(b.type) && <label className="block-label">{b.type === "list" ? "One item per line" : "Text"}<textarea rows={b.type === "heading" ? 2 : 5} value={b.text} onChange={(e) => updateBlock(b.id, { text: e.target.value })} /></label>}
              {b.type === "embed" && <label>Video link<input type="url" value={b.url} onChange={(e) => updateBlock(b.id, { url: e.target.value })} placeholder="https://www.youtube.com/watch?v=… or https://vimeo.com/…" /></label>}
              {["image", "video", "embed"].includes(b.type) && <><label>{b.type === "image" ? "Image description (required)" : "Video title"}<input value={b.alt} onChange={(e) => updateBlock(b.id, { alt: e.target.value })} maxLength={500} /></label><label>Caption<input value={b.caption} onChange={(e) => updateBlock(b.id, { caption: e.target.value })} maxLength={1000} /></label>{b.assetId && <a href={b.url} target="_blank" rel="noreferrer">View uploaded media ↗</a>}</>}
            </section>)}
          </div>
          <div className="add-blocks" aria-label="Add content block">
            {(["paragraph", "heading", "quote", "list", "code", "embed"] as const).map((type) => <button key={type} type="button" onClick={() => update({ blocks: [...post.blocks, newBlock(type)] })}>+ {type === "embed" ? "Video embed" : type}</button>)}
            <label className="upload-button">Upload photo / video<input type="file" accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm" onChange={(e) => { const file = e.target.files?.[0]; if (file) void upload(file); e.target.value = ""; }} /></label>
            <button type="button" onClick={() => setLibrary(!library)}>Media library</button>
          </div><p className="small">Images: JPG, PNG, WebP or GIF up to 10 MB. Videos: MP4/WebM up to 50 MB. Longer videos can use a YouTube or Vimeo embed.</p>
          {library && <div className="media-library"><h3>Uploaded media</h3>{!media.length && <p>No uploads yet.</p>}{media.map((m) => <button type="button" key={m.id} onClick={() => insertMedia(m)}>{m.name}<span>{(m.size / 1024 / 1024).toFixed(1)} MB · Insert</span></button>)}</div>}
        </fieldset>}
        {post.id && <div className="editor-footer">{post.status === "published" && <a href={publicUrl} target="_blank" rel="noreferrer">Open published story ↗</a>}<button className="danger" disabled={busy} onClick={remove}>Delete post</button></div>}
      </section>
    </div>
  </>;
}
