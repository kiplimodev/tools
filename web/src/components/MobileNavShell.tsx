"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { ToolStructuredData } from "./ToolStructuredData";

export default function MobileNavShell({
  sidebar,
  children,
}: {
  sidebar: ReactNode;
  children: ReactNode;
}) {
  // Track which pathname the sidebar was opened for.
  // When the user navigates, pathname changes → open becomes false automatically.
  const [openedAtPath, setOpenedAtPath] = useState<string | null>(null);
  const pathname = usePathname();
  const open = openedAtPath === pathname;

  return (
    <div className="flex flex-1 relative">
      {/* Backdrop — mobile only */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setOpenedAtPath(null)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar — fixed overlay on mobile, inline on desktop */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto border-r border-zinc-200 bg-white
          transition-transform duration-200 ease-in-out
          dark:border-zinc-800 dark:bg-zinc-950
          lg:relative lg:z-auto lg:w-56 lg:shrink-0 lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {sidebar}
      </aside>

      {/* Main content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile top bar — visible only below lg breakpoint */}
        <div className="sticky top-0 z-30 flex items-center gap-3 border-b border-zinc-200 bg-white/80 px-4 py-3 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 lg:hidden">
          <button
            onClick={() => setOpenedAtPath(pathname)}
            className="rounded-md p-1.5 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="Open navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Tools</span>
        </div>

        <ToolStructuredData />
        <div className="flex-1 px-6 py-8 lg:px-10">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
