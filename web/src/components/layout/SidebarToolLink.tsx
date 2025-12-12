"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationTool } from "@/lib/registry-client";
import { cn } from "@/lib/utils";

interface SidebarToolLinkProps {
  tool: NavigationTool;
}

export function SidebarToolLink({ tool }: SidebarToolLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === tool.path;

  return (
    <Link
      href={tool.path}
      className={cn(
        "flex items-center justify-between rounded-md px-3 py-2 text-sm transition hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-900/20",
        isActive
          ? "bg-emerald-100 text-emerald-800 font-semibold dark:bg-emerald-900/30 dark:text-emerald-200"
          : "text-zinc-700 dark:text-zinc-200"
      )}
    >
      <span>{tool.name}</span>
      <span className="text-[11px] uppercase tracking-wide text-zinc-400">{tool.id}</span>
    </Link>
  );
}
