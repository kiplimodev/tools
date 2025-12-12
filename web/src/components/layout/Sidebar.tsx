import { buildNavigation } from "@/lib/registry-client";
import { SidebarCategory } from "./SidebarCategory";

interface SidebarProps {
  className?: string;
}

export async function Sidebar({ className }: SidebarProps) {
  const navigation = buildNavigation();
  return (
    <aside
      className={`w-full max-w-xs space-y-6 rounded-xl border border-zinc-200 bg-white/80 p-4 text-sm shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 ${className ?? ""}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Tools</p>
          <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Categories</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
          {navigation.reduce((acc, category) => acc + category.tools.length, 0)} tools
        </span>
      </div>
      <div className="space-y-6">
        {navigation.map((category) => (
          <SidebarCategory key={category.category} category={category} />
        ))}
      </div>
    </aside>
  );
}
