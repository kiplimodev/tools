import CalculatorLayout from "@/components/CalculatorLayout";
import { getBarbellLoad } from "@/lib/composition/strength";

export const metadata = {
  title: "Barbell Calculator",
};

export default function BarbellCalculatorPage() {
  const result = getBarbellLoad({
    targetWeightKg: 100,
    barWeightKg: 20,
  });

  return (
    <CalculatorLayout
      title="Barbell Calculator"
      description="Proof that barbell composition is wired correctly"
    >
      {result ? (
        <p>Total plate weight: {result.totalPlateWeightKg} kg</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
