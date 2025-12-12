import fs from "node:fs";
import path from "node:path";
import { tools, type ToolDefinition } from "@registry/registry";

export interface NavigationTool {
  id: string;
  name: string;
  category: string;
  path: string;
}

export interface NavigationCategory {
  category: string;
  tools: NavigationTool[];
}

function normalizeRegistryPath(registryPath: string): string {
  const withoutLeading = registryPath.replace(/^\//, "");
  const cleaned = withoutLeading.replace(/^tools\//, "");
  return cleaned;
}

function resolveToolDirectory(registryPath: string): string {
  const normalized = normalizeRegistryPath(registryPath);
  return path.resolve(process.cwd(), "..", normalized);
}

export function getToolByCategoryAndId(
  category: string,
  toolId: string
): ToolDefinition & { category: string; dir: string } {
  const match = tools.find((tool) => {
    const normalized = normalizeRegistryPath(tool.path);
    return normalized === `${category}/${toolId}`;
  });

  if (!match) {
    throw new Error(`Tool '${toolId}' in category '${category}' not found.`);
  }

  return {
    ...match,
    category,
    dir: resolveToolDirectory(match.path),
  };
}

export function getToolById(id: string): ToolDefinition & { category: string; dir: string } {
  const match = tools.find((tool) => tool.id === id);
  if (!match) {
    throw new Error(`Tool '${id}' not found.`);
  }
  const normalized = normalizeRegistryPath(match.path);
  const [category] = normalized.split("/");
  return { ...match, category, dir: resolveToolDirectory(match.path) };
}

export function buildNavigation(): NavigationCategory[] {
  const categories: Record<string, NavigationTool[]> = {};

  tools.forEach((tool) => {
    const normalized = normalizeRegistryPath(tool.path);
    const [category] = normalized.split("/");
    const entry: NavigationTool = {
      id: tool.id,
      name: tool.name,
      category,
      path: `/tools/${category}/${tool.id}`,
    };
    categories[category] = categories[category] || [];
    categories[category].push(entry);
  });

  return Object.entries(categories)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, categoryTools]) => ({
      category,
      tools: categoryTools.sort((a, b) => a.name.localeCompare(b.name)),
    }));
}

export function readToolDescription(registryPath: string): string {
  try {
    const dir = resolveToolDirectory(registryPath);
    const readmePath = path.join(dir, "README.md");
    const content = fs.readFileSync(readmePath, "utf8");
    const lines = content.split(/\r?\n/).filter(Boolean);
    const firstParagraph = lines.slice(1).find((line) => line.trim().length > 0);
    return firstParagraph ?? "This tool is ready to run calculations.";
  } catch (error) {
    return "This tool is ready to run calculations.";
  }
}
