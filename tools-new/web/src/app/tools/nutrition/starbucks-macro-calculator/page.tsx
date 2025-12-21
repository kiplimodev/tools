import CalculatorLayout from "@/components/CalculatorLayout";
import { getStarbucksMacros } from "@/lib/composition/nutrition";

export const metadata = {
  title: "Starbucks Macro Calculator",
};

export default function StarbucksMacroCalculatorPage() {
  const result = getStarbucksMacros({
    calories: 250,
    proteinGrams: 12,
    carbsGrams: 30,
    fatGrams: 9,
  });

  return (
    <CalculatorLayout
      title="Starbucks Macro Calculator"
      description="Proof that Starbucks macro composition is wired correctly"
    >
      {result ? (
        <ul>
          <li>Calories: {result.calories}</li>
          <li>Protein: {result.proteinGrams} g</li>
          <li>Carbs: {result.carbsGrams} g</li>
          <li>Fat: {result.fatGrams} g</li>
        </ul>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
