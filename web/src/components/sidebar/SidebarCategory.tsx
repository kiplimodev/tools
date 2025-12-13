"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import SidebarToolLink from "./SidebarToolLink";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { CategorySummary, ToolSummary } from "@/lib/registry-client";
import { ChevronDownIcon } from "@/components/icons";

interface SidebarCategoryProps {
  category: CategorySummary;
  tools: ToolSummary[];
  activePath: string;
  icon?: ReactNode;
  onNavigate?: () => void;
}

export default function SidebarCategory({
  category,
  tools,
  activePath,
  icon,
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

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
        <span className="flex items-center gap-2">
          {icon}
          {category.label}
        </span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 space-y-1">
        {tools.map((tool) => (
          <SidebarToolLink
            key={tool.id}
            name={tool.name}
            category={tool.category}
            toolid={tool.id}
            activePath={activePath}
            onNavigate={onNavigate}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
