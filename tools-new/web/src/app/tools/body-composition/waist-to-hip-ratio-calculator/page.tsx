import CalculatorLayout from "@/components/CalculatorLayout";
import { getWaistToHipRatio } from "@/lib/composition/body-composition";

export const metadata = {
  title: "Waist to Hip Ratio Calculator",
};

export default function WaistToHipRatioCalculatorPage() {
  const result = getWaistToHipRatio({
    waistCm: 80,
    hipCm: 95,
  });

  return (
    <CalculatorLayout
      title="Waist to Hip Ratio Calculator"
      description="Proof that waist-to-hip ratio composition is wired correctly"
    >
      {result !== null ? (
        <p>Waist to Hip Ratio: {result.ratio}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
