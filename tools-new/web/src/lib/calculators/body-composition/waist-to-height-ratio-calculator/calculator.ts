import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Waist-to-Height Ratio
 * ratio = waistCm / heightCm
 */
export const calculator: CalculatorV1<Input> = ({
  waistCm,
  heightCm,
}) => {
  if (waistCm <= 0 || heightCm <= 0) return null;

  return waistCm / heightCm;
};
