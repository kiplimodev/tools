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
  const tool = getTool(category, toolId);

  if (!tool) notFound();

  return (
    <div className="p-6 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">{tool.name}</h1>
        <ToolDescription description={tool.description} />
      </div>
      <ToolPageClient tool={tool} />
    </div>
  );
}
