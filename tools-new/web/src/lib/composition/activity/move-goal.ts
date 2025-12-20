import { calculator as moveGoalCalculator } from "@/lib/calculators/activity/move-goal-calculator";

type Input = {
  currentStepsPerDay: number;
  increasePercent: number;
};

type Result = {
  targetStepsPerDay: number;
};

/**
 * Composition wrapper for move goal calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getMoveGoal(input: Input): Result | null {
  const value = moveGoalCalculator(input);

  if (value === null) return null;

  return {
    targetStepsPerDay: value,
  };
}
