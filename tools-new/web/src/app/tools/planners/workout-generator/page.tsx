import CalculatorLayout from "@/components/CalculatorLayout";
import { getWorkoutGenerator } from "@/lib/composition/planners";

export const metadata = {
  title: "Workout Generator",
};

export default function WorkoutGeneratorPage() {
  const result = getWorkoutGenerator({
    goal: "strength",
    level: "beginner",
  });

  return (
    <CalculatorLayout
      title="Workout Generator"
      description="Proof that workout generator composition is wired correctly"
    >
      {result ? (
        <p>Workout score: {result.workoutScore}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
