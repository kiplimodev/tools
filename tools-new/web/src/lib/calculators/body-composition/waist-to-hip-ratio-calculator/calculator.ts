import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Waist-to-Hip Ratio Calculator
 *
 * Formula:
 * ratio = waistCm / hipCm
 */
export const calculator: CalculatorV1<Input> = ({ waistCm, hipCm }) => {
  if (waistCm <= 0 || hipCm <= 0) return null;

  return waistCm / hipCm;
};
