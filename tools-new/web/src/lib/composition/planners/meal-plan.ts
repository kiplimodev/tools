import { calculator as mealPlanCalculator } from "@/lib/calculators/planners/meal-plan-generator";

type Input = {
  calories: number;
  proteinGrams: number;
  mealsPerDay: number;
};

type Result = {
  caloriesPerMeal: number;
};

/**
 * Composition wrapper for meal plan generation.
 * Adapts calculator output into a UI-safe structure.
 */
export function getMealPlan(input: Input): Result | null {
  const value = mealPlanCalculator(input);

  if (value === null) return null;

  return {
    caloriesPerMeal: value,
  };
}
