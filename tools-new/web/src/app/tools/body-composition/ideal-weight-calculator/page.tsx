import CalculatorLayout from "@/components/CalculatorLayout";
import { getIdealWeight } from "@/lib/composition/body-composition";

export const metadata = {
  title: "Ideal Weight Calculator",
};

export default function IdealWeightCalculatorPage() {
  const result = getIdealWeight({
    heightCm: 180,
    sex: "male",
  });

  return (
    <CalculatorLayout
      title="Ideal Weight Calculator"
      description="Proof that ideal weight composition is wired correctly"
    >
      {result ? (
        <p>Ideal weight: {result.idealWeightKg.toFixed(1)} kg</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
