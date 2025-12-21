import CalculatorLayout from "@/components/CalculatorLayout";
import WaistToHeightRatioCalculatorForm from "./WaistToHeightRatioCalculatorForm";
import { getWaistToHeightRatio } from "@/lib/composition/body-composition/waist-to-height";

type PageProps = {
  searchParams?: Promise<{
    waistCm?: string;
    heightCm?: string;
  }>;
};

export default async function WaistToHeightRatioCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const waistCm = params.waistCm
    ? Number(params.waistCm)
    : undefined;

  const heightCm = params.heightCm
    ? Number(params.heightCm)
    : undefined;

  const result =
    waistCm && heightCm
      ? getWaistToHeightRatio(waistCm, heightCm)
      : null;

  return (
    <CalculatorLayout
      title="Waist-to-Height Ratio Calculator"
      description="Evaluate health risk using waist-to-height ratio"
    >
      <WaistToHeightRatioCalculatorForm
        defaultWaistCm={waistCm ?? 85}
        defaultHeightCm={heightCm ?? 175}
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
