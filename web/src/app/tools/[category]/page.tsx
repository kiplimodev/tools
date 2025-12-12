import { getToolDefinition } from "@/lib/registry-client";
import { getTool } from "@/registry/getTool";

export default async function ToolPage({
  params,
}: {
  params: Promise<{ category: string; toolId: string }>;
}) {
  // 🔥 FIX: unwrap the params Promise
  const { category, toolId } = await params;

  // 🔥 Find metadata for the tool
  const tool = getToolDefinition(category, toolId);

  if (!tool) {
    return (
      <div className="p-4 text-red-600">
        <h2>Tool not found.</h2>
      </div>
    );
  }

  // 🔥 Load the tool's calculate() function
  let calculateFn: Function;
  try {
    calculateFn = getTool(tool.id);
  } catch {
    return <div className="text-red-600">Error loading tool.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{tool.name}</h1>
      <p>Tool is loaded successfully.</p>

      {/* Add UI rendering later */}
    </div>
  );
}
