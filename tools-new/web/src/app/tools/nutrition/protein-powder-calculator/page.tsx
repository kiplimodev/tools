import CalculatorLayout from "@/components/CalculatorLayout";
import { getProteinPowder } from "@/lib/composition/nutrition";

export const metadata = {
  title: "Protein Powder Calculator",
};

export default function ProteinPowderCalculatorPage() {
  const result = getProteinPowder({
    proteinTargetGrams: 120,
    proteinPerScoopGrams: 24,
  });

  return (
    <CalculatorLayout
      title="Protein Powder Calculator"
      description="Proof that protein powder composition is wired correctly"
    >
      {result ? (
        <p>Scoops required: {result.scoopsRequired.toFixed(2)}</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
