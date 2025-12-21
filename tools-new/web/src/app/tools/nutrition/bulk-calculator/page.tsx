import CalculatorLayout from "@/components/CalculatorLayout";
import { getBulkCalories } from "@/lib/composition/nutrition";

export const metadata = {
  title: "Bulk Calorie Calculator",
};

export default function BulkCalculatorPage() {
  const result = getBulkCalories({
    maintenanceCalories: 2500,
    surplusCalories: 300,
  });

  return (
    <CalculatorLayout
      title="Bulk Calorie Calculator"
      description="Proof that bulk calorie composition is wired correctly"
    >
      {result ? (
        <p>Total daily calories for bulking: {result.totalCalories} kcal</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
