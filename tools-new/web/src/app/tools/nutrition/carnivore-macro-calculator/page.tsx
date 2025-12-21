import CalculatorLayout from "@/components/CalculatorLayout";
import { getCarnivoreMacros } from "@/lib/composition/nutrition";

export const metadata = {
  title: "Carnivore Macro Calculator",
};

export default function CarnivoreMacroCalculatorPage() {
  const result = getCarnivoreMacros({
    calories: 2500,
    proteinGrams: 180,
  });

  return (
    <CalculatorLayout
      title="Carnivore Macro Calculator"
      description="Proof that carnivore macro composition is wired correctly"
    >
      {result ? (
        <p>Required fat intake: {result.fatGrams.toFixed(1)} g</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
