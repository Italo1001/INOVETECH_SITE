import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["/privacidade", "/termos"].map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
