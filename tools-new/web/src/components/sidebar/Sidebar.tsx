import SidebarCategory from "./SidebarCategory";
import { getCategories, getToolsByCategory } from "@/lib/registry";

export default function Sidebar() {
  const categories = getCategories();

  return (
    <div className="h-full px-6 py-8">
      <h2 className="mb-6 text-xs font-semibold tracking-widest text-gray-500 uppercase">
        Fitness Tools
      </h2>

      <nav className="space-y-6">
        {categories.map((category) => (
          <SidebarCategory
            key={category}
            category={category}
            tools={getToolsByCategory(category)}
          />
        ))}
      </nav>
    </div>
  );
}
