export interface MacroBreakdownResult {
  proteinGrams: number;
  carbGrams: number;
  fatGrams: number;
}

export function macroBreakdown(calories: number, proteinPercent: number, carbPercent: number, fatPercent: number): MacroBreakdownResult {
  const totalPercent = proteinPercent + carbPercent + fatPercent;
  if (totalPercent <= 0) throw new Error("Macro percentages must be greater than zero");

  const proteinCalories = (proteinPercent / totalPercent) * calories;
  const carbCalories = (carbPercent / totalPercent) * calories;
  const fatCalories = (fatPercent / totalPercent) * calories;

  return {
    proteinGrams: parseFloat((proteinCalories / 4).toFixed(1)),
    carbGrams: parseFloat((carbCalories / 4).toFixed(1)),
    fatGrams: parseFloat((fatCalories / 9).toFixed(1)),
  };
}
