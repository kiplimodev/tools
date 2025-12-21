// src/app/tools/calories/swimming-calories-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import SwimmingCaloriesForm from "./SwimmingCaloriesForm";
import { getSwimmingCalories } from "@/lib/composition/calories";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    durationMinutes?: string;
    met?: string;
  }>;
};

export default async function SwimmingCaloriesCalculatorPage({
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
      ? getSwimmingCalories({
          weightKg,
          durationMinutes,
          met,
        })
      : null;

  return (
    <CalculatorLayout
      title="Swimming Calories Calculator"
      description="Calculate calories burned while swimming"
    >
      <SwimmingCaloriesForm
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
