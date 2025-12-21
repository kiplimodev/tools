// src/app/tools/trackers/weight-tracker/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import WeightTrackerCalculatorForm from "./WeightTrackerCalculatorForm";
import { getWeightDelta } from "@/lib/composition/trackers";

type PageProps = {
  searchParams?: Promise<{
    startWeightKg?: string;
    currentWeightKg?: string;
  }>;
};

export default async function WeightTrackerPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const startWeightKg = params.startWeightKg
    ? Number(params.startWeightKg)
    : undefined;

  const currentWeightKg = params.currentWeightKg
    ? Number(params.currentWeightKg)
    : undefined;

  const result =
    startWeightKg !== undefined && currentWeightKg !== undefined
      ? getWeightDelta({
          startWeightKg,
          currentWeightKg,
        })
      : null;

  return (
    <CalculatorLayout
      title="Weight Tracker"
      description="Track your weight change over time"
    >
      <WeightTrackerCalculatorForm
        defaultStartWeightKg={startWeightKg ?? 80}
        defaultCurrentWeightKg={currentWeightKg ?? 75}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Weight change:{" "}
            <strong>
              {result.deltaKg > 0 ? "+" : ""}
              {result.deltaKg.toFixed(1)} kg
            </strong>
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
