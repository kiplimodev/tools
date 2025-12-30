import SidebarToolLink from "./SidebarToolLink";

export default function SidebarCategory({
  category,
  tools,
}: {
  category: string;
  tools: { id: string; name: string }[];
}) {
  if (tools.length === 0) return null;

  return (
    <div>
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
        {category.replace("-", " ")}
      </h3>

      <ul className="space-y-1">
        {tools.map((tool) => (
          <li key={tool.id}>
            <SidebarToolLink
              category={category}
              toolid={tool.id}
              name={tool.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
