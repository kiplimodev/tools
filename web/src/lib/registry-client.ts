import fs from "fs";
import path from "path";

export interface ToolSummary {
  id: string;
  name: string;
  path: string;
  category: string;
}

export interface ToolDefinition {
  id: string;
  name: string;
  category: string;
  indexPath: string;
}

const SRC_ROOT = path.join(process.cwd(), "src");
const EXCLUDED_DIRS = new Set(["app", "components", "lib", "registry"]);

function isDirectory(dirPath: string) {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch {
    return false;
  }
}

function formatName(segment: string) {
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getCategories(): string[] {
  return fs
    .readdirSync(SRC_ROOT)
    .filter((entry) => !EXCLUDED_DIRS.has(entry))
    .filter((entry) => isDirectory(path.join(SRC_ROOT, entry)))
    .sort();
}

export function getToolsByCategory(category: string): ToolSummary[] {
  const categoryPath = path.join(SRC_ROOT, category);

  if (!isDirectory(categoryPath)) {
    return [];
  }

  return fs
    .readdirSync(categoryPath)
    .filter((entry) => isDirectory(path.join(categoryPath, entry)))
    .map((toolId) => ({
      id: toolId,
      name: formatName(toolId),
      path: `/tools/${category}/${toolId}`,
      category,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getAllTools(): ToolSummary[] {
  return getCategories().flatMap((category) => getToolsByCategory(category));
}

export function getToolDefinition(
  category: string,
  toolid: string
): ToolDefinition | undefined {
  const indexPath = path.join(SRC_ROOT, category, toolid, "index.ts");

  if (!fs.existsSync(indexPath)) {
    return undefined;
  }

  return {
    id: toolid,
    name: formatName(toolid),
    category,
    indexPath,
  };
}
