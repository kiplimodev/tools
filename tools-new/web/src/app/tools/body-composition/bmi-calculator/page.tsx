import CalculatorLayout from "@/components/CalculatorLayout";
import { getBmi } from "@/lib/composition/body-composition";

export const metadata = {
  title: "BMI Calculator",
};

export default function BmiCalculatorPage() {
  const result = getBmi({
    weightKg: 80,
    heightCm: 180,
  });

  return (
    <CalculatorLayout
      title="BMI Calculator"
      description="Proof that BMI composition is wired correctly"
    >
      {result ? (
        <p>BMI: {result.bmi.toFixed(1)}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
