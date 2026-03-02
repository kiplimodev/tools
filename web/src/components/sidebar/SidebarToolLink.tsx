"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarToolLink({
  name,
  category,
  toolid,
}: {
  name: string;
  category: string;
  toolid: string;
}) {
  const pathname = usePathname();
  const href = `/tools/${category}/${toolid}`;
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`block px-2 py-1 rounded-md text-sm leading-snug transition-colors ${
        active
          ? "bg-emerald-50 text-emerald-700 font-medium dark:bg-emerald-900/20 dark:text-emerald-300"
          : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800/60"
      }`}
    >
      {name}
    </Link>
  );
}
