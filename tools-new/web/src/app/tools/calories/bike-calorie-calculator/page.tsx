import CalculatorLayout from "@/components/CalculatorLayout";
import { getBikeCalories } from "@/lib/composition/calories";

export const metadata = {
  title: "Bike Calorie Calculator",
};

export default function BikeCalorieCalculatorPage() {
  const result = getBikeCalories({
    weightKg: 70,
    durationMinutes: 60,
    met: 8,
  });

  return (
    <CalculatorLayout
      title="Bike Calorie Calculator"
      description="Proof that bike calorie composition is wired correctly"
    >
      {result ? (
        <p>Calories burned: {result.calories}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
