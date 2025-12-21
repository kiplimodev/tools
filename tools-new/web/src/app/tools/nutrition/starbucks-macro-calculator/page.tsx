import CalculatorLayout from "@/components/CalculatorLayout";
import StarbucksMacroCalculatorForm from "./StarbucksMacroCalculatorForm";
import { getStarbucksMacros } from "@/lib/composition/nutrition/starbucks";

type PageProps = {
  searchParams?: Promise<{
    calories?: string;
    proteinGrams?: string;
    carbsGrams?: string;
    fatGrams?: string;
  }>;
};

export default async function StarbucksMacroCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const calories = params.calories ? Number(params.calories) : undefined;
  const proteinGrams = params.proteinGrams
    ? Number(params.proteinGrams)
    : undefined;
  const carbsGrams = params.carbsGrams
    ? Number(params.carbsGrams)
    : undefined;
  const fatGrams = params.fatGrams ? Number(params.fatGrams) : undefined;

  const result =
    calories &&
    proteinGrams &&
    carbsGrams &&
    fatGrams
      ? getStarbucksMacros({
          calories,
          proteinGrams,
          carbsGrams,
          fatGrams,
        })
      : null;

  return (
    <CalculatorLayout
      title="Starbucks Macro Calculator"
      description="View macronutrient breakdown for Starbucks items"
    >
      <StarbucksMacroCalculatorForm
        defaultCalories={calories ?? 250}
        defaultProteinGrams={proteinGrams ?? 10}
        defaultCarbsGrams={carbsGrams ?? 30}
        defaultFatGrams={fatGrams ?? 8}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Calories: {result.calories}</p>
          <p>Protein: {result.proteinGrams} g</p>
          <p>Carbs: {result.carbsGrams} g</p>
          <p>Fat: {result.fatGrams} g</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
