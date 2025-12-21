import CalculatorLayout from "@/components/CalculatorLayout";
import HomeWorkoutGeneratorForm from "./HomeWorkoutGeneratorForm";
import { getHomeWorkout } from "@/lib/composition/calisthenics";

type PageProps = {
  searchParams?: Promise<{
    level?: string;
    durationMinutes?: string;
  }>;
};

export default async function HomeWorkoutGeneratorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const level =
    params.level === "beginner" ||
    params.level === "intermediate" ||
    params.level === "advanced"
      ? params.level
      : undefined;

  const durationMinutes = params.durationMinutes
    ? Number(params.durationMinutes)
    : undefined;

  const result =
    level && durationMinutes
      ? getHomeWorkout({
          level,
          durationMinutes,
        })
      : null;

  return (
    <CalculatorLayout
      title="Home Workout Generator"
      description="Generate a simple home workout based on level and duration"
    >
      <HomeWorkoutGeneratorForm
        defaultLevel={level ?? "beginner"}
        defaultDurationMinutes={durationMinutes ?? 30}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Exercises included: {result.exercisesCount}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
