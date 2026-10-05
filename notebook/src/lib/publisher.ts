export const publisherOrigin = "https://privileged-publisher.ellyjane-luki.chatgpt.site";
export type StoryBlock = {
  id: string;
  type: "paragraph" | "heading" | "quote" | "list" | "code" | "image" | "video" | "embed";
  text: string; url: string; alt: string; caption: string; assetId?: string;
};
export type LiveStory = {
  id: string; title: string; slug: string; description: string;
  kind: "research" | "notes" | "projects"; category: string;
  tags: string[]; date: string; readingTime: number; blocks?: StoryBlock[];
};
export function safeEmbed(value: string) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return null;
    let id = "";
    if (["www.youtube.com", "youtube.com", "m.youtube.com"].includes(url.hostname)) id = url.searchParams.get("v") || url.pathname.match(/^\/(?:shorts|embed)\/([\w-]+)$/)?.[1] || "";
    if (url.hostname === "youtu.be") id = url.pathname.slice(1);
    if (/^[\w-]{11}$/.test(id)) return `https://www.youtube-nocookie.com/embed/${id}`;
    if (["vimeo.com", "www.vimeo.com"].includes(url.hostname) && /^\/\d+$/.test(url.pathname)) return `https://player.vimeo.com/video${url.pathname}`;
  } catch { /* Unsupported URLs have no embed. */ }
  return null;
}
