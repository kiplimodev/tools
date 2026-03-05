import type { MetadataRoute } from "next";
import { registry } from "@/registry";

const BASE_URL = "https://tools.denstarfitness.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = registry.map((tool) => ({
    url: `${BASE_URL}${tool.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
...toolPages,
  ];
}
