import { CalculatorInput, CalculatorOutput } from "./types";

const MET_MAP: Record<CalculatorInput["intensity"], number> = {
  leisure: 4.0,
  moderate: 6.8,
  vigorous: 8.0,
  "very-vigorous": 10.0,
  race: 12.0,
};

function getMETFromIntensity(intensity: CalculatorInput["intensity"]): number {
  return MET_MAP[intensity];
}

function calculateCalories(
  weightKg: number,
  durationMinutes: number,
  metValue: number
): number {
  const durationHours = durationMinutes / 60;
  const calories = metValue * weightKg * durationHours;
  return Math.round(calories);
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const metValue = getMETFromIntensity(input.intensity);
  const caloriesBurned = calculateCalories(
    input.weightKg,
    input.durationMinutes,
    metValue
  );

  return {
    caloriesBurned,
    metValue,
  };
}

export const internals = {
  getMETFromIntensity,
  calculateCalories,
};
