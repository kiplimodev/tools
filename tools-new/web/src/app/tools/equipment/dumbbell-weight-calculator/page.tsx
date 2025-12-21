import CalculatorLayout from "@/components/CalculatorLayout";
import { getDumbbellWeight } from "@/lib/composition/equipment";

export const metadata = {
  title: "Dumbbell Weight Calculator",
};

export default function DumbbellWeightCalculatorPage() {
  const result = getDumbbellWeight({
    targetWeightKg: 40,
    handleWeightKg: 10,
  });

  return (
    <CalculatorLayout
      title="Dumbbell Weight Calculator"
      description="Proof that dumbbell weight composition is wired correctly"
    >
      {result ? (
        <p>Plate weight per dumbbell: {result.plateWeightKg} kg</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
