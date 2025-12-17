import CalculatorLayout from "@/components/CalculatorLayout";
import { getSplit } from "@/lib/composition/running";

export const metadata = {
  title: "Split Calculator",
};

export default function SplitCalculatorPage() {
  const result = getSplit({
    totalDistanceMeters: 5000,
    totalTimeSeconds: 1500,
    splitDistanceMeters: 1000,
  });

  return (
    <CalculatorLayout
      title="Split Calculator"
      description="Proof that split composition is wired correctly"
    >
      {result ? (
        <p>Split time (seconds): {result.splitTimeSeconds}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
