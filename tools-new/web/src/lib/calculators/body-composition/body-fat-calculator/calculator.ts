import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Deurenberg body fat percentage formula
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { bmi, age, sex } = input;

  if (bmi <= 0 || age <= 0) return null;

  const sexFactor = sex === "male" ? 1 : 0;

  return 1.2 * bmi + 0.23 * age - 10.8 * sexFactor - 5.4;
};
