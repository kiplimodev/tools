import CalculatorLayout from "@/components/CalculatorLayout";
import SubwayMacroCalculatorForm from "./SubwayMacroCalculatorForm";
import { getSubwayMacros } from "@/lib/composition/nutrition/subway";

type PageProps = {
  searchParams?: Promise<{
    calories?: string;
    proteinGrams?: string;
    fatGrams?: string;
  }>;
};

export default async function SubwayMacroCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const calories = params.calories ? Number(params.calories) : undefined;
  const proteinGrams = params.proteinGrams
    ? Number(params.proteinGrams)
    : undefined;
  const fatGrams = params.fatGrams ? Number(params.fatGrams) : undefined;

  const result =
    calories && proteinGrams && fatGrams
      ? getSubwayMacros({
          calories,
          proteinGrams,
          fatGrams,
        })
      : null;

  return (
    <CalculatorLayout
      title="Subway Macro Calculator"
      description="Calculate remaining calories after Subway macros"
    >
      <SubwayMacroCalculatorForm
        defaultCalories={calories ?? 800}
        defaultProteinGrams={proteinGrams ?? 40}
        defaultFatGrams={fatGrams ?? 20}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Remaining Calories: {result.remainingCalories.toFixed(0)}
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
