import CalculatorLayout from "@/components/CalculatorLayout";
import BodyMeasurementCalculatorForm from "./BodyMeasurementCalculatorForm";
import { getBodyMeasurement } from "@/lib/composition/body-composition/body-measurement";

type PageProps = {
  searchParams?: Promise<{
    waistCm?: string;
    hipCm?: string;
    chestCm?: string;
  }>;
};

export default async function BodyMeasurementCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const waistCm = params.waistCm ? Number(params.waistCm) : undefined;
  const hipCm = params.hipCm ? Number(params.hipCm) : undefined;
  const chestCm = params.chestCm ? Number(params.chestCm) : undefined;

  const result =
    waistCm && hipCm && chestCm
      ? getBodyMeasurement({
          waistCm,
          hipCm,
          chestCm,
        })
      : null;

  return (
    <CalculatorLayout
      title="Body Measurement Calculator"
      description="Evaluate body proportions using waist, hip, and chest measurements"
    >
      <BodyMeasurementCalculatorForm
        defaultWaistCm={waistCm ?? 85}
        defaultHipCm={hipCm ?? 100}
        defaultChestCm={chestCm ?? 100}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Measurement score: {result.measurementScore.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
