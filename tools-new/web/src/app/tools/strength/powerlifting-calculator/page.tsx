import CalculatorLayout from "@/components/CalculatorLayout";
import { getPowerliftingTotal } from "@/lib/composition/strength";

export const metadata = {
  title: "Powerlifting Calculator",
};

export default function PowerliftingCalculatorPage() {
  const result = getPowerliftingTotal({
    squatKg: 200,
    benchKg: 140,
    deadliftKg: 240,
  });

  return (
    <CalculatorLayout
      title="Powerlifting Calculator"
      description="Proof that powerlifting composition is wired correctly"
    >
      {result ? (
        <p>Total lift: {result.totalKg} kg</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
