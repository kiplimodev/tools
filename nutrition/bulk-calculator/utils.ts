import { CalculatorInput, CalculatorOutput } from "./types";

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

function validateInputs(input: CalculatorInput): void {
  if (input.weightKg <= 0) {
    throw new Error("Weight must be greater than 0");
  }
  if (input.tdee <= 0) {
    throw new Error("TDEE must be greater than 0");
  }
  if (input.bodyFatPercent !== undefined) {
    if (input.bodyFatPercent <= 0 || input.bodyFatPercent > 100) {
      throw new Error("Body fat percent must be between 0 and 100");
    }
  }
  if (input.surplusCalories !== undefined && input.surplusCalories < 0) {
    throw new Error("Surplus calories cannot be negative");
  }
  if (input.proteinPerKg !== undefined && input.proteinPerKg <= 0) {
    throw new Error("Protein per kg must be greater than 0");
  }
  if (input.fatPercent !== undefined) {
    if (input.fatPercent <= 0 || input.fatPercent >= 1) {
      throw new Error("Fat percent must be a decimal between 0 and 1");
    }
  }
}

function computeDailyCalories(tdee: number, surplusCalories?: number): number {
  const surplus = surplusCalories ?? 300;
  return tdee + surplus;
}

function computeProtein(weightKg: number, proteinPerKg?: number): number {
  const proteinTarget = weightKg * (proteinPerKg ?? 1.8);
  return roundToOneDecimal(proteinTarget);
}

function computeFat(dailyCalories: number, fatPercent?: number): number {
  const percent = fatPercent ?? 0.25;
  const fatCalories = dailyCalories * percent;
  const fatGrams = fatCalories / 9;
  return roundToOneDecimal(fatGrams);
}

function computeCarbs(dailyCalories: number, proteinGrams: number, fatGrams: number): number {
  const caloriesFromProtein = proteinGrams * 4;
  const caloriesFromFat = fatGrams * 9;
  const remainingCalories = Math.max(0, dailyCalories - caloriesFromProtein - caloriesFromFat);
  const carbGrams = remainingCalories / 4;
  return roundToOneDecimal(carbGrams);
}

function computeWeeklySurplus(surplusCalories?: number): number {
  const surplus = surplusCalories ?? 300;
  return roundToOneDecimal(surplus * 7);
}

function computeProjectedGain(weeklyCaloricSurplus: number): number {
  const gain = weeklyCaloricSurplus / 7700;
  return roundToOneDecimal(gain);
}

function classifyRate(projectedGainKg: number): string {
  if (projectedGainKg < 0.15) {
    return "slow";
  }
  if (projectedGainKg <= 0.4) {
    return "optimal";
  }
  return "aggressive";
}

function partitionGain(projectedGainKg: number, bodyFatPercent?: number): { lean?: number; fat?: number } {
  if (bodyFatPercent === undefined) {
    return {};
  }

  let leanRatio = 0.5;
  let fatRatio = 0.5;

  if (bodyFatPercent < 12) {
    leanRatio = 0.7;
    fatRatio = 0.3;
  } else if (bodyFatPercent <= 20) {
    leanRatio = 0.5;
    fatRatio = 0.5;
  } else {
    leanRatio = 0.3;
    fatRatio = 0.7;
  }

  return {
    lean: roundToOneDecimal(projectedGainKg * leanRatio),
    fat: roundToOneDecimal(projectedGainKg * fatRatio),
  };
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const dailyCalories = computeDailyCalories(input.tdee, input.surplusCalories);
  const proteinGrams = computeProtein(input.weightKg, input.proteinPerKg);
  const fatGrams = computeFat(dailyCalories, input.fatPercent);
  const carbGrams = computeCarbs(dailyCalories, proteinGrams, fatGrams);

  const weeklyCaloricSurplus = computeWeeklySurplus(input.surplusCalories);
  const projectedWeeklyWeightGainKg = computeProjectedGain(weeklyCaloricSurplus);
  const rateClassification = classifyRate(projectedWeeklyWeightGainKg);
  const partitionedGain = partitionGain(projectedWeeklyWeightGainKg, input.bodyFatPercent);

  const output: CalculatorOutput = {
    dailyCalories: roundToOneDecimal(dailyCalories),
    proteinGrams,
    fatGrams,
    carbGrams,
    weeklyCaloricSurplus,
    projectedWeeklyWeightGainKg,
    rateClassification,
  };

  if (partitionedGain.lean !== undefined) {
    output.leanMassGainEstimate = partitionedGain.lean;
  }
  if (partitionedGain.fat !== undefined) {
    output.fatMassGainEstimate = partitionedGain.fat;
  }

  return output;
}
