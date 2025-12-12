import { getToolDefinition } from "@/lib/registry-client";
import { getTool } from "@/registry/getTool";

interface ToolPageProps {
  params: Promise<{
    category: string;
    toolid: string;
  }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { category, toolid } = await params; // ⭐ Required fix for Next.js

  // Lookup tool metadata
  const def = getToolDefinition(category, toolid);

  if (!def) {
    return <div>Tool not found.</div>;
  }

  // Load the actual tool component dynamically
  const ToolComponent = await getTool(def.path);

  if (!ToolComponent) {
    return <div>Tool component not found.</div>;
  }

  return (
    <div className="p-4">
      <ToolComponent />
    </div>
  );
}
