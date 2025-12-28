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
    <div>
      <Link
        href={`/tools/${category}/${toolid}`}
        className="text-sm text-blue-600 hover:underline"
      >
        {name}
      </Link>
    </div>
  );
}
