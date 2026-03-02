import SidebarCategory from "./SidebarCategory";
import { getAllCategories, getToolsByCategory } from "@/lib/registry-client";
import type { ToolMeta } from "@/lib/registry-client";

export default function Sidebar() {
  const categories = getAllCategories();

  return (
    <nav className="w-56 shrink-0 border-r border-zinc-200 dark:border-zinc-800 py-6 px-3 overflow-y-auto h-full">
      <p className="px-2 mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
        Tools
      </p>
      {categories.map((cat) => {
        const tools: ToolMeta[] = getToolsByCategory(cat);
        return <SidebarCategory key={cat} category={cat} tools={tools} />;
      })}
    </nav>
  );
}
