import CalculatorLayout from "@/components/CalculatorLayout";
import { getOneRepMax } from "@/lib/composition/strength";

export const metadata = {
  title: "1 Rep Max Calculator",
};

export default function OneRepMaxCalculatorPage() {
  const result = getOneRepMax({
    weightKg: 100,
    reps: 5,
  });

  return (
    <CalculatorLayout
      title="1 Rep Max Calculator"
      description="Proof that one-rep max composition is wired correctly"
    >
      {result ? (
        <p>Estimated 1RM: {result.oneRepMaxKg.toFixed(1)} kg</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
