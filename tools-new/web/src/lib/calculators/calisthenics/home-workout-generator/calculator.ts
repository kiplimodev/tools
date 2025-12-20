import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Selects a deterministic bodyweight workout based on level and time.
 *
 * Returns:
 * - number: total estimated exercises count
 * - null: if input is invalid
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { level, durationMinutes } = input;

  if (durationMinutes <= 0) return null;

  const baseExercises =
    level === "beginner"
      ? 4
      : level === "intermediate"
      ? 6
      : 8;

  const timeMultiplier = Math.floor(durationMinutes / 10);

  if (timeMultiplier <= 0) return null;

  return baseExercises * timeMultiplier;
};
