import CalculatorLayout from "@/components/CalculatorLayout";
import { getSwimmingCalories } from "@/lib/composition/calories";

export const metadata = {
  title: "Swimming Calories Calculator",
};

export default function SwimmingCaloriesCalculatorPage() {
  const calories = getSwimmingCalories();

  return (
    <CalculatorLayout
      title="Swimming Calories Calculator"
      description="Proof that swimming calorie composition is wired correctly"
    >
      <p>Calories burned: {calories}</p>
    </CalculatorLayout>
  );
}
