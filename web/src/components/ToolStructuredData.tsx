"use client";

import { usePathname } from "next/navigation";
import { getTool } from "@/registry";

export function ToolStructuredData() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const slug = segments.at(-1);
  const tool = slug ? getTool(slug) : undefined;

  if (!tool) return null;

  const toolUrl = `https://tools.denstarfitness.com${tool.path}`;
  const category =
    tool.category.charAt(0).toUpperCase() +
    tool.category.slice(1).replace(/-/g, " ");

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.title,
      description: tool.description,
      url: toolUrl,
      applicationCategory: "HealthApplication",
      operatingSystem: "All",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://tools.denstarfitness.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: "https://tools.denstarfitness.com/tools",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: category,
          item: `https://tools.denstarfitness.com/tools/${tool.category}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: tool.title,
          item: toolUrl,
        },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
