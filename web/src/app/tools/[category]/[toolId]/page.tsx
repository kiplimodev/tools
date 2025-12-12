import { notFound } from "next/navigation";
import { ToolHeader } from "@/components/tools/ToolHeader";
import ToolPageClient from "./ToolPageClient";
import { buildDefaultValues, loadCalculatorInputDefinition } from "@/lib/form-utils";
import { getToolByCategoryAndId, readToolDescription } from "@/lib/registry-client";
import type { Metadata } from "next";

interface ToolPageProps {
  params: { category: string; toolId: string };
}

export function generateMetadata({ params }: ToolPageProps): Metadata {
  try {
    const tool = getToolByCategoryAndId(params.category, params.toolId);
    const description = readToolDescription(tool.path);
    return {
      title: `${tool.name} | Denstar Tools`,
      description,
    };
  } catch (error) {
    return { title: "Tool not found" };
  }
}

export default function ToolPage({ params }: ToolPageProps) {
  const { category, toolId } = params;

  let tool;
  try {
    tool = getToolByCategoryAndId(category, toolId);
  } catch (error) {
    return notFound();
  }

  const fields = loadCalculatorInputDefinition(tool.path);
  const defaultValues = buildDefaultValues(fields);
  const description = readToolDescription(tool.path);
  const apiPath = `/api/tools/${category}/${toolId}`;

  return (
    <div className="space-y-6">
      <ToolHeader title={tool.name} category={category} />
      <ToolPageClient
        description={description}
        apiPath={apiPath}
        fields={fields}
        defaultValues={defaultValues}
      />
    </div>
  );
}
