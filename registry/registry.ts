import { calculateBmi } from "./tools/bmi";

export type ToolRun = (input: unknown) => unknown;

export type ToolDefinition = {
  name: string;
  run: ToolRun;
};

const registry: Record<string, ToolDefinition> = {
  bmi: {
    name: "BMI Calculator",
    run: (input) => calculateBmi(input as Parameters<typeof calculateBmi>[0]),
  },
};

function normalizeKey(key: string): string {
  return key.trim().toLowerCase();
}

export function getRegistry() {
  return registry;
}

export function findTool(key: string): ToolDefinition | null {
  const normalized = normalizeKey(key);
  return registry[normalized] ?? null;
}
