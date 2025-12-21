// src/app/tools/calories/treadmill-calorie-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import TreadmillCaloriesForm from "./TreadmillCaloriesForm";
import { getTreadmillCalories } from "@/lib/composition/calories";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    speedKmh?: string;
    durationMinutes?: string;
  }>;
};

export default async function TreadmillCaloriesCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const speedKmh = params.speedKmh ? Number(params.speedKmh) : undefined;
  const durationMinutes = params.durationMinutes
    ? Number(params.durationMinutes)
    : undefined;

  const result =
    weightKg && speedKmh && durationMinutes
      ? getTreadmillCalories({
          weightKg,
          speedKmh,
          durationMinutes,
        })
      : null;

  return (
    <CalculatorLayout
      title="Treadmill Calorie Calculator"
      description="Calculate calories burned on a treadmill"
    >
      <TreadmillCaloriesForm
        defaultWeightKg={weightKg ?? 70}
        defaultSpeedKmh={speedKmh ?? 8}
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
