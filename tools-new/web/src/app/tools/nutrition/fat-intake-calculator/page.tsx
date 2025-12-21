import CalculatorLayout from "@/components/CalculatorLayout";
import FatIntakeCalculatorForm from "./FatIntakeCalculatorForm";
import { getFatIntake } from "@/lib/composition/nutrition/fat-intake";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    goal?: "low" | "moderate" | "high";
  }>;
};

export default async function FatIntakeCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const goal = params.goal;

  const result =
    weightKg && goal
      ? getFatIntake({
          weightKg,
          goal,
        })
      : null;

  return (
    <CalculatorLayout
      title="Fat Intake Calculator"
      description="Estimate daily fat intake based on body weight and dietary goal"
    >
      <FatIntakeCalculatorForm
        defaultWeightKg={weightKg ?? 70}
        defaultGoal={goal ?? "moderate"}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Daily fat intake: {result.fatGramsPerDay} g</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
