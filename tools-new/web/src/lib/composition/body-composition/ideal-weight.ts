import { calculator } from "@/lib/calculators/body-composition/ideal-weight-calculator";
import type { Input } from "@/lib/calculators/body-composition/ideal-weight-calculator";

type Result = {
  idealWeightKg: number;
};

export function getIdealWeight(input: Input): Result | null {
  const value = calculator(input);

  if (value === null) return null;

  return {
    idealWeightKg: value,
  };
}
