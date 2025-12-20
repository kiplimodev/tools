import { calculator } from "@/lib/calculators/calories/walking-calorie-calculator";

type Result = {
  calories: number;
  weightKg: number;
  durationMinutes: number;
};

export function getWalkingCalories(input: {
  weightKg: number;
  durationMinutes: number;
  met: number;
}): Result | null {
  const calories = calculator(input);
  if (calories === null) return null;

  return {
    calories,
    weightKg: input.weightKg,
    durationMinutes: input.durationMinutes,
  };
}
