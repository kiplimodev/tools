import CalculatorLayout from "@/components/CalculatorLayout";
import RowingCaloriesCalculatorForm from "./RowingCaloriesCalculatorForm";
import { getRowingCalories } from "@/lib/composition/calories/rowing";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    durationMinutes?: string;
    mets?: string;
  }>;
};

export default async function RowingCaloriesCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const durationMinutes = params.durationMinutes
    ? Number(params.durationMinutes)
    : undefined;
  const mets = params.mets ? Number(params.mets) : undefined;

  const result =
    weightKg && durationMinutes && mets
      ? getRowingCalories({ weightKg, durationMinutes, mets })
      : null;

  return (
    <CalculatorLayout
      title="Rowing Calories Calculator"
      description="Calculate calories burned during rowing workouts"
    >
      <RowingCaloriesCalculatorForm
        defaultWeightKg={weightKg ?? 70}
        defaultDurationMinutes={durationMinutes ?? 30}
        defaultMets={mets ?? 7}
      />

      {result && (
        <div className="mt-6">
          <p>Calories burned: {Math.round(result.calories)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
