import CalculatorLayout from "@/components/CalculatorLayout";
import { getWeightDelta } from "@/lib/composition/trackers";

export const metadata = {
  title: "Weight Tracker",
};

export default function WeightTrackerPage() {
  const result = getWeightDelta({
    startWeightKg: 80,
    currentWeightKg: 75,
  });

  return (
    <CalculatorLayout
      title="Weight Tracker"
      description="Proof that weight tracking composition is wired correctly"
    >
      {result ? (
        <p>Weight change: {result.deltaKg.toFixed(1)} kg</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
