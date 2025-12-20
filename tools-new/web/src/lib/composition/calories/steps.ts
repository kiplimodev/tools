// src/lib/composition/calories/steps.ts

import { calculator } from "@/lib/calculators/calories/steps-to-calories-calculator";

type Input = {
  steps: number;
  weightKg: number;
};

export function getStepsCalories(input: Input) {
  const calories = calculator(input);

  if (calories === null) {
    return null;
  }

  return {
    calories,
  };
}
