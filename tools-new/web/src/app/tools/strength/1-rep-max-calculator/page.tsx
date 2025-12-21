// src/app/tools/strength/1-rep-max-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import RepMaxCalculatorForm from "./1RepMaxCalculatorForm";
import { getOneRepMax } from "@/lib/composition/strength/one-rep-max";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    reps?: string;
  }>;
};

export default async function OneRepMaxCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const reps = params.reps ? Number(params.reps) : undefined;

  const result =
    weightKg && reps
      ? getOneRepMax({
          weightKg,
          reps,
        })
      : null;

  return (
    <CalculatorLayout
      title="1-Rep Max Calculator"
      description="Estimate your one-rep max from weight and reps"
    >
      <RepMaxCalculatorForm
        defaultWeightKg={weightKg ?? 100}
        defaultReps={reps ?? 5}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Estimated 1RM: {result.oneRepMaxKg.toFixed(1)} kg</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
