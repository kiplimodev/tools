// src/lib/composition/calories/biking.ts

import { calculator } from "@/lib/calculators/calories/bike-calorie-calculator";
import type { Input } from "@/lib/calculators/calories/bike-calorie-calculator";

type Result = {
  calories: number;
};

export function getBikeCalories(input: Input): Result | null {
  const calories = calculator(input);

  if (calories === null) return null;

  return { calories };
}
