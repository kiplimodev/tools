import { getAllCategories, getToolsByCategory, registry } from "@/lib/registry-client";
import { SidebarSearchClient } from "./SidebarSearchClient";

export default function Sidebar() {
  const categories = getAllCategories();
  const toolsByCategory = Object.fromEntries(
    categories.map((cat) => [cat, getToolsByCategory(cat)])
  );

  return (
    <nav className="w-56 shrink-0 border-r border-zinc-200 dark:border-zinc-800 py-6 px-3 overflow-y-auto h-full">
      <p className="px-2 mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
        Tools
      </p>
      <SidebarSearchClient
        tools={registry}
        categories={categories}
        toolsByCategory={toolsByCategory}
      />
    </nav>
  );
}
