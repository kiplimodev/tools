// src/app/tools/activity/steps-per-day-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import StepsPerDayCalculatorForm from "./StepsPerDayCalculatorForm";
import { getStepsPerDay } from "@/lib/composition/activity/steps-per-day";

type PageProps = {
  searchParams?: Promise<{
    activeCalories?: string;
    caloriesPerStep?: string;
  }>;
};

export default async function StepsPerDayCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const activeCalories = params.activeCalories
    ? Number(params.activeCalories)
    : undefined;

  const caloriesPerStep = params.caloriesPerStep
    ? Number(params.caloriesPerStep)
    : undefined;

  const result =
    activeCalories && caloriesPerStep
      ? getStepsPerDay({
          activeCalories,
          caloriesPerStep,
        })
      : null;

  return (
    <CalculatorLayout
      title="Steps Per Day Calculator"
      description="Estimate how many steps you need per day to reach your activity calorie goal"
    >
      <StepsPerDayCalculatorForm
        defaultActiveCalories={activeCalories ?? 500}
        defaultCaloriesPerStep={caloriesPerStep ?? 0.04}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Steps per day: {Math.round(result.stepsPerDay)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
