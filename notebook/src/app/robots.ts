import type { MetadataRoute } from "next";
import { site, absoluteUrl } from "@/lib/site";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(site.url.includes("localhost") ? { disallow: "/" } : { allow: "/" }),
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
