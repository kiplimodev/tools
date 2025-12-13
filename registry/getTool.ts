import { ToolDefinition, tools } from "./registry";

export function getTool(categoryOrId: string, toolId?: string): ToolDefinition {
  const tool = toolId
    ? tools.find((t) => t.category === categoryOrId && t.id === toolId)
    : tools.find((t) => t.id === categoryOrId);

  if (!tool) {
    const id = toolId ? `${categoryOrId}/${toolId}` : categoryOrId;
    throw new Error(`Tool '${id}' not found.`);
  }

  return tool;
}

export function getCalculator(id: string) {
  return getTool(id).calculate;
}
