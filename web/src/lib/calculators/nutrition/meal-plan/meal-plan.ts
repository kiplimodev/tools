export interface MealPlanResult {
  caloriesPerMeal: number;
  proteinPerMeal: number;
  carbPerMeal: number;
  fatPerMeal: number;
}

export function mealPlanBreakdown(calories: number, meals: number, proteinGrams: number, carbGrams: number, fatGrams: number): MealPlanResult {
  const mealsCount = Math.max(1, meals);
  return {
    caloriesPerMeal: parseFloat((calories / mealsCount).toFixed(0)),
    proteinPerMeal: parseFloat((proteinGrams / mealsCount).toFixed(1)),
    carbPerMeal: parseFloat((carbGrams / mealsCount).toFixed(1)),
    fatPerMeal: parseFloat((fatGrams / mealsCount).toFixed(1)),
  };
}
