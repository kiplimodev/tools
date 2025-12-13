import { ToolDefinition, tools } from "@/registry/registry";

export interface ToolSummary {
  id: string;
  name: string;
  path: string;
  category: string;
  description: string;
}

export { ToolDefinition };

export function getCategories(): string[] {
  return Array.from(new Set(tools.map((tool) => tool.category))).sort();
}

export function getToolsByCategory(category: string): ToolSummary[] {
  return tools
    .filter((tool) => tool.category === category)
    .map((tool) => ({
      id: tool.id,
      name: tool.name,
      path: tool.path,
      category: tool.category,
      description: tool.description,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getAllTools(): ToolSummary[] {
  return tools
    .map((tool) => ({
      id: tool.id,
      name: tool.name,
      path: tool.path,
      category: tool.category,
      description: tool.description,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getToolDefinition(
  category: string,
  toolId: string
): ToolDefinition | undefined {
  return tools.find((tool) => tool.category === category && tool.id === toolId);
}

export function getToolDefinitionById(id: string): ToolDefinition | undefined {
  return tools.find((tool) => tool.id === id);
}
