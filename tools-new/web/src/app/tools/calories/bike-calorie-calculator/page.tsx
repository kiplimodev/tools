// src/app/tools/calories/bike-calorie-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import BikeCalorieCalculatorForm from "./BikeCalorieCalculatorForm";
import { getBikeCalories } from "@/lib/composition/calories/biking";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    durationMinutes?: string;
    met?: string;
  }>;
};

export default async function BikeCalorieCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const durationMinutes = params.durationMinutes
    ? Number(params.durationMinutes)
    : undefined;
  const met = params.met ? Number(params.met) : undefined;

  const result =
    weightKg && durationMinutes && met
      ? getBikeCalories({
          weightKg,
          durationMinutes,
          met,
        })
      : null;

  return (
    <CalculatorLayout
      title="Bike Calorie Calculator"
      description="Calculate calories burned while cycling"
    >
      <BikeCalorieCalculatorForm
        defaultWeightKg={weightKg ?? 70}
        defaultDurationMinutes={durationMinutes ?? 30}
        defaultMet={met ?? 8}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Calories burned: {result.calories}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
