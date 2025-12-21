import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Generates a numeric workout complexity score.
 *
 * This is a deterministic placeholder engine.
 * Composition will later turn this into a structured plan.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { goal, level } = input;

  if (!goal || !level) return null;

  const goalFactor =
    goal === "strength" ? 3 :
    goal === "hypertrophy" ? 2 :
    1;

  const levelFactor =
    level === "beginner" ? 1 :
    level === "intermediate" ? 2 :
    3;

  return goalFactor * levelFactor;
};
