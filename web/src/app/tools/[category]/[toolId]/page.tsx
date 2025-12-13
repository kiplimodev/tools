import { ToolDescription } from "@/components/tools/ToolHeader";
import { getToolDefinition } from "@/lib/registry-client";
import { notFound } from "next/navigation";
import ToolPageClient from "./ToolPageClient";

export default function ToolPage({
  params,
}: {
  params: { category: string; toolId: string };
}) {
  const { category, toolId } = params;
  const tool = getToolDefinition(category, toolId);

  if (!tool) {
    notFound();
  }

  return (
    <div className="p-6 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">{tool.name}</h1>
        <ToolDescription description={tool.description} />
      </div>
      <ToolPageClient category={category} toolId={toolId} />
    </div>
  );
}
