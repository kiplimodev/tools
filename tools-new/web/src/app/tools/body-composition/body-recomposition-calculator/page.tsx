import CalculatorLayout from "@/components/CalculatorLayout";
import BodyRecompositionForm from "./BodyRecompositionCalculatorForm";
import { getBodyRecomposition } from "@/lib/composition/body-composition/body-recomposition";

type PageProps = {
  searchParams?: Promise<{
    startWeight?: string;
    startBodyFat?: string;
    endWeight?: string;
    endBodyFat?: string;
  }>;
};

export default async function BodyRecompositionCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const startWeight = params.startWeight
    ? Number(params.startWeight)
    : undefined;

  const startBodyFat = params.startBodyFat
    ? Number(params.startBodyFat)
    : undefined;

  const endWeight = params.endWeight
    ? Number(params.endWeight)
    : undefined;

  const endBodyFat = params.endBodyFat
    ? Number(params.endBodyFat)
    : undefined;

  const result =
    startWeight &&
    startBodyFat &&
    endWeight &&
    endBodyFat
      ? getBodyRecomposition({
          startingWeightKg: startWeight,
          startingBodyFatPercent: startBodyFat,
          endingWeightKg: endWeight,
          endingBodyFatPercent: endBodyFat,
        })
      : null;

  return (
    <CalculatorLayout
      title="Body Recomposition Calculator"
      description="Estimate fat loss and muscle gain between two body composition measurements"
    >
      <BodyRecompositionForm
        defaultStartWeight={startWeight ?? 80}
        defaultStartBodyFat={startBodyFat ?? 25}
        defaultEndWeight={endWeight ?? 78}
        defaultEndBodyFat={endBodyFat ?? 22}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Lean mass change:{" "}
            {result.leanMassChangeKg.toFixed(2)} kg
          </p>
          <p>
            Fat mass change:{" "}
            {result.fatMassChangeKg.toFixed(2)} kg
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
