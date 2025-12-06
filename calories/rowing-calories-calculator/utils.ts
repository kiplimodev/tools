import { CalculatorInput, CalculatorOutput } from "./types";

type IntensityLevel = CalculatorInput["intensity"];

const MET_VALUES: Record<IntensityLevel, number> = {
  light: 3.5,
  moderate: 7.0,
  vigorous: 12.0,
};

function getMET(intensity: IntensityLevel): number {
  const met = MET_VALUES[intensity];
  if (met === undefined) {
    throw new Error(`Unsupported intensity level: ${intensity}`);
  }
  return met;
}

function calculateCalories(weightKg: number, durationMinutes: number, metValue: number): number {
  const durationHours = durationMinutes / 60;
  const calories = metValue * weightKg * durationHours;
  return Math.round(calories);
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const metValue = getMET(input.intensity);
  const caloriesBurned = calculateCalories(input.weightKg, input.durationMinutes, metValue);

  return {
    caloriesBurned,
    metValue,
  };
}

export { getMET, calculateCalories };
