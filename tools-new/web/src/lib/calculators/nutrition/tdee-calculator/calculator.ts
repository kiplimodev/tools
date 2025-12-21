import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates Total Daily Energy Expenditure (TDEE)
 * using the Mifflin–St Jeor equation.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, heightCm, age, sex, activityMultiplier } = input;

  if (
    weightKg <= 0 ||
    heightCm <= 0 ||
    age <= 0 ||
    activityMultiplier <= 0
  ) {
    return null;
  }

  const bmr =
    sex === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  return bmr * activityMultiplier;
};
