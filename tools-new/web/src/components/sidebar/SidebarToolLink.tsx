import Link from "next/link";

export default function SidebarToolLink({
  category,
  toolid,
  name,
}: {
  category: string;
  toolid: string;
  name: string;
}) {
  return (
    <Link
      href={`/tools/${category}/${toolid}`}
      className="block rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    >
      {name}
    </Link>
  );
}
