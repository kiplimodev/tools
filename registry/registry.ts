import type { BmiInput } from "./tools/bmi";
import { calculateBmi } from "./tools/bmi";

export type ToolRunner = (inputs: unknown) => unknown | Promise<unknown>;

export type RegisteredTool = {
  id: string;
  name: string;
  run: ToolRunner;
};

export const registeredTools: RegisteredTool[] = [
  {
    id: "bmi",
    name: "BMI Calculator",
    run: (inputs) => calculateBmi(inputs as Partial<BmiInput>),
  },
];

function normalizeId(id: string): string {
  return id.trim().toLowerCase();
}

export function findTool(id: string): RegisteredTool | null {
  const normalized = normalizeId(id);
  return registeredTools.find((tool) => tool.id === normalized) ?? null;
}
