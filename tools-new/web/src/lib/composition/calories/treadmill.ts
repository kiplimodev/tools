import { calculator } from "@/lib/calculators/calories/treadmill-calorie-calculator";

export type TreadmillCaloriesResult = {
  calories: number;
  durationMinutes: number;
  speedKmh: number;
  weightKg: number;
};

type Input = {
  weightKg: number;
  speedKmh: number;
  durationMinutes: number;
};

export function getTreadmillCalories(
  input: Input
): TreadmillCaloriesResult | null {
  const calories = calculator(input);

  if (calories === null) return null;

  return {
    calories,
    weightKg: input.weightKg,
    speedKmh: input.speedKmh,
    durationMinutes: input.durationMinutes,
  };
}
