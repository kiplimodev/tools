/**
 * Registry client — thin re-export of the static registry for use in
 * Server Components and pages. Uses the canonical static registry so it
 * works in production (no filesystem scanning).
 */
import { registry, getToolsByCategory, getTool, getAllCategories } from "@/registry";
import type { ToolMeta } from "@/registry";

export type { ToolMeta };
export { registry, getToolsByCategory, getAllCategories };

export type ToolSummary = {
  id: string;
  name: string;
  path: string;
  category: string;
};

export type ToolDefinition = {
  id: string;
  name: string;
  category: string;
  importPath: string;
};

function toSummary(meta: ToolMeta): ToolSummary {
  return {
    id: meta.slug,
    name: meta.title,
    path: meta.path,
    category: meta.category,
  };
}

function toDefinition(meta: ToolMeta): ToolDefinition {
  return {
    id: meta.slug,
    name: meta.title,
    category: meta.category,
    importPath: `@/${meta.category}/${meta.slug}`,
  };
}

export function getToolDefinition(
  category: string,
  toolid: string
): ToolDefinition | undefined {
  const meta = registry.find(
    (t) => t.category === category && t.slug === toolid
  );
  return meta ? toDefinition(meta) : undefined;
}

export function getToolDefinitionById(id: string): ToolDefinition | undefined {
  const meta = getTool(id);
  return meta ? toDefinition(meta) : undefined;
}

export function getAllTools(): ToolSummary[] {
  return registry.map(toSummary);
}
