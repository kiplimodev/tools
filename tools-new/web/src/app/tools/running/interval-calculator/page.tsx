import CalculatorLayout from "@/components/CalculatorLayout";
import { getIntervalWorkout } from "@/lib/composition/running";

export const metadata = {
  title: "Interval Calculator",
};

export default function IntervalCalculatorPage() {
  const result = getIntervalWorkout({
    runSeconds: 60,
    restSeconds: 30,
    repeats: 5,
  });

  return (
    <CalculatorLayout
      title="Interval Calculator"
      description="Proof that interval calculations are wired correctly"
    >
      {result ? (
        <>
          <p>Total time (seconds): {result.totalSeconds}</p>
          <p>Total time (minutes): {result.totalMinutes}</p>
        </>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
