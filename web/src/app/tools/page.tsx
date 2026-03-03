import type { Metadata } from "next";
import { getAllCategories, getToolsByCategory } from "@/lib/registry-client";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Fitness Tools | Denstar Fitness",
  description: "Browse 40+ science-backed calculators for running, strength, nutrition, and body composition.",
  openGraph: {
    title: "All Fitness Tools | Denstar Fitness",
    description: "Browse 40+ science-backed calculators for running, strength, nutrition, and body composition.",
    url: "https://denstarfitness.com/tools",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Fitness Tools | Denstar Fitness",
    description: "Browse 40+ science-backed calculators for running, strength, nutrition, and body composition.",
    images: ["/api/og"],
  },
};

function formatCategory(cat: string) {
  return cat
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function ToolsIndexPage() {
  const categories = getAllCategories();

  return (
    <div className="space-y-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">All Tools</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Science-backed calculators for every training goal.
        </p>
      </header>

      {categories.map((category) => {
        const tools = getToolsByCategory(category);
        return (
          <section key={category}>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                {formatCategory(category)}
              </span>
              <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.path}
                  className="group rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 shadow-sm transition hover:border-emerald-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-emerald-700"
                >
                  <p className="text-sm font-medium text-zinc-900 group-hover:text-emerald-700 dark:text-zinc-100 dark:group-hover:text-emerald-400 transition-colors">
                    {tool.title}
                  </p>
                  {tool.description && (
                    <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                      {tool.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
