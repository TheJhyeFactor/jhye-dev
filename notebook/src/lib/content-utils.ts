export type ContentKind = "research" | "notes" | "projects";
export type Post = {
  slug: string;
  kind: ContentKind;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: number;
  demo: boolean;
  featured: boolean;
  live?: boolean;
  art: "api" | "binary" | "linux" | "network";
  content: string;
  headings: { id: string; text: string }[];
};
export function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
export function postUrl(post: Pick<Post, "kind" | "slug" | "live">) {
  return post.live ? `/story/?slug=${encodeURIComponent(post.slug)}` : `/${post.kind}/${post.slug}`;
}
export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
