import CalculatorLayout from "@/components/CalculatorLayout";
import { getFatIntake } from "@/lib/composition/nutrition";

export const metadata = {
  title: "Fat Intake Calculator",
};

export default function FatIntakeCalculatorPage() {
  const result = getFatIntake({
    weightKg: 80,
    goal: "moderate",
  });

  return (
    <CalculatorLayout
      title="Fat Intake Calculator"
      description="Proof that fat intake composition is wired correctly"
    >
      {result ? (
        <p>Recommended fat intake: {result.fatGramsPerDay} g/day</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
