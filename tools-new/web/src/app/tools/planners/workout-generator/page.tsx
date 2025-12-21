// src/app/tools/planners/workout-generator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import WorkoutGeneratorForm from "./WorkoutGeneratorForm";
import { getWorkoutGenerator } from "@/lib/composition/planners";

type PageProps = {
  searchParams?: Promise<{
    goal?: "strength" | "hypertrophy" | "endurance";
    level?: "beginner" | "intermediate" | "advanced";
  }>;
};

export default async function WorkoutGeneratorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const goal = params.goal;
  const level = params.level;

  const result =
    goal && level
      ? getWorkoutGenerator({
          goal,
          level,
        })
      : null;

  return (
    <CalculatorLayout
      title="Workout Generator"
      description="Generate a workout plan based on your goal and experience level"
    >
      <WorkoutGeneratorForm
        defaultGoal={goal ?? "strength"}
        defaultLevel={level ?? "beginner"}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Workout score: {result.workoutScore}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
