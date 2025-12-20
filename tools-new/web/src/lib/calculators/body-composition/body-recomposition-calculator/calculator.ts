import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates target body weight required to reach a desired body fat percentage,
 * assuming lean mass is preserved.
 *
 * Formula:
 * Lean Mass = weight * (1 - bodyFat%)
 * Target Weight = leanMass / (1 - targetBodyFat%)
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, bodyFatPercent, targetBodyFatPercent } = input;

  if (weightKg <= 0) return null;
  if (bodyFatPercent <= 0 || bodyFatPercent >= 100) return null;
  if (targetBodyFatPercent <= 0 || targetBodyFatPercent >= 100) return null;

  const leanMassKg = weightKg * (1 - bodyFatPercent / 100);
  const targetWeightKg = leanMassKg / (1 - targetBodyFatPercent / 100);

  if (!Number.isFinite(targetWeightKg) || targetWeightKg <= 0) return null;

  return targetWeightKg;
};
