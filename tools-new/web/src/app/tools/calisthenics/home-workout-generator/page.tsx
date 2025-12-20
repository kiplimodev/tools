import CalculatorLayout from "@/components/CalculatorLayout";
import { getHomeWorkout } from "@/lib/composition/calisthenics";

export const metadata = {
  title: "Home Workout Generator",
};

export default function HomeWorkoutGeneratorPage() {
  const result = getHomeWorkout({
    level: "beginner",
    durationMinutes: 30,
  });

  return (
    <CalculatorLayout
      title="Home Workout Generator"
      description="Proof that home workout composition is wired correctly"
    >
      {result ? (
        <p>Number of exercises: {result.exercisesCount}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
