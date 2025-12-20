import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates Body Mass Index (BMI).
 *
 * Formula:
 * BMI = weight / height²
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, heightCm } = input;

  if (weightKg <= 0) return null;
  if (heightCm <= 0) return null;

  const heightM = heightCm / 100;

  return weightKg / (heightM * heightM);
};
