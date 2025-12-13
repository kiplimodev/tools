import { ToolDescription } from "@/components/tools/ToolHeader";
import { getTool } from "@/lib/registry-client";
import { extractFieldMetadata } from "@/lib/zod-utils";
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

  const fields = extractFieldMetadata(fullTool.schemas.inputSchema as any);

  return (
    <div className="p-6 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">{fullTool.name}</h1>
        <ToolDescription description={fullTool.description} />
      </div>
      <ToolPageClient
        tool={{
          id: fullTool.id,
          name: fullTool.name,
          description: fullTool.description,
          path: fullTool.path,
          category: fullTool.category,
          fields,
        }}
      />
    </div>
  );
}
