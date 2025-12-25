import { calculator } from "@/lib/calculators/calories/steps-to-calories-calculator";
import type { Input } from "@/lib/calculators/calories/steps-to-calories-calculator";

type Result = {
  calories: number;
};

export function getStepsCalories(input: Input): Result | null {
  const calories = calculator(input);

  if (calories === null) return null;

  return { calories };
}
