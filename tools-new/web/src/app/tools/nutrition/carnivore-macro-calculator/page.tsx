import CalculatorLayout from "@/components/CalculatorLayout";
import CarnivoreMacroCalculatorForm from "./CarnivoreMacroCalculatorForm";
import { getCarnivoreMacros } from "@/lib/composition/nutrition/carnivore";

type PageProps = {
  searchParams?: Promise<{
    calories?: string;
    proteinGrams?: string;
  }>;
};

export default async function CarnivoreMacroCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const calories = params.calories ? Number(params.calories) : undefined;
  const proteinGrams = params.proteinGrams
    ? Number(params.proteinGrams)
    : undefined;

  const result =
    calories && proteinGrams
      ? getCarnivoreMacros({
          calories,
          proteinGrams,
        })
      : null;

  return (
    <CalculatorLayout
      title="Carnivore Macro Calculator"
      description="Estimate fat intake on a carnivore diet"
    >
      <CarnivoreMacroCalculatorForm
        defaultCalories={calories ?? 2500}
        defaultProteinGrams={proteinGrams ?? 180}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Estimated Fat Intake: {result.fatGrams.toFixed(1)} g</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
