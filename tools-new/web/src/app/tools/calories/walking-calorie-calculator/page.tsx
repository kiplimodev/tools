import CalculatorLayout from "@/components/CalculatorLayout";
import WalkingCaloriesForm from "./WalkingCaloriesForm";
import { getWalkingCalories } from "@/lib/composition/calories/walking";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    durationMinutes?: string;
    met?: string;
  }>;
};

export default async function WalkingCalorieCalculatorPage({
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
      ? getWalkingCalories({
          weightKg,
          durationMinutes,
          met,
        })
      : null;

  return (
    <CalculatorLayout
      title="Walking Calorie Calculator"
      description="Calculate calories burned while walking"
    >
      <WalkingCaloriesForm
        defaultWeightKg={weightKg ?? 70}
        defaultDurationMinutes={durationMinutes ?? 30}
        defaultMet={met ?? 3.5}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Calories burned: {result.calories}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
