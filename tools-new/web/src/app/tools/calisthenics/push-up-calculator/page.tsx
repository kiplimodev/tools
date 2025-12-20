import CalculatorLayout from "@/components/CalculatorLayout";
import { getPushUpScore } from "@/lib/composition/calisthenics";

export const metadata = {
  title: "Push-Up Calculator",
};

export default function PushUpCalculatorPage() {
  const result = getPushUpScore({
    reps: 40,
  });

  return (
    <CalculatorLayout
      title="Push-Up Calculator"
      description="Proof that push-up composition is wired correctly"
    >
      {result ? (
        <p>Push-up score: {result.score}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
