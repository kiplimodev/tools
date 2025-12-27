import CalculatorLayout from "@/components/CalculatorLayout";
import WaistToHipRatioForm from "./WaistToHipRatioCalculatorForm";
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
      description="Assess health risk using waist-to-hip ratio"
    >
      <WaistToHipRatioForm
        defaultWaistCm={waistCm ?? 80}
        defaultHipCm={hipCm ?? 100}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Ratio: {result.ratio.toFixed(2)}</p>
          <p>Category: {result.category}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
