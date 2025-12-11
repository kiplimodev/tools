import { CalculatorInput, CalculatorOutput } from "./types";

function validateInputs(input: CalculatorInput): void {
  if (input.weightKg <= 0) {
    throw new Error("weightKg must be greater than 0");
  }
  if (input.tdee <= 0) {
    throw new Error("tdee must be greater than 0");
  }
  if (input.surplusCalories !== undefined && input.surplusCalories < 0) {
    throw new Error("surplusCalories cannot be negative for a lean bulk");
  }
  if (input.proteinPerKg !== undefined && input.proteinPerKg <= 0) {
    throw new Error("proteinPerKg must be greater than 0");
  }
  if (input.fatPercent !== undefined && input.fatPercent <= 0) {
    throw new Error("fatPercent must be greater than 0");
  }
  if (input.bodyFatPercent !== undefined && input.bodyFatPercent <= 0) {
    throw new Error("bodyFatPercent must be greater than 0 when provided");
  }
}

function roundTo(value: number, decimals = 1): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function computeDailyCalories(input: CalculatorInput): {
  dailyCalories: number;
  surplus: number;
} {
  const surplus = input.surplusCalories ?? 150;
  const dailyCalories = input.tdee + surplus;
  return { dailyCalories, surplus };
}

function computeMacros(weightKg: number, dailyCalories: number, proteinPerKg?: number, fatPercent?: number) {
  const protein = weightKg * (proteinPerKg ?? 2.0);
  const fatCalories = dailyCalories * (fatPercent ?? 0.2);
  const fat = fatCalories / 9;
  const remainingCalories = dailyCalories - protein * 4 - fat * 9;
  const carbs = Math.max(remainingCalories / 4, 0);
  return {
    proteinGrams: protein,
    fatGrams: fat,
    carbGrams: carbs,
  };
}

function classifyRate(projectedGainKg: number): string {
  if (projectedGainKg < 0.1) {
    return "slow";
  }
  if (projectedGainKg <= 0.25) {
    return "optimal";
  }
  return "too fast";
}

function partitionGain(projectedGainKg: number, bodyFatPercent?: number): { lean?: number; fat?: number } {
  if (bodyFatPercent === undefined) {
    return {};
  }

  let leanRatio = 0.6;
  if (bodyFatPercent < 12) {
    leanRatio = 0.8;
  } else if (bodyFatPercent > 20) {
    leanRatio = 0.4;
  }
  const fatRatio = 1 - leanRatio;
  return {
    lean: projectedGainKg * leanRatio,
    fat: projectedGainKg * fatRatio,
  };
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const { dailyCalories, surplus } = computeDailyCalories(input);
  const macros = computeMacros(input.weightKg, dailyCalories, input.proteinPerKg, input.fatPercent);
  const weeklyCaloricSurplus = surplus * 7;
  const projectedWeeklyWeightGainKg = weeklyCaloricSurplus / 7700;
  const rateClassification = classifyRate(projectedWeeklyWeightGainKg);
  const partitioned = partitionGain(projectedWeeklyWeightGainKg, input.bodyFatPercent);

  return {
    dailyCalories: roundTo(dailyCalories),
    proteinGrams: roundTo(macros.proteinGrams),
    fatGrams: roundTo(macros.fatGrams),
    carbGrams: roundTo(macros.carbGrams),
    weeklyCaloricSurplus: roundTo(weeklyCaloricSurplus),
    projectedWeeklyWeightGainKg: roundTo(projectedWeeklyWeightGainKg),
    rateClassification,
    leanMassGainEstimate: partitioned.lean !== undefined ? roundTo(partitioned.lean) : undefined,
    fatMassGainEstimate: partitioned.fat !== undefined ? roundTo(partitioned.fat) : undefined,
  };
}
