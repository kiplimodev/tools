import CalculatorLayout from "@/components/CalculatorLayout";
import RunningCaloriesBurnedCalculatorForm from "./RunningCaloriesBurnedCalculatorForm";
import { getRunningCalories } from "@/lib/composition/calories/running";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    durationMinutes?: string;
  }>;
};

export default async function RunningCaloriesBurnedCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const durationMinutes = params.durationMinutes
    ? Number(params.durationMinutes)
    : undefined;

  const result =
    weightKg && durationMinutes
      ? getRunningCalories({
          weightKg,
          durationMinutes,
        })
      : null;

  return (
    <CalculatorLayout
      title="Running Calories Burned Calculator"
      description="Estimate calories burned while running"
    >
      <RunningCaloriesBurnedCalculatorForm
        defaultWeightKg={weightKg ?? 70}
        defaultDurationMinutes={durationMinutes ?? 30}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Calories burned: {result.calories}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
