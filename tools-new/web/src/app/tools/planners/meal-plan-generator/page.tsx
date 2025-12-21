import CalculatorLayout from "@/components/CalculatorLayout";
import { getMealPlan } from "@/lib/composition/planners";

export const metadata = {
  title: "Meal Plan Generator",
};

export default function MealPlanGeneratorPage() {
  const result = getMealPlan({
    calories: 2400,
    proteinGrams: 160,
    mealsPerDay: 4,
  });

  return (
    <CalculatorLayout
      title="Meal Plan Generator"
      description="Proof that meal plan composition is wired correctly"
    >
      {result ? (
        <p>Calories per meal: {result.caloriesPerMeal.toFixed(0)} kcal</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
