import CalculatorLayout from "@/components/CalculatorLayout";
import { getLeanBulkCalories } from "@/lib/composition/nutrition";

export const metadata = {
  title: "Lean Bulk Calculator",
};

export default function LeanBulkCalculatorPage() {
  const result = getLeanBulkCalories({
    maintenanceCalories: 2500,
    surplusCalories: 300,
  });

  return (
    <CalculatorLayout
      title="Lean Bulk Calculator"
      description="Proof that lean bulk composition is wired correctly"
    >
      {result ? (
        <p>Total daily calories: {result.totalCalories} kcal</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
