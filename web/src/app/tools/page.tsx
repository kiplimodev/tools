import type { Metadata } from "next";
import { getAllCategories, getToolsByCategory } from "@/lib/registry-client";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Fitness Tools | Denstar Fitness",
  description: "Browse 40+ science-backed calculators for running, strength, nutrition, and body composition.",
  openGraph: {
    title: "All Fitness Tools | Denstar Fitness",
    description: "Browse 40+ science-backed calculators for running, strength, nutrition, and body composition.",
    url: "https://denstar.fitness/tools",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Fitness Tools | Denstar Fitness",
    description: "Browse 40+ science-backed calculators for running, strength, nutrition, and body composition.",
    images: ["/api/og"],
  },
};

export default function ToolsIndexPage() {
  const categories = getAllCategories();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Fitness Tools</h1>

      {categories.map((category) => {
        const tools = getToolsByCategory(category);

        return (
          <section key={category} className="mb-6">
            <h2 className="text-xl font-semibold mb-2 capitalize">
              {category.replace(/-/g, " ")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.path}
                  className="p-3 bg-white border rounded shadow-sm hover:bg-gray-100"
                >
                  {tool.title}
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
