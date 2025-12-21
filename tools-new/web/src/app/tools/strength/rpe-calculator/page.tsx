import CalculatorLayout from "@/components/CalculatorLayout";
import RpeCalculatorForm from "./RpeCalculatorForm";
import { getRpeEstimate } from "@/lib/composition/strength/rpe";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    reps?: string;
    rpe?: string;
  }>;
};

export default async function RpeCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const reps = params.reps ? Number(params.reps) : undefined;
  const rpe = params.rpe ? Number(params.rpe) : undefined;

  const result =
    weightKg && reps && rpe
      ? getRpeEstimate({
          weightKg,
          reps,
          rpe,
        })
      : null;

  return (
    <CalculatorLayout
      title="RPE Calculator"
      description="Estimate your one-rep max using RPE, weight, and reps"
    >
      <RpeCalculatorForm
        defaultWeightKg={weightKg ?? 100}
        defaultReps={reps ?? 5}
        defaultRpe={rpe ?? 8}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Estimated 1RM:{" "}
            {result.estimatedOneRepMaxKg.toFixed(1)} kg
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
