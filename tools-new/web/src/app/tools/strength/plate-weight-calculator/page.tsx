// src/app/tools/strength/plate-weight-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import PlateWeightCalculatorForm from "./PlateWeightCalculatorForm";
import { getPlateWeight } from "@/lib/composition/strength/plate-weight";

type PageProps = {
  searchParams?: Promise<{
    targetWeightKg?: string;
    barbellWeightKg?: string;
  }>;
};

export default async function PlateWeightCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const targetWeightKg = params.targetWeightKg
    ? Number(params.targetWeightKg)
    : undefined;

  const barbellWeightKg = params.barbellWeightKg
    ? Number(params.barbellWeightKg)
    : undefined;

  const result =
    targetWeightKg && barbellWeightKg
      ? getPlateWeight({
          targetWeightKg,
          barbellWeightKg,
        })
      : null;

  return (
    <CalculatorLayout
      title="Plate Weight Calculator"
      description="Calculate total plate weight required on a barbell"
    >
      <PlateWeightCalculatorForm
        defaultTargetWeightKg={targetWeightKg ?? 100}
        defaultBarbellWeightKg={barbellWeightKg ?? 20}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Total plate weight:{" "}
            {result.plateWeightKg.toFixed(1)} kg
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
