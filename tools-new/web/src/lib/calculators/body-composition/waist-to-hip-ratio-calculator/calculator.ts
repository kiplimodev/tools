import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates waist-to-hip ratio.
 *
 * Formula:
 * ratio = waist / hip
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { waistCm, hipCm } = input;

  if (waistCm <= 0) return null;
  if (hipCm <= 0) return null;

  return waistCm / hipCm;
};
