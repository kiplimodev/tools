import { Suspense } from "react";
import Sidebar from "@/components/sidebar/Sidebar";

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 gap-0">
      <aside className="hidden lg:flex lg:shrink-0">
        <Sidebar />
      </aside>
      <div className="flex-1 min-w-0 px-6 py-8 lg:px-10">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}
