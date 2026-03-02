import SidebarCategory from "./SidebarCategory";
import { getAllCategories, getToolsByCategory } from "@/lib/registry-client";
import type { ToolMeta } from "@/lib/registry-client";

export default function Sidebar() {
  const categories = getAllCategories();

  return (
    <div style={{ width: "200px", padding: "10px", borderRight: "1px solid #ccc" }}>
      <h3>Fitness Tools</h3>
      {categories.map((cat) => {
        const tools: ToolMeta[] = getToolsByCategory(cat);
        return <SidebarCategory key={cat} category={cat} tools={tools} />;
      })}
    </div>
  );
}
