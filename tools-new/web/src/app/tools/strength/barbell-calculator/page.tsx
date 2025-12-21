// src/app/tools/strength/barbell-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import BarbellCalculatorForm from "./BarbellCalculatorForm";
import { getBarbellLoad } from "@/lib/composition/strength/barbell";

type PageProps = {
  searchParams?: Promise<{
    targetWeightKg?: string;
    barWeightKg?: string;
  }>;
};

export default async function BarbellCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const targetWeightKg = params.targetWeightKg
    ? Number(params.targetWeightKg)
    : undefined;

  const barWeightKg = params.barWeightKg
    ? Number(params.barWeightKg)
    : undefined;

  const result =
    targetWeightKg && barWeightKg
      ? getBarbellLoad({
          targetWeightKg,
          barWeightKg,
        })
      : null;

  return (
    <CalculatorLayout
      title="Barbell Calculator"
      description="Calculate how much plate weight to load on a barbell"
    >
      <BarbellCalculatorForm
        defaultTargetWeightKg={targetWeightKg ?? 100}
        defaultBarWeightKg={barWeightKg ?? 20}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Total plate weight:{" "}
            {result.totalPlateWeightKg.toFixed(1)} kg
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
