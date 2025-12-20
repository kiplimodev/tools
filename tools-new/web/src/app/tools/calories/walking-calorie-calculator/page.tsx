import CalculatorLayout from "@/components/CalculatorLayout";
import { getWalkingCalories } from "@/lib/composition/calories";

export const metadata = {
  title: "Walking Calorie Calculator",
};

export default function WalkingCalorieCalculatorPage() {
  const result = getWalkingCalories({
    weightKg: 70,
    durationMinutes: 60,
    met: 3.5,
  });

  return (
    <CalculatorLayout
      title="Walking Calorie Calculator"
      description="Proof that walking calorie calculations are wired correctly"
    >
      {result ? (
        <p>Calories burned: {result.calories.toFixed(0)}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
