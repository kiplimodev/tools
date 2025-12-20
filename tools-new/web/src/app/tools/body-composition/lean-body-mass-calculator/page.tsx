import CalculatorLayout from "@/components/CalculatorLayout";
import { getLeanBodyMass } from "@/lib/composition/body-composition";

export const metadata = {
  title: "Lean Body Mass Calculator",
};

export default function LeanBodyMassCalculatorPage() {
  const result = getLeanBodyMass({
    weightKg: 80,
    bodyFatPercentage: 20,
  });

  return (
    <CalculatorLayout
      title="Lean Body Mass Calculator"
      description="Proof that lean body mass composition is wired correctly"
    >
      {result ? (
        <p>Lean body mass: {result.leanBodyMassKg.toFixed(1)} kg</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
