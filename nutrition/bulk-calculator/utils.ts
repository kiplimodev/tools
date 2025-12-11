import { BulkCalculatorInput, BulkCalculatorOutput } from "./types";

function roundToTwoDecimals(value: number): number {
  return Math.round(value * 100) / 100;
}

function validateInputs(input: BulkCalculatorInput): void {
  const { tdee, surplusCalories, weightKg, proteinPerKg, fatPercentage } = input;
  if (tdee <= 0) {
    throw new Error("TDEE must be greater than 0");
  }
  if (surplusCalories <= 0) {
    throw new Error("Surplus calories must be greater than 0");
  }
  if (weightKg <= 0) {
    throw new Error("Weight must be greater than 0");
  }
  if (proteinPerKg <= 0) {
    throw new Error("Protein per kg must be greater than 0");
  }
  if (fatPercentage !== undefined && (fatPercentage <= 0 || fatPercentage >= 1)) {
    throw new Error("Fat percentage must be a decimal between 0 and 1");
  }
}

function calculateDailyCalories(tdee: number, surplus: number): number {
  return tdee + surplus;
}

function calculateProteinGrams(weightKg: number, proteinPerKg: number): number {
  return roundToTwoDecimals(weightKg * proteinPerKg);
}

function calculateFatGrams(totalCalories: number, fatPercentage: number): number {
  const fatCalories = totalCalories * fatPercentage;
  return roundToTwoDecimals(fatCalories / 9);
}

function calculateCarbGrams(totalCalories: number, proteinGrams: number, fatGrams: number): number {
  const caloriesFromProtein = proteinGrams * 4;
  const caloriesFromFat = fatGrams * 9;
  const remainingCalories = Math.max(0, totalCalories - caloriesFromProtein - caloriesFromFat);
  return roundToTwoDecimals(remainingCalories / 4);
}

function estimateWeightGain(surplusCalories: number): { weeklyGain: number; monthlyGain: number } {
  const weeklyGain = (surplusCalories * 7) / 7700;
  const monthlyGain = (surplusCalories * 30) / 7700;
  return { weeklyGain: roundToTwoDecimals(weeklyGain), monthlyGain: roundToTwoDecimals(monthlyGain) };
}

function estimateLeanVsFat(weeklyGainKg: number): { lean: number; fat: number } {
  const lean = weeklyGainKg * 0.6;
  const fat = weeklyGainKg * 0.4;
  return { lean: roundToTwoDecimals(lean), fat: roundToTwoDecimals(fat) };
}

export function calculateCore(input: BulkCalculatorInput): BulkCalculatorOutput {
  validateInputs(input);

  const fatPercentage = input.fatPercentage ?? 0.25;
  const proteinPerKg = input.proteinPerKg ?? 2.0;

  const dailyCalories = calculateDailyCalories(input.tdee, input.surplusCalories);
  const proteinGrams = calculateProteinGrams(input.weightKg, proteinPerKg);
  const fatGrams = calculateFatGrams(dailyCalories, fatPercentage);
  const carbGrams = calculateCarbGrams(dailyCalories, proteinGrams, fatGrams);

  const { weeklyGain, monthlyGain } = estimateWeightGain(input.surplusCalories);
  const { lean, fat } = estimateLeanVsFat(weeklyGain);

  return {
    dailyCalories: roundToTwoDecimals(dailyCalories),
    proteinGrams,
    fatGrams,
    carbGrams,
    weeklyGainKg: weeklyGain,
    monthlyGainKg: monthlyGain,
    leanMassGainKg: lean,
    fatMassGainKg: fat,
  };
}
