import { calculator as creatineCalculator } from "@/lib/calculators/nutrition/creatine-calculator";

type Input = {
  weightKg: number;
  protocol: "loading" | "maintenance";
};

type Result = {
  creatineGramsPerDay: number;
};

/**
 * Composition wrapper for creatine intake.
 * Adapts calculator output into a UI-safe object.
 */
export function getCreatineIntake(input: Input): Result | null {
  const value = creatineCalculator(input);

  if (value === null) return null;

  return {
    creatineGramsPerDay: value,
  };
}
