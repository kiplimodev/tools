import CalculatorLayout from "@/components/CalculatorLayout";
import { getBodyRecomposition } from "@/lib/composition/body-composition";

export const metadata = {
  title: "Body Recomposition Calculator",
};

export default function BodyRecompositionCalculatorPage() {
  const result = getBodyRecomposition({
    weightKg: 80,
    bodyFatPercent: 25,
    targetBodyFatPercent: 15,
  });

  return (
    <CalculatorLayout
      title="Body Recomposition Calculator"
      description="Proof that body recomposition composition is wired correctly"
    >
      {result ? (
        <>
          <p>Target weight: {result.targetWeightKg.toFixed(1)} kg</p>
          <p>Weight change: {result.weightChangeKg.toFixed(1)} kg</p>
        </>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
