import { getAllTools, getCategories, getToolsByCategory } from "@/lib/registry-client";
import Link from "next/link";

export default function ToolsIndexPage() {
  const categories = getCategories();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Fitness Tools</h1>

      {categories.map((category) => {
        const tools = getToolsByCategory(category);

        return (
          <section key={category} className="mb-6">
            <h2 className="text-xl font-semibold mb-2 capitalize">
              {category.replace(/-/g, " ")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.path}
                  className="p-3 bg-white border rounded shadow-sm hover:bg-gray-100"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
