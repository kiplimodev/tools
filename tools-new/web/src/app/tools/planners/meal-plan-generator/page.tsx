import CalculatorLayout from "@/components/CalculatorLayout";
import MealPlanGeneratorForm from "./MealPlanGeneratorForm";
import { getMealPlan } from "@/lib/composition/planners";

type PageProps = {
  searchParams?: Promise<{
    calories?: string;
    proteinGrams?: string;
    mealsPerDay?: string;
  }>;
};

export default async function MealPlanGeneratorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const calories = params.calories ? Number(params.calories) : undefined;
  const proteinGrams = params.proteinGrams
    ? Number(params.proteinGrams)
    : undefined;
  const mealsPerDay = params.mealsPerDay
    ? Number(params.mealsPerDay)
    : undefined;

  const result =
    calories && proteinGrams && mealsPerDay
      ? getMealPlan({
          calories,
          proteinGrams,
          mealsPerDay,
        })
      : null;

  return (
    <CalculatorLayout
      title="Meal Plan Generator"
      description="Generate calorie distribution per meal"
    >
      <MealPlanGeneratorForm
        defaultCalories={calories ?? 2400}
        defaultProteinGrams={proteinGrams ?? 160}
        defaultMealsPerDay={mealsPerDay ?? 3}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Calories per meal: {result.caloriesPerMeal.toFixed(0)}
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
