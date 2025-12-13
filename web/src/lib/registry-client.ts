import { categories, getTool as getRegistryTool, ToolCategory, ToolMeta } from "@/registry/registry";
import type { FieldMeta } from "./zod-utils";
import { ZodSchema } from "zod";

export type IconId =
  | "run"
  | "flame"
  | "activity"
  | "footprints"
  | "apple"
  | "clipboard"
  | "dumbbell"
  | "chart"
  | "wrench"
  | "person";

export interface CategorySummary {
  id: string;
  name: string;
  iconId: IconId;
  description: string;
}

export interface ToolSummary {
  id: string;
  name: string;
  path: string;
  description: string;
}

export interface FullToolDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  path: string;
  schemas: {
    inputSchema: ZodSchema<any>;
    outputSchema: ZodSchema<any>;
  };
  calculate: (input: any) => any;
}

export interface ClientToolDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  path: string;
  fields: FieldMeta[];
}

const categoryIconIds: Record<string, IconId> = {
  running: "run",
  calories: "flame",
  "body-composition": "activity",
  activity: "footprints",
  nutrition: "apple",
  planners: "clipboard",
  strength: "dumbbell",
  calisthenics: "person",
  trackers: "chart",
  equipment: "wrench",
};

function mapCategory(category: ToolCategory): CategorySummary {
  return {
    id: category.id,
    name: category.name,
    description: category.description,
    iconId: categoryIconIds[category.id] ?? "run",
  };
}

function mapTool(tool: ToolMeta): ToolSummary {
  return {
    id: tool.id,
    name: tool.name,
    path: `/tools/${tool.category}/${tool.id}`,
    description: tool.description,
  };
}

export function getAllCategories(): CategorySummary[] {
  return categories.map(mapCategory);
}

export function getToolsForCategory(category: string): ToolSummary[] {
  const categoryEntry = categories.find((entry) => entry.id === category);
  if (!categoryEntry) return [];
  return categoryEntry.tools.map(mapTool);
}

export function getTool(category: string, toolId: string): FullToolDefinition | null {
  try {
    const tool = getRegistryTool(category, toolId);

    return {
      id: tool.id,
      name: tool.name,
      category: tool.category,
      description: tool.description,
      path: `/tools/${tool.category}/${tool.id}`,
      schemas: {
        inputSchema: tool.schemas.inputSchema,
        outputSchema: tool.schemas.outputSchema,
      },
      calculate: tool.calculate,
    };
  } catch (error) {
    return null;
  }
}
