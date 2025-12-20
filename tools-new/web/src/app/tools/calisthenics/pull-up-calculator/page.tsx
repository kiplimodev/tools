import CalculatorLayout from "@/components/CalculatorLayout";
import { getPullUp } from "@/lib/composition/calisthenics";

export const metadata = {
  title: "Pull-Up Calculator",
};

export default function PullUpCalculatorPage() {
  const result = getPullUp({
    reps: 15,
  });

  return (
    <CalculatorLayout
      title="Pull-Up Calculator"
      description="Proof that pull-up composition is wired correctly"
    >
      {result ? (
        <p>Total pull-ups: {result.reps}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
