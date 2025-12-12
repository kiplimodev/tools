import { tools } from "@/registry/registry";

export interface ToolSummary {
  id: string;
  name: string;
  path: string;
  category: string;
}

function extractCategory(path: string): string {
  // path example: "/tools/body-composition/bmi-calculator"
  const parts = path.split("/");
  return parts[2];
}

export function getAllTools(): ToolSummary[] {
  return tools.map((tool) => ({
    id: tool.id,
    name: tool.name,
    path: tool.path,
    category: extractCategory(tool.path),
  }));
}

export function getCategories(): string[] {
  const categories = getAllTools().map((t) => t.category);
  return Array.from(new Set(categories)).sort();
}

export function getToolsByCategory(category: string): ToolSummary[] {
  return getAllTools().filter((t) => t.category === category);
}

export function getToolDefinition(category: string, toolid: string) {
  return getAllTools().find(
    (t) => t.category === category && t.id === toolid
  );
}
