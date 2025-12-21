import CalculatorLayout from "@/components/CalculatorLayout";
import { getIntermittentFasting } from "@/lib/composition/nutrition";

export const metadata = {
  title: "Intermittent Fasting Calculator",
};

export default function IntermittentFastingCalculatorPage() {
  const result = getIntermittentFasting({
    startHour: 20,
    endHour: 12,
  });

  return (
    <CalculatorLayout
      title="Intermittent Fasting Calculator"
      description="Proof that intermittent fasting composition is wired correctly"
    >
      {result ? (
        <p>Fasting duration: {result.fastingHours} hours</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
