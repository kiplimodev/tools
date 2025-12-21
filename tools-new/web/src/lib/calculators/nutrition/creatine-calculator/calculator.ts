import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates daily creatine dosage.
 *
 * Loading: 0.3 g/kg/day
 * Maintenance: 0.03 g/kg/day
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, protocol } = input;

  if (weightKg <= 0) return null;

  if (protocol === "loading") {
    return weightKg * 0.3;
  }

  if (protocol === "maintenance") {
    return weightKg * 0.03;
  }

  return null;
};
