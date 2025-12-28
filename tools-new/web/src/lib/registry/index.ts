import { CATEGORIES } from "./categories";
import { TOOLS_BY_CATEGORY } from "./tools";
import type { ToolCategory, Tool } from "./types";

export function getCategories(): ToolCategory[] {
  return CATEGORIES;
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return TOOLS_BY_CATEGORY[category] ?? [];
}
