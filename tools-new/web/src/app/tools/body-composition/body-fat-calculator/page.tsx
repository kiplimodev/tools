import CalculatorLayout from "@/components/CalculatorLayout";
import { getBodyFat } from "@/lib/composition/body-composition";

export const metadata = {
  title: "Body Fat Calculator",
};

export default function BodyFatCalculatorPage() {
  const result = getBodyFat({
    weightKg: 80,
    heightCm: 180,
    age: 30,
    sex: "male",
  });

  return (
    <CalculatorLayout
      title="Body Fat Calculator"
      description="Proof that body fat composition is wired correctly"
    >
      {result ? (
        <p>Estimated body fat: {result.bodyFatPercentage.toFixed(1)}%</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
