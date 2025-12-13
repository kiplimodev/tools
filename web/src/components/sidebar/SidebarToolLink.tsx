import Link from "next/link";
import clsx from "clsx";

interface SidebarToolLinkProps {
  name: string;
  path: string;
  activePath: string;
  onNavigate?: () => void;
}

export default function SidebarToolLink({
  name,
  path,
  activePath,
  onNavigate,
}: SidebarToolLinkProps) {
  const href = path;
  const isActive = activePath === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={clsx(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-blue-50 font-semibold text-blue-700"
          : "text-neutral-700 hover:bg-neutral-100"
      )}
    >
      <span className="truncate">{name}</span>
    </Link>
  );
}
