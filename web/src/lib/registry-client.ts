import {
  categories,
  getTool as getRegistryTool,
  ToolCategory,
  ToolMeta,
} from "@/registry/registry";
import {
  ActivityIcon,
  ArmchairIcon,
  ChartLineIcon,
  DumbbellIcon,
  FlameIcon,
  FootprintsIcon,
  NotebookIcon,
  RunIcon,
  UtensilsIcon,
  WeightIcon,
} from "@/components/icons";
import { ReactNode } from "react";
import { ZodSchema } from "zod";

const categoryIcons: Record<string, ReactNode> = {
  running: <RunIcon className="h-4 w-4" />,
  calories: <FlameIcon className="h-4 w-4" />,
  "body-composition": <ActivityIcon className="h-4 w-4" />,
  activity: <FootprintsIcon className="h-4 w-4" />,
  strength: <DumbbellIcon className="h-4 w-4" />,
  calisthenics: <ArmchairIcon className="h-4 w-4" />,
  nutrition: <UtensilsIcon className="h-4 w-4" />,
  planners: <NotebookIcon className="h-4 w-4" />,
  trackers: <ChartLineIcon className="h-4 w-4" />,
  equipment: <WeightIcon className="h-4 w-4" />,
};

export interface CategorySummary {
  id: string;
  name: string;
  icon: ReactNode;
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
    icon: categoryIcons[category.id] ?? <RunIcon className="h-4 w-4" />,
  };
}

function mapTool(tool: ToolMeta): ToolSummary {
  return {
    id: tool.id,
    name: tool.name,
    path: tool.path,
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

export function getTool(category: string, toolId: string): FullToolDefinition {
  const tool = getRegistryTool(category, toolId);

  return {
    id: tool.id,
    name: tool.name,
    category: tool.category,
    description: tool.description,
    path: tool.path,
    schemas: {
      inputSchema: tool.schemas.inputSchema,
      outputSchema: tool.schemas.outputSchema,
    },
    calculate: tool.calculate,
  };
}
