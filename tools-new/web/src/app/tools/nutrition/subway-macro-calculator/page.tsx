import CalculatorLayout from "@/components/CalculatorLayout";
import { getSubwayMacros } from "@/lib/composition/nutrition";

export const metadata = {
  title: "Subway Macro Calculator",
};

export default function SubwayMacroCalculatorPage() {
  const result = getSubwayMacros({
    calories: 700,
    proteinGrams: 35,
    fatGrams: 20,
  });

  return (
    <CalculatorLayout
      title="Subway Macro Calculator"
      description="Proof that Subway macro composition is wired correctly"
    >
      {result ? (
        <p>Remaining calories: {result.remainingCalories} kcal</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
