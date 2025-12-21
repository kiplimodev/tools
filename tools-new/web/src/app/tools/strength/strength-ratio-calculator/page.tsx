import CalculatorLayout from "@/components/CalculatorLayout";
import StrengthRatioCalculatorForm from "./StrengthRatioCalculatorForm";
import { getStrengthRatio } from "@/lib/composition/strength/strength-ratio";

type PageProps = {
  searchParams?: Promise<{
    liftA?: string;
    liftB?: string;
  }>;
};

export default async function StrengthRatioCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const liftA = params.liftA ? Number(params.liftA) : undefined;
  const liftB = params.liftB ? Number(params.liftB) : undefined;

  const result =
    liftA && liftB
      ? getStrengthRatio({
          liftA,
          liftB,
        })
      : null;

  return (
    <CalculatorLayout
      title="Strength Ratio Calculator"
      description="Compare two lifts to calculate a strength ratio"
    >
      <StrengthRatioCalculatorForm
        defaultLiftA={liftA ?? 180}
        defaultLiftB={liftB ?? 140}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Strength ratio: {result.ratio.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
