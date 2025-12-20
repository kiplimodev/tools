import CalculatorLayout from "@/components/CalculatorLayout";
import { getMoveGoal } from "@/lib/composition/activity";

export const metadata = {
  title: "Move Goal Calculator",
};

export default function MoveGoalCalculatorPage() {
  const result = getMoveGoal({
    currentStepsPerDay: 10000,
    increasePercent: 25,
  });

  return (
    <CalculatorLayout
      title="Move Goal Calculator"
      description="Proof that move goal composition is wired correctly"
    >
      {result ? (
        <p>Target daily steps: {result.targetStepsPerDay}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
