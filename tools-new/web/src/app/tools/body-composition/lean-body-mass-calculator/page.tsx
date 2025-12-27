import CalculatorLayout from "@/components/CalculatorLayout";
import LeanBodyMassCalculatorForm from "./LeanBodyMassCalculatorForm";
import { getLeanBodyMass } from "@/lib/composition/body-composition";

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
      description="Calculate your lean body mass based on weight and body fat percentage"
    >
      <LeanBodyMassCalculatorForm
        defaultWeightKg={weightKg ?? 80}
        defaultBodyFatPercentage={bodyFatPercentage ?? 20}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Lean Body Mass:{" "}
            {result.leanBodyMassKg.toFixed(1)} kg
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
