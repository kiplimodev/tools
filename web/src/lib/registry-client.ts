import { ToolDefinition, tools } from "@/registry/registry";

export interface ToolSummary {
  id: string;
  name: string;
  path: string;
  category: string;
  description: string;
}

export interface CategorySummary {
  id: string;
  label: string;
  description: string;
}

export { ToolDefinition };

const categoryDescriptions: Record<string, string> = {
  running: "Pace, interval, and performance calculators for every run.",
  calories: "Estimate calorie burn across popular activities and cardio machines.",
  "body-composition": "Measure and project changes to body metrics and ratios.",
  activity: "Plan daily movement goals and step targets.",
  strength: "Barbell, powerlifting, and training volume helpers for strength work.",
  calisthenics: "Bodyweight progressions, rep calculators, and home workouts.",
  nutrition: "Macros, fasting windows, supplements, and meal planning support.",
  planners: "Generate workouts and meal plans tailored to your goals.",
  trackers: "Track weight trends and progress over time.",
  equipment: "Utility helpers for gear like dumbbells and plates.",
};

const categoryOrder = Array.from(new Set(tools.map((tool) => tool.category)));

function formatCategoryLabel(category: string): string {
  return category
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getCategories(): CategorySummary[] {
  return categoryOrder.map((category) => ({
    id: category,
    label: formatCategoryLabel(category),
    description:
      categoryDescriptions[category] ?? `${formatCategoryLabel(category)} tools and calculators.`,
  }));
}

export function getCategorySummary(category: string): CategorySummary | undefined {
  if (!categoryOrder.includes(category)) return undefined;

  return {
    id: category,
    label: formatCategoryLabel(category),
    description:
      categoryDescriptions[category] ?? `${formatCategoryLabel(category)} tools and calculators.`,
  };
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
    }));
}

export function getAllTools(): ToolSummary[] {
  return tools.map((tool) => ({
    id: tool.id,
    name: tool.name,
    path: tool.path,
    category: tool.category,
    description: tool.description,
  }));
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
