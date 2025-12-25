import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Assumptions:
 * - 1 step ≈ 0.762 meters
 * - Average walking speed ≈ 5 km/h
 * - Walking MET ≈ 3.5
 *
 * Formula:
 * calories = MET × weightKg × hours
 */
export const calculator: CalculatorV1<Input> = ({
  steps,
  weightKg,
}) => {
  if (steps <= 0 || weightKg <= 0) return null;

  const metersPerStep = 0.762;
  const meters = steps * metersPerStep;

  const km = meters / 1000;
  const walkingSpeedKmh = 5;
  const hours = km / walkingSpeedKmh;

  const MET = 3.5;

  const calories = MET * weightKg * hours;

  return Math.round(calories);
};
