// src/app/tools/equipment/dumbbell-weight-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import DumbbellWeightCalculatorForm from "./DumbbellWeightCalculatorForm";
import { getDumbbellWeight } from "@/lib/composition/equipment";

type PageProps = {
  searchParams?: Promise<{
    targetWeightKg?: string;
    handleWeightKg?: string;
  }>;
};

export default async function DumbbellWeightCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const targetWeightKg = params.targetWeightKg
    ? Number(params.targetWeightKg)
    : undefined;

  const handleWeightKg = params.handleWeightKg
    ? Number(params.handleWeightKg)
    : undefined;

  const result =
    targetWeightKg !== undefined && handleWeightKg !== undefined
      ? getDumbbellWeight({
          targetWeightKg,
          handleWeightKg,
        })
      : null;

  return (
    <CalculatorLayout
      title="Dumbbell Weight Calculator"
      description="Calculate how much weight to load on each dumbbell"
    >
      <DumbbellWeightCalculatorForm
        defaultTargetWeightKg={targetWeightKg ?? 20}
        defaultHandleWeightKg={handleWeightKg ?? 2}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Plate weight per dumbbell:{" "}
            <strong>{result.plateWeightKg.toFixed(1)} kg</strong>
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
