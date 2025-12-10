import { CalculatorInput, CalculatorOutput } from "./types";

type PaceLevel = CalculatorInput["pace"];

const MET_VALUES: Record<PaceLevel, number> = {
  slow: 2.0,
  moderate: 2.8,
  brisk: 3.5,
  "very-brisk": 5.0,
};

function getMETFromPace(pace: PaceLevel): number {
  const met = MET_VALUES[pace];
  if (met === undefined) {
    throw new Error(`Unsupported walking pace: ${pace}`);
  }
  return met;
}

function calculateCalories(weightKg: number, durationMinutes: number, metValue: number): number {
  const durationHours = durationMinutes / 60;
  const calories = metValue * weightKg * durationHours;
  return Math.round(calories);
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const metValue = getMETFromPace(input.pace);
  const caloriesBurned = calculateCalories(input.weightKg, input.durationMinutes, metValue);

  return {
    caloriesBurned,
    metValue,
  };
}

export { getMETFromPace, calculateCalories };
