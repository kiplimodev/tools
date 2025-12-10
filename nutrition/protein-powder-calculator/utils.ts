import { CalculatorInput, CalculatorOutput } from "./types";

const DEFAULT_CALORIES_PER_SCOOP = 120;
const DEFAULT_BAG_SIZE_GRAMS = 2000;
const DEFAULT_GRAMS_PER_SCOOP = 30;

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

function validateInputs(input: CalculatorInput): void {
  const { dailyProteinTarget, dietaryProteinIntake, proteinPerScoop, caloriesPerScoop, bagSizeGrams } = input;

  if (dailyProteinTarget < 0) {
    throw new Error("dailyProteinTarget must be zero or greater.");
  }
  if (dietaryProteinIntake < 0) {
    throw new Error("dietaryProteinIntake must be zero or greater.");
  }
  if (proteinPerScoop <= 0) {
    throw new Error("proteinPerScoop must be greater than zero.");
  }
  if (caloriesPerScoop !== undefined && caloriesPerScoop <= 0) {
    throw new Error("caloriesPerScoop must be greater than zero when provided.");
  }
  if (bagSizeGrams !== undefined && bagSizeGrams <= 0) {
    throw new Error("bagSizeGrams must be greater than zero when provided.");
  }
}

function calculateRequiredSupplement(input: CalculatorInput): number {
  const required = input.dailyProteinTarget - input.dietaryProteinIntake;
  return required > 0 ? required : 0;
}

function calculateScoopsPerDay(requiredProtein: number, proteinPerScoop: number): number {
  if (requiredProtein === 0) return 0;
  return requiredProtein / proteinPerScoop;
}

function calculateCalories(scoopsPerDay: number, caloriesPerScoop?: number): number {
  const caloriesValue = caloriesPerScoop ?? DEFAULT_CALORIES_PER_SCOOP;
  return scoopsPerDay * caloriesValue;
}

function calculateWeeklyTotals(scoopsPerDay: number, requiredProtein: number) {
  const weeklyScoops = scoopsPerDay * 7;
  const weeklyProteinFromPowder = requiredProtein * 7;
  return { weeklyScoops, weeklyProteinFromPowder };
}

function calculateDaysPerBag(scoopsPerDay: number, bagSizeGrams?: number): number {
  if (scoopsPerDay === 0) return 0;
  const totalScoopsPerBag = (bagSizeGrams ?? DEFAULT_BAG_SIZE_GRAMS) / DEFAULT_GRAMS_PER_SCOOP;
  return totalScoopsPerBag / scoopsPerDay;
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const requiredSupplementProtein = calculateRequiredSupplement(input);
  const scoopsPerDayRaw = calculateScoopsPerDay(requiredSupplementProtein, input.proteinPerScoop);
  const caloriesFromProteinPowderRaw = calculateCalories(scoopsPerDayRaw, input.caloriesPerScoop);
  const { weeklyScoops, weeklyProteinFromPowder } = calculateWeeklyTotals(
    scoopsPerDayRaw,
    requiredSupplementProtein
  );
  const daysPerBagRaw = calculateDaysPerBag(scoopsPerDayRaw, input.bagSizeGrams);

  return {
    requiredSupplementProtein: roundToOneDecimal(requiredSupplementProtein),
    scoopsPerDay: roundToOneDecimal(scoopsPerDayRaw),
    caloriesFromProteinPowder: roundToOneDecimal(caloriesFromProteinPowderRaw),
    weeklyScoops: roundToOneDecimal(weeklyScoops),
    weeklyProteinFromPowder: roundToOneDecimal(weeklyProteinFromPowder),
    daysPerBag: roundToOneDecimal(daysPerBagRaw),
    needsSupplement: requiredSupplementProtein > 0,
  };
}
