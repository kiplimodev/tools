"use client";

import SidebarCategory from "./SidebarCategory";
import { getAllCategories, getToolsForCategory } from "@/lib/registry-client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const categories = useMemo(() => getAllCategories(), []);

  return (
    <aside className="h-full w-72 border-r bg-white">
      <div className="px-4 py-3">
        <h3 className="text-lg font-semibold">Fitness Tools</h3>
      </div>
      <div className="space-y-1 px-2 pb-4">
        {categories.map((cat) => {
          const tools = getToolsForCategory(cat.id);

          return (
            <SidebarCategory
              key={cat.id}
              category={cat}
              tools={tools}
              activePath={pathname}
              icon={cat.icon}
              onNavigate={onNavigate}
            />
          );
        })}
      </div>
    </aside>
  );
}
