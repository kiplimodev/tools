import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Body recomposition calculator
 *
 * Returns lean mass change in kg
 * (positive = muscle gain, negative = muscle loss)
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const {
    startingWeightKg,
    startingBodyFatPercent,
    endingWeightKg,
    endingBodyFatPercent,
  } = input;

  if (
    startingWeightKg <= 0 ||
    endingWeightKg <= 0 ||
    startingBodyFatPercent <= 0 ||
    endingBodyFatPercent <= 0 ||
    startingBodyFatPercent >= 100 ||
    endingBodyFatPercent >= 100
  ) {
    return null;
  }

  const startFatKg =
    startingWeightKg * (startingBodyFatPercent / 100);
  const endFatKg =
    endingWeightKg * (endingBodyFatPercent / 100);

  const startLeanKg = startingWeightKg - startFatKg;
  const endLeanKg = endingWeightKg - endFatKg;

  return endLeanKg - startLeanKg;
};
