import { CalculatorInput, CalculatorOutput } from "./types";

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const { weightKg, durationMinutes, met } = input;

  if (weightKg <= 0 || durationMinutes <= 0 || met <= 0) {
    throw new Error("Weight, duration, and MET must be greater than zero.");
  }

  const durationHours = durationMinutes / 60;
  const caloriesBurned = met * weightKg * durationHours;

  return {
    caloriesBurned: Number(caloriesBurned.toFixed(2)),
  };
}
