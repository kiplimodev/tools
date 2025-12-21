import { calculator as workoutGenerator } from "@/lib/calculators/planners/workout-generator";

type Input = {
  goal: "strength" | "hypertrophy" | "endurance";
  level: "beginner" | "intermediate" | "advanced";
};

type Result = {
  workoutScore: number;
};

/**
 * Composition wrapper for workout generation.
 * Converts raw numeric output into a structured result.
 */
export function getWorkoutGenerator(input: Input): Result | null {
  const value = workoutGenerator(input);

  if (value === null) return null;

  return {
    workoutScore: value,
  };
}
