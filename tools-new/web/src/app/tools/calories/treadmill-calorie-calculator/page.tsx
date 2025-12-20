import CalculatorLayout from "@/components/CalculatorLayout";
import { getTreadmillCalories } from "@/lib/composition/calories";

export const metadata = {
  title: "Treadmill Calorie Calculator",
};

export default function TreadmillCalorieCalculatorPage() {
  const result = getTreadmillCalories({
    weightKg: 80,
    speedKmh: 8,
    durationMinutes: 30,
  });

  return (
    <CalculatorLayout
      title="Treadmill Calorie Calculator"
      description="Proof that treadmill calorie calculation is wired correctly"
    >
      {result ? (
        <>
          <p>Calories burned: {result.calories}</p>
          <p>Speed (km/h): {result.speedKmh}</p>
          <p>Duration (minutes): {result.durationMinutes}</p>
          <p>Weight (kg): {result.weightKg}</p>
        </>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
