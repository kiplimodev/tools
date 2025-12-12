import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="lg:w-80 lg:shrink-0">
        <div className="lg:hidden">
          <details className="w-full rounded-xl border border-zinc-200 bg-white/70 p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
            <summary className="cursor-pointer text-sm font-semibold text-zinc-700 dark:text-zinc-200">
              Browse tools
            </summary>
            <div className="mt-3">
              <Sidebar />
            </div>
          </details>
        </div>
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>
      <div className="flex-1 space-y-6">{children}</div>
    </div>
  );
}
