import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Devine Formula
 * Male: 50 + 0.9 × (heightCm − 152)
 * Female: 45.5 + 0.9 × (heightCm − 152)
 */
export const calculator: CalculatorV1<Input> = ({
  heightCm,
  sex,
}) => {
  if (heightCm <= 0) return null;

  const base = sex === "male" ? 50 : 45.5;
  return base + 0.9 * (heightCm - 152);
};
