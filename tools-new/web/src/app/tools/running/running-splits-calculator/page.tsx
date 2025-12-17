import CalculatorLayout from "@/components/CalculatorLayout";
import { getRunningSplits } from "@/lib/composition/running";

export const metadata = {
  title: "Running Splits Calculator",
};

export default function RunningSplitsCalculatorPage() {
  const result = getRunningSplits({
    distanceMeters: 5000,
    timeSeconds: 1500,
    splitMeters: 1000,
  });

  return (
    <CalculatorLayout
      title="Running Splits Calculator"
      description="Proof that split calculations are wired correctly"
    >
      {result ? (
        <p>Split time (seconds): {result.splitSeconds}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
