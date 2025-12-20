// src/lib/calculators/calories/bike-calorie-calculator/calculator.ts

import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Bike calorie burn calculator
 *
 * Formula:
 * calories = MET × weightKg × hours
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, durationMinutes, met } = input;

  if (
    weightKg <= 0 ||
    durationMinutes <= 0 ||
    met <= 0
  ) {
    return null;
  }

  const hours = durationMinutes / 60;

  return met * weightKg * hours;
};
