import SidebarCategory from "./SidebarCategory";
import { getCategories, getToolsByCategory } from "@/lib/registry-client";

export default function Sidebar() {
  const categories = getCategories();

  return (
    <div style={{ width: "200px", padding: "10px", borderRight: "1px solid #ccc" }}>
      <h3>Fitness Tools</h3>
      {categories.map((cat) => {
        const tools = getToolsByCategory(cat);

        return <SidebarCategory key={cat} category={cat} tools={tools} />;
      })}
    </div>
  );
}
