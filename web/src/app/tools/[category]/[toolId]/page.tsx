import { ToolDescription } from "@/components/tools/ToolHeader";
import { getTool } from "@/lib/registry-client";
import { notFound } from "next/navigation";
import ToolPageClient from "./ToolPageClient";

export default async function ToolPage({
  params,
}: {
  params: Promise<{ category: string; toolId: string }>;
}) {
  const { category, toolId } = await params;
  const fullTool = getTool(category, toolId);

  if (!fullTool) notFound();

  // remove non-serializable function before sending to client
  const { calculate, ...safeTool } = fullTool;

  return (
    <div className="p-6 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">{fullTool.name}</h1>
        <ToolDescription description={fullTool.description} />
      </div>
      <ToolPageClient tool={safeTool} />
    </div>
  );
}
