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

  // Load the tool from the registry
  const ToolExport = await getTool(def.id);

  let content: JSX.Element;

  try {
    if (!ToolExport) {
      throw new Error("Tool component not found");
    }

    // CASE 1: Tool is a React component (UI tool)
    if (typeof ToolExport === "function") {
      const result = ToolExport({} as any);

      // If calling it returns JSX, render it
      if (typeof result === "object" && "$$typeof" in result) {
        content = result as JSX.Element;
      } else {
        // Tool returned data (calculator-only tool)
        throw new Error("This tool does not have a UI yet.");
      }
    } else {
      throw new Error("Invalid tool export");
    }
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Please provide the required inputs to run this tool.";

    content = (
      <div className="rounded border border-amber-200 bg-amber-50 p-4 text-amber-800">
        <p className="font-semibold">Tool is registered but has no UI.</p>
        <p className="text-sm">{message}</p>
      </div>
    );
  }

  return <div className="p-4">{content}</div>;
}
