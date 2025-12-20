import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Running calories burned calculator.
 *
 * Formula (simplified MET-based):
 * Calories = MET × weight(kg) × time(hours)
 *
 * Running MET ≈ 9.8 (moderate steady pace)
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, durationMinutes } = input;

  if (weightKg <= 0) return null;
  if (durationMinutes <= 0) return null;

  const MET = 9.8;
  const hours = durationMinutes / 60;

  return MET * weightKg * hours;
};
