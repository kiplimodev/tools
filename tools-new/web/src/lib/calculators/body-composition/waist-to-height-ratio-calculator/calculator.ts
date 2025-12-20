import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates waist-to-height ratio.
 *
 * Formula:
 * ratio = waist / height
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { waistCm, heightCm } = input;

  if (waistCm <= 0) return null;
  if (heightCm <= 0) return null;

  return waistCm / heightCm;
};
