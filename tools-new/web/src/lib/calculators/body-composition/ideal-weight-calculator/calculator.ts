import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates ideal body weight using the Devine formula.
 *
 * Male: 50 kg + 2.3 kg per inch over 5 ft
 * Female: 45.5 kg + 2.3 kg per inch over 5 ft
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { heightCm, sex } = input;

  if (heightCm <= 0) return null;

  const heightInches = heightCm / 2.54;
  const inchesOverFiveFeet = heightInches - 60;

  if (inchesOverFiveFeet < 0) return null;

  const base = sex === "male" ? 50 : 45.5;

  return base + 2.3 * inchesOverFiveFeet;
};
