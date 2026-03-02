export { registry } from "./registry";
export type { ToolMeta } from "./types";

import { registry } from "./registry";
import type { ToolMeta } from "./types";

export function getToolsByCategory(category: string): ToolMeta[] {
  return registry.filter((tool) => tool.category === category);
}

export function getTool(slug: string): ToolMeta | undefined {
  return registry.find((tool) => tool.slug === slug);
}

export function getAllCategories(): string[] {
  return [...new Set(registry.map((tool) => tool.category))];
}
