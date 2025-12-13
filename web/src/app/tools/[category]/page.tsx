import Link from "next/link";
import { getToolsByCategory } from "@/lib/registry-client";

export default function CategoryToolsPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const tools = getToolsByCategory(category);

  if (!tools.length) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 capitalize">{category.replace(/-/g, " ")}</h1>
        <p>No tools found for this category.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold capitalize">{category.replace(/-/g, " ")}</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.path}
            className="block rounded-lg border border-neutral-200 bg-white p-4 shadow-sm hover:border-blue-400"
          >
            <h2 className="text-lg font-semibold">{tool.name}</h2>
            <p className="text-sm text-neutral-600 mt-1">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
