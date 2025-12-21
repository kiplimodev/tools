// src/lib/composition/calories/swimming.ts
import { calculator } from "@/lib/calculators/calories/swimming-calories-calculator";

type Input = {
  weightKg: number;
  durationMinutes: number;
  met: number;
};

type Result = {
  calories: number;
};

export function getSwimmingCalories(input: Input): Result | null {
  const calories = calculator(input);
  if (calories === null) return null;

  return { calories };
}
