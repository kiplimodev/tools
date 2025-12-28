import SidebarCategory from "./SidebarCategory";
import { getCategories, getToolsByCategory } from "@/lib/registry";

export default function Sidebar() {
  const categories = getCategories();

  return (
    <div className="w-64 p-4 border-r">
      <h3 className="font-semibold mb-4">Fitness Tools</h3>

      {categories.map((category) => {
        const tools = getToolsByCategory(category);

        return (
          <SidebarCategory
            key={category}
            category={category}
            tools={tools}
          />
        );
      })}
    </div>
  );
}
