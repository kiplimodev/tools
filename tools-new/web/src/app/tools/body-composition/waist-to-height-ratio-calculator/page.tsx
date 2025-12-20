import CalculatorLayout from "@/components/CalculatorLayout";
import { getWaistToHeightRatio } from "@/lib/composition/body-composition";

export const metadata = {
  title: "Waist-to-Height Ratio Calculator",
};

export default function WaistToHeightRatioPage() {
  const result = getWaistToHeightRatio(80, 175); // 80cm waist, 175cm height

  return (
    <CalculatorLayout
      title="Waist-to-Height Ratio Calculator"
      description="Proof that waist-to-height composition wiring works"
    >
      {result ? (
        <>
          <p>Ratio: {result.ratio.toFixed(2)}</p>
          <p>Category: {result.category}</p>
        </>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
