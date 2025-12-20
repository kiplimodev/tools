import CalculatorLayout from "@/components/CalculatorLayout";
import { getRunningCalories } from "@/lib/composition/calories";

export const metadata = {
  title: "Running Calories Burned Calculator",
};

export default function RunningCaloriesBurnedPage() {
  const result = getRunningCalories({
    weightKg: 70,
    durationMinutes: 30,
  });

  return (
    <CalculatorLayout
      title="Running Calories Burned Calculator"
      description="Proof that running calorie calculations are wired correctly"
    >
      {result ? (
        <p>Calories burned: {result.calories}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
