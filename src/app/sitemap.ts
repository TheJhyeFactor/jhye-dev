import type { MetadataRoute } from "next";
import { projects, career } from "@/data/portfolio";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/work",
    "/career",
    "/open-source",
    "/research",
    "/privileged",
    "/about",
    "/contact",
    "/resume",
    ...projects.map((p) => `/work/${p.slug}`),
    ...career.map((r) => `/career/${r.slug}`),
  ].map((route) => ({
    url: `https://jhye.dev${route}/`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
