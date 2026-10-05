import type { MetadataRoute } from "next";
import { getAllPosts, postUrl } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["/", "/research", "/notes", "/projects", "/about"].map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.6,
    })),
    ...getAllPosts()
      .filter((post) => !post.demo)
      .map((post) => ({
        url: absoluteUrl(postUrl(post)),
        lastModified: post.date,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
  ];
}
