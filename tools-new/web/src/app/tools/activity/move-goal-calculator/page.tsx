// src/app/tools/activity/move-goal-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import MoveGoalCalculatorForm from "./MoveGoalCalculatorForm";
import { getMoveGoal } from "@/lib/composition/activity/move-goal";

type PageProps = {
  searchParams?: Promise<{
    currentStepsPerDay?: string;
    increasePercent?: string;
  }>;
};

export default async function MoveGoalCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const currentStepsPerDay = params.currentStepsPerDay
    ? Number(params.currentStepsPerDay)
    : undefined;

  const increasePercent = params.increasePercent
    ? Number(params.increasePercent)
    : undefined;

  const result =
    currentStepsPerDay && increasePercent
      ? getMoveGoal({
          currentStepsPerDay,
          increasePercent,
        })
      : null;

  return (
    <CalculatorLayout
      title="Move Goal Calculator"
      description="Calculate a new daily step goal based on a percentage increase"
    >
      <MoveGoalCalculatorForm
        defaultCurrentStepsPerDay={currentStepsPerDay ?? 8000}
        defaultIncreasePercent={increasePercent ?? 10}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Target steps per day: {Math.round(result.targetStepsPerDay)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
