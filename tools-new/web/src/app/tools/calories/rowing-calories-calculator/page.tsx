import CalculatorLayout from "@/components/CalculatorLayout";
import { getRowingCalories } from "@/lib/composition/calories";

export const metadata = {
  title: "Rowing Calories Calculator",
};

export default function RowingCaloriesCalculatorPage() {
  const result = getRowingCalories({
    weightKg: 70,
    durationMinutes: 30,
    mets: 7,
  });

  return (
    <CalculatorLayout
      title="Rowing Calories Calculator"
      description="Proof that rowing calories composition is wired correctly"
    >
      {result ? (
        <p>Calories burned: {result.calories}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
