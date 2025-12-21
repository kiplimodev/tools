import CalculatorLayout from "@/components/CalculatorLayout";
import TrainingVolumeCalculatorForm from "./TrainingVolumeCalculatorForm";
import { getTrainingVolume } from "@/lib/composition/strength/training-volume";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    reps?: string;
    sets?: string;
  }>;
};

export default async function TrainingVolumeCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const reps = params.reps ? Number(params.reps) : undefined;
  const sets = params.sets ? Number(params.sets) : undefined;

  const result =
    weightKg && reps && sets
      ? getTrainingVolume({
          weightKg,
          reps,
          sets,
        })
      : null;

  return (
    <CalculatorLayout
      title="Training Volume Calculator"
      description="Calculate total training volume from weight, reps, and sets"
    >
      <TrainingVolumeCalculatorForm
        defaultWeightKg={weightKg ?? 100}
        defaultReps={reps ?? 5}
        defaultSets={sets ?? 5}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Total volume: {result.totalVolumeKg.toFixed(1)} kg</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
