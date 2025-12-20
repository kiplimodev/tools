import CalculatorLayout from "@/components/CalculatorLayout";
import { getBodyMeasurement } from "@/lib/composition/body-composition";

export const metadata = {
  title: "Body Measurement Calculator",
};

export default function BodyMeasurementCalculatorPage() {
  const result = getBodyMeasurement({
    waistCm: 80,
    hipCm: 95,
    chestCm: 100,
  });

  return (
    <CalculatorLayout
      title="Body Measurement Calculator"
      description="Proof that body measurement composition is wired correctly"
    >
      {result ? (
        <p>Measurement score: {result.measurementScore.toFixed(2)}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
