import { categories, getTool as getRegistryTool, ToolCategory, ToolMeta } from "@/registry/registry";
import { CategoryIcons, RunIcon } from "@/components/icons";
import type { ComponentType } from "react";
import { ZodSchema } from "zod";

const categoryIcons = CategoryIcons;

export interface CategorySummary {
  id: string;
  name: string;
  icon: ComponentType<any>;
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

function mapCategory(category: ToolCategory): CategorySummary {
  return {
    id: category.id,
    name: category.name,
    description: category.description,
    icon: categoryIcons[category.id] ?? RunIcon,
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
