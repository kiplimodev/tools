// src/app/tools/strength/powerlifting-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import PowerliftingCalculatorForm from "./PowerliftingCalculatorForm";
import { getPowerliftingTotal } from "@/lib/composition/strength/powerlifting";

type PageProps = {
  searchParams?: Promise<{
    squatKg?: string;
    benchKg?: string;
    deadliftKg?: string;
  }>;
};

export default async function PowerliftingCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const squatKg = params.squatKg ? Number(params.squatKg) : undefined;
  const benchKg = params.benchKg ? Number(params.benchKg) : undefined;
  const deadliftKg = params.deadliftKg ? Number(params.deadliftKg) : undefined;

  const result =
    squatKg && benchKg && deadliftKg
      ? getPowerliftingTotal({
          squatKg,
          benchKg,
          deadliftKg,
        })
      : null;

  return (
    <CalculatorLayout
      title="Powerlifting Total Calculator"
      description="Calculate your total powerlifting score from squat, bench, and deadlift"
    >
      <PowerliftingCalculatorForm
        defaultSquatKg={squatKg ?? 180}
        defaultBenchKg={benchKg ?? 120}
        defaultDeadliftKg={deadliftKg ?? 220}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Total: {result.totalKg.toFixed(1)} kg</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
