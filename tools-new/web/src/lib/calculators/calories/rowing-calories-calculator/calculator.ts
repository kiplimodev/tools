import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates calories burned during rowing using METs.
 *
 * Formula:
 * calories = MET × weight(kg) × duration(hours)
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, durationMinutes, mets } = input;

  if (weightKg <= 0) return null;
  if (durationMinutes <= 0) return null;
  if (mets <= 0) return null;

  const hours = durationMinutes / 60;

  return mets * weightKg * hours;
};
