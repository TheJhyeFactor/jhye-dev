import { z } from "zod";

export const blockSchema = z.object({
  id: z.string().uuid(),
  type: z.enum(["paragraph", "heading", "quote", "list", "code", "image", "video", "embed"]),
  text: z.string().max(30000).default(""),
  url: z.string().max(2048).default(""),
  alt: z.string().max(500).default(""),
  caption: z.string().max(1000).default(""),
  assetId: z.string().uuid().optional(),
});
export const postSchema = z.object({
  title: z.string().trim().min(1).max(180),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(120),
  description: z.string().trim().min(1).max(500),
  kind: z.enum(["research", "notes", "projects"]),
  category: z.string().trim().min(1).max(80),
  tags: z.array(z.string().trim().min(1).max(40)).max(12),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((s) => !Number.isNaN(Date.parse(s))),
  status: z.enum(["draft", "published"]),
  blocks: z.array(blockSchema).max(200),
  version: z.number().int().nonnegative().optional(),
});
export type Block = z.infer<typeof blockSchema>;
export type PostInput = z.infer<typeof postSchema>;
export type PublishedPost = PostInput & { id: string; version: number; updatedAt: string; readingTime: number };

export function embedUrl(value: string): string | null {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return null;
    let id = "";
    if (["www.youtube.com", "youtube.com", "m.youtube.com"].includes(url.hostname)) id = url.searchParams.get("v") || url.pathname.match(/^\/(?:shorts|embed)\/([\w-]+)$/)?.[1] || "";
    if (url.hostname === "youtu.be") id = url.pathname.slice(1);
    if (/^[\w-]{11}$/.test(id)) return `https://www.youtube-nocookie.com/embed/${id}`;
    if (["vimeo.com", "www.vimeo.com"].includes(url.hostname) && /^\/\d+$/.test(url.pathname)) return `https://player.vimeo.com/video${url.pathname}`;
    return null;
  } catch { return null; }
}

export function newBlock(type: Block["type"]): Block {
  return { id: crypto.randomUUID(), type, text: "", url: "", alt: "", caption: "" };
}
