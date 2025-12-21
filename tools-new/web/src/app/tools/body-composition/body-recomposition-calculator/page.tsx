import CalculatorLayout from "@/components/CalculatorLayout";
import BodyRecompositionCalculatorForm from "./BodyRecompositionCalculatorForm";
import { getBodyRecomposition } from "@/lib/composition/body-composition/body-recomposition";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    bodyFatPercent?: string;
    targetBodyFatPercent?: string;
  }>;
};

export default async function BodyRecompositionCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const bodyFatPercent = params.bodyFatPercent
    ? Number(params.bodyFatPercent)
    : undefined;
  const targetBodyFatPercent = params.targetBodyFatPercent
    ? Number(params.targetBodyFatPercent)
    : undefined;

  const result =
    weightKg && bodyFatPercent && targetBodyFatPercent
      ? getBodyRecomposition({
          weightKg,
          bodyFatPercent,
          targetBodyFatPercent,
        })
      : null;

  return (
    <CalculatorLayout
      title="Body Recomposition Calculator"
      description="Estimate target weight based on body fat reduction while preserving lean mass"
    >
      <BodyRecompositionCalculatorForm
        defaultWeightKg={weightKg ?? 80}
        defaultBodyFatPercent={bodyFatPercent ?? 25}
        defaultTargetBodyFatPercent={targetBodyFatPercent ?? 15}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Target weight: {result.targetWeightKg.toFixed(1)} kg</p>
          <p>
            Weight change: {result.weightChangeKg.toFixed(1)} kg
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
