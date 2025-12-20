import { calculator as homeWorkoutCalculator } from "@/lib/calculators/calisthenics/home-workout-generator";

type Input = {
  level: "beginner" | "intermediate" | "advanced";
  durationMinutes: number;
};

type Result = {
  exercisesCount: number;
};

/**
 * Composition wrapper for home workout generation.
 * Adapts calculator output into a UI-safe object.
 */
export function getHomeWorkout(input: Input): Result | null {
  const value = homeWorkoutCalculator(input);

  if (value === null) return null;

  return {
    exercisesCount: value,
  };
}
