import CalculatorLayout from "@/components/CalculatorLayout";
import { getStrengthRatio } from "@/lib/composition/strength";

export const metadata = {
  title: "Strength Ratio Calculator",
};

export default function StrengthRatioCalculatorPage() {
  const result = getStrengthRatio({
    liftA: 180, // example: squat
    liftB: 120, // example: bench
  });

  return (
    <CalculatorLayout
      title="Strength Ratio Calculator"
      description="Proof that strength ratio composition is wired correctly"
    >
      {result ? (
        <p>Strength ratio: {result.ratio.toFixed(2)}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
