"use client";

import { useEffect, useMemo, useState } from "react";
import SidebarToolLink from "./SidebarToolLink";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { CategorySummary, ToolSummary } from "@/lib/registry-client";
import { ChevronDownIcon, icons } from "@/components/icons";
import Link from "next/link";

interface SidebarCategoryProps {
  category: CategorySummary;
  tools: ToolSummary[];
  activePath: string;
  onNavigate?: () => void;
}

export default function SidebarCategory({
  category,
  tools,
  activePath,
  onNavigate,
}: SidebarCategoryProps) {
  const isActiveCategory = useMemo(
    () => activePath.startsWith(`/tools/${category.id}`),
    [activePath, category.id]
  );
  const [open, setOpen] = useState(isActiveCategory);

  useEffect(() => {
    if (isActiveCategory) {
      setOpen(true);
    }
  }, [isActiveCategory]);

  const Icon = icons[category.iconId];

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between text-sm font-semibold text-neutral-800">
        <Link
          href={`/tools/${category.id}`}
          onClick={onNavigate}
          className="flex items-center gap-2"
        >
          {Icon ? <Icon className="h-4 w-4 text-muted-foreground" /> : null}
          {category.name}
        </Link>
        <CollapsibleTrigger className="flex items-center" aria-label="Toggle category tools">
          <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="mt-1 space-y-1">
        {tools.map((tool) => (
          <SidebarToolLink
            key={tool.id}
            name={tool.name}
            path={tool.path}
            activePath={activePath}
            onNavigate={onNavigate}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
