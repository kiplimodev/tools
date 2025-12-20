import CalculatorLayout from "@/components/CalculatorLayout";
import { getPlateWeight } from "@/lib/composition/strength";

export const metadata = {
  title: "Plate Weight Calculator",
};

export default function PlateWeightCalculatorPage() {
  const result = getPlateWeight({
    targetWeightKg: 100,
    barbellWeightKg: 20,
  });

  return (
    <CalculatorLayout
      title="Plate Weight Calculator"
      description="Proof that plate weight composition is wired correctly"
    >
      {result ? (
        <p>Total plate weight required: {result.plateWeightKg} kg</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
