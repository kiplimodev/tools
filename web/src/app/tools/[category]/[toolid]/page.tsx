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
    (await getTool(def.id)) ?? (() => <div>Tool component not found.</div>);

  let content: JSX.Element;

  try {
    if (!ToolComponent) {
      throw new Error("Tool component not found");
    }

    content = <ToolComponent />;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Please provide the required inputs to run this tool.";

    content = (
      <div className="rounded border border-amber-200 bg-amber-50 p-4 text-amber-800">
        <p className="font-semibold">Tool is loaded but needs input.</p>
        <p className="text-sm">{message}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {content}
    </div>
  );
}
