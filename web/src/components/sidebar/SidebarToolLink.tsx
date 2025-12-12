import Link from "next/link";

export default function SidebarToolLink({
  name,
  category,
  toolid,
}: {
  name: string;
  category: string;
  toolid: string;
}) {
  return (
    <div style={{ marginBottom: "4px" }}>
      <Link href={`/tools/${category}/${toolid}`}>
        {name}
      </Link>
    </div>
  );
}
