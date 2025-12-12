import type { NavigationCategory } from "@/lib/registry-client";
import { SidebarToolLink } from "./SidebarToolLink";

interface SidebarCategoryProps {
  category: NavigationCategory;
}

export function SidebarCategory({ category }: SidebarCategoryProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {category.category}
      </h3>
      <div className="space-y-1">
        {category.tools.map((tool) => (
          <SidebarToolLink key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
