import CalculatorLayout from "@/components/CalculatorLayout";
import { getRpeEstimate } from "@/lib/composition/strength";

export const metadata = {
  title: "RPE Calculator",
};

export default function RpeCalculatorPage() {
  const result = getRpeEstimate({
    weightKg: 100,
    reps: 5,
    rpe: 9,
  });

  return (
    <CalculatorLayout
      title="RPE Calculator"
      description="Proof that RPE composition is wired correctly"
    >
      {result ? (
        <p>
          Estimated 1RM: {result.estimatedOneRepMaxKg.toFixed(1)} kg
        </p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
