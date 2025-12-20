import { calculator } from "@/lib/calculators/calories/running-calories-burned-calculator";

type Result = {
  calories: number;
};

/**
 * Composition for Running Calories Burned.
 *
 * Adapts the pure calculator into a UI-ready shape.
 */
export function getRunningCalories(input: {
  weightKg: number;
  durationMinutes: number;
}): Result | null {
  const calories = calculator(input);

  if (calories === null) return null;

  return {
    calories,
  };
}
