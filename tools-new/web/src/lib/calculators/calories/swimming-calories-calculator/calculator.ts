import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calories = MET × weight (kg) × hours
 */
export const calculator: CalculatorV1<Input> = ({
  weightKg,
  durationMinutes,
  met,
}) => {
  if (weightKg <= 0 || durationMinutes <= 0 || met <= 0) return null;

  const hours = durationMinutes / 60;
  return Math.round(met * weightKg * hours);
};
