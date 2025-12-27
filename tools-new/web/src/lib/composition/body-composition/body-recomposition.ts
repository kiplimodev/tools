import { calculator } from "@/lib/calculators/body-composition/body-recomposition-calculator";
import type { Input } from "@/lib/calculators/body-composition/body-recomposition-calculator";

type Result = {
  leanMassChangeKg: number;
  fatMassChangeKg: number;
};

export function getBodyRecomposition(input: Input): Result | null {
  const leanChange = calculator(input);
  if (leanChange === null) return null;

  const startFat =
    input.startingWeightKg *
    (input.startingBodyFatPercent / 100);

  const endFat =
    input.endingWeightKg *
    (input.endingBodyFatPercent / 100);

  return {
    leanMassChangeKg: leanChange,
    fatMassChangeKg: endFat - startFat,
  };
}
