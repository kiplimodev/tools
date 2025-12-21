import CalculatorLayout from "@/components/CalculatorLayout";
import LeanBodyMassCalculatorForm from "./LeanBodyMassCalculatorForm";
import { getLeanBodyMass } from "@/lib/composition/body-composition/lean-body-mass";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    bodyFatPercentage?: string;
  }>;
};

export default async function LeanBodyMassCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg
    ? Number(params.weightKg)
    : undefined;

  const bodyFatPercentage = params.bodyFatPercentage
    ? Number(params.bodyFatPercentage)
    : undefined;

  const result =
    weightKg && bodyFatPercentage
      ? getLeanBodyMass({
          weightKg,
          bodyFatPercentage,
        })
      : null;

  return (
    <CalculatorLayout
      title="Lean Body Mass Calculator"
      description="Calculate lean body mass from body weight and body fat percentage"
    >
      <LeanBodyMassCalculatorForm
        defaultWeightKg={weightKg ?? 81}
        defaultBodyFatPercentage={bodyFatPercentage ?? 21.5}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Lean body mass:{" "}
            {result.leanBodyMassKg.toFixed(1)} kg
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
