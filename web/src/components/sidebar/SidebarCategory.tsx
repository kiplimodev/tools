"use client";

import { useState } from "react";
import SidebarToolLink from "./SidebarToolLink";
import type { ToolMeta } from "@/lib/registry-client";

function formatCategory(cat: string) {
  return cat
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function SidebarCategory({
  category,
  tools,
}: {
  category: string;
  tools: ToolMeta[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-2 py-1.5 rounded-md text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
      >
        {formatCategory(category)}
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {open && (
        <div className="mt-0.5 space-y-0.5">
          {tools.map((t) => (
            <SidebarToolLink
              key={t.slug}
              name={t.title}
              category={t.category}
              toolid={t.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
}
