import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";

import { headingId, type ContentKind, type Post } from "./content-utils";
export * from "./content-utils";
export const getPosts = cache((kind: ContentKind): Post[] => {
  const directory = path.join(process.cwd(), "content", kind);
  if (!fs.existsSync(directory)) return [];
  const slugs = new Set<string>();
  return fs
    .readdirSync(directory)
    .filter((file) => /\.mdx?$/.test(file))
    .flatMap((file) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(directory, file), "utf8"),
      );
      if (data.draft) return [];
      const slug = file.replace(/\.mdx?$/, "");
      if (slugs.has(slug) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
        throw new Error(`Invalid or duplicate slug: ${file}`);
      slugs.add(slug);
      for (const key of ["title", "description", "category", "date"]) {
        if (typeof data[key] !== "string" || !data[key].trim())
          throw new Error(`${file}: ${key} must be a string.`);
      }
      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(data.date) ||
        Number.isNaN(Date.parse(data.date))
      )
        throw new Error(`${file}: use a YYYY-MM-DD date.`);
      if (
        !Array.isArray(data.tags) ||
        !data.tags.every((tag: unknown) => typeof tag === "string")
      )
        throw new Error(`${file}: tags must be an array of strings.`);
      const usedIds = new Map<string, number>();
      const withoutCode = content.replace(/```[\s\S]*?```/g, "");
      const headings = Array.from(
        withoutCode.matchAll(/^## (.+)$/gm),
        (match) => {
          const text = match[1].replace(/[*`]/g, "");
          const base = headingId(text);
          const count = usedIds.get(base) || 0;
          usedIds.set(base, count + 1);
          return { text, id: count ? `${base}-${count}` : base };
        },
      );
      return [
        {
          slug,
          kind,
          title: data.title,
          description: data.description,
          date: data.date,
          category: data.category,
          tags: data.tags,
          demo: data.demo === true,
          featured: data.featured === true,
          art: ["api", "binary", "linux", "network"].includes(data.art)
            ? data.art
            : "api",
          readingTime: Math.max(
            1,
            Math.ceil(content.split(/\s+/).length / 220),
          ),
          content,
          headings,
        } satisfies Post,
      ];
    })
    .sort(
      (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
    );
});
export const getAllPosts = cache(() =>
  (["research", "notes", "projects"] as const)
    .flatMap(getPosts)
    .sort((a, b) => b.date.localeCompare(a.date)),
);
export function getPost(kind: ContentKind, slug: string) {
  return getPosts(kind).find((post) => post.slug === slug);
}
