import CalculatorLayout from "@/components/CalculatorLayout";
import WaistToHipRatioCalculatorForm from "./WaistToHipRatioCalculatorForm";
import { getWaistToHipRatio } from "@/lib/composition/body-composition/waist-to-hip";

type PageProps = {
  searchParams?: Promise<{
    waistCm?: string;
    hipCm?: string;
  }>;
};

export default async function WaistToHipRatioCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const waistCm = params.waistCm ? Number(params.waistCm) : undefined;
  const hipCm = params.hipCm ? Number(params.hipCm) : undefined;

  const result =
    waistCm && hipCm
      ? getWaistToHipRatio({ waistCm, hipCm })
      : null;

  return (
    <CalculatorLayout
      title="Waist-to-Hip Ratio Calculator"
      description="Calculate waist-to-hip ratio for health risk assessment"
    >
      <WaistToHipRatioCalculatorForm
        defaultWaistCm={waistCm ?? 85}
        defaultHipCm={hipCm ?? 100}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Waist-to-hip ratio: {result.ratio.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
