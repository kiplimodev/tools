import { getToolDefinition } from "@/lib/registry-client";
import { getTool } from "@/registry/getTool";
import { ComponentType } from "react";

export default async function ToolPage({
  params,
}: {
  params: Promise<{ category: string; toolid: string }>;
}) {
  const { category, toolid } = await params;

  // Lookup tool metadata
  const def = getToolDefinition(category, toolid);

  if (!def) {
    return <div>Tool not found.</div>;
  }

  // Load the actual tool component dynamically
  const ToolComponent: ComponentType | undefined =
    (await getTool(def.indexPath)) ?? (() => <div>Tool component not found.</div>);

  if (!ToolComponent) {
    return <div>Tool component not found.</div>;
  }

  return (
    <div className="p-4">
      <ToolComponent />
    </div>
  );
}
