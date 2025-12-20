import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Estimates body fat percentage using the Deurenberg formula.
 *
 * Formula:
 * BMI = weight / (height^2)
 * BodyFat% = (1.20 × BMI) + (0.23 × age) − (10.8 × sex) − 5.4
 * where sex = 1 for male, 0 for female
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, heightCm, age, sex } = input;

  if (weightKg <= 0) return null;
  if (heightCm <= 0) return null;
  if (age <= 0) return null;

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  const sexValue = sex === "male" ? 1 : 0;

  return 1.2 * bmi + 0.23 * age - 10.8 * sexValue - 5.4;
};
