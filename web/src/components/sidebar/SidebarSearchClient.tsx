"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import SidebarCategory from "./SidebarCategory";
import type { ToolMeta } from "@/lib/registry-client";

export function SidebarSearchClient({
  tools,
  categories,
  toolsByCategory,
}: {
  tools: ToolMeta[];
  categories: string[];
  toolsByCategory: Record<string, ToolMeta[]>;
}) {
  const [query, setQuery] = useState("");
  const pathname = usePathname();

  const results = query.trim()
    ? tools.filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.description.toLowerCase().includes(query.toLowerCase())
      )
    : null;

  return (
    <>
      {/* Search input */}
      <div className="px-3 pb-3">
        <input
          type="search"
          placeholder="Search tools…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs
                     placeholder-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100
                     dark:placeholder-zinc-500 focus:border-emerald-400 focus:outline-none
                     focus:ring-1 focus:ring-emerald-400/30"
        />
      </div>

      {/* Conditional: search results OR normal category list */}
      {results !== null ? (
        <div className="px-2 space-y-0.5">
          {results.length === 0 ? (
            <p className="px-2 py-3 text-xs text-zinc-400 dark:text-zinc-500">
              No tools found.
            </p>
          ) : (
            results.map((tool) => {
              const isActive = pathname === tool.path;
              return (
                <a
                  key={tool.slug}
                  href={tool.path}
                  className={`
                    block truncate rounded-md px-2 py-1.5 text-sm transition-colors
                    ${
                      isActive
                        ? "bg-emerald-50 font-medium text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300"
                        : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60"
                    }
                  `}
                >
                  {tool.title}
                </a>
              );
            })
          )}
        </div>
      ) : (
        categories.map((cat) => (
          <SidebarCategory key={cat} category={cat} tools={toolsByCategory[cat] ?? []} />
        ))
      )}
    </>
  );
}
