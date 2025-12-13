import { CalculatorInput, CalculatorOutput } from "./types";
import { calculateCore } from "./utils";

/**
 * Entry point for this calculator.
 */
export function calculate(input: CalculatorInput): CalculatorOutput {
  const hasGoal = Boolean(input.goal);
  const hasAge = typeof input.age === "number" && !Number.isNaN(input.age);

  if (!hasGoal || !hasAge) {
    return {
      recommendedSteps: 0,
      category: "unknown",
      estimatedCalories: undefined,
      deltaFromCurrent: undefined,
    };
  }

  return calculateCore(input);
}
