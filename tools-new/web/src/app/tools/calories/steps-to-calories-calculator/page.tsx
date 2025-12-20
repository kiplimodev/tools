import CalculatorLayout from "@/components/CalculatorLayout";
import { getStepsCalories } from "@/lib/composition/calories";

export const metadata = {
  title: "Steps to Calories Calculator",
};

export default function StepsToCaloriesCalculatorPage() {
  const result = getStepsCalories({
    steps: 8000,
    weightKg: 70,
  });

  return (
    <CalculatorLayout
      title="Steps to Calories Calculator"
      description="Proof that steps-to-calories composition is wired correctly"
    >
      <p>Calories burned: {result?.calories}</p>
    </CalculatorLayout>
  );
}
