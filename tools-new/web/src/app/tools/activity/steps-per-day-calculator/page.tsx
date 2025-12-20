import CalculatorLayout from "@/components/CalculatorLayout";
import { getStepsPerDay } from "@/lib/composition/activity";

export const metadata = {
  title: "Steps Per Day Calculator",
};

export default function StepsPerDayCalculatorPage() {
  const result = getStepsPerDay({
    activeCalories: 500,
    caloriesPerStep: 0.04,
  });

  return (
    <CalculatorLayout
      title="Steps Per Day Calculator"
      description="Proof that steps-per-day composition is wired correctly"
    >
      {result ? (
        <p>Estimated steps per day: {Math.round(result.stepsPerDay)}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
