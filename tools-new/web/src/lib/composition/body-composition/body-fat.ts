import { calculator } from "@/lib/calculators/body-composition/body-fat-calculator";
import type { Input } from "@/lib/calculators/body-composition/body-fat-calculator";

type Result = {
  bodyFatPercentage: number;
};

export function getBodyFat(input: Input): Result | null {
  const value = calculator(input);
  if (value === null) return null;

  return { bodyFatPercentage: value };
}
