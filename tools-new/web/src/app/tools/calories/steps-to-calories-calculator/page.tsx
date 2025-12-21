// src/app/tools/calories/steps-to-calories-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import StepsToCaloriesCalculatorForm from "./StepsToCaloriesCalculatorForm";
import { getStepsCalories } from "@/lib/composition/calories/steps";

type PageProps = {
  searchParams?: Promise<{
    steps?: string;
    weightKg?: string;
  }>;
};

export default async function StepsToCaloriesCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const steps = params.steps ? Number(params.steps) : undefined;
  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;

  const result =
    steps && weightKg
      ? getStepsCalories({
          steps,
          weightKg,
        })
      : null;

  return (
    <CalculatorLayout
      title="Steps to Calories Calculator"
      description="Estimate calories burned from daily step count"
    >
      <StepsToCaloriesCalculatorForm
        defaultSteps={steps ?? 10000}
        defaultWeightKg={weightKg ?? 70}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Calories burned: {result.calories}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
