import { CalculatorInput, CalculatorOutput, Range } from "./types";

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

function validateInputs(input: CalculatorInput): void {
  if (input.weightKg <= 0) {
    throw new Error("weightKg must be greater than 0.");
  }
  if (input.caloriesPerDay <= 0) {
    throw new Error("caloriesPerDay must be greater than 0.");
  }
  if (input.goal && !["cut", "maintain", "bulk"].includes(input.goal)) {
    throw new Error("goal must be one of 'cut', 'maintain', or 'bulk'.");
  }
}

function calculateHealthMinimum(weightKg: number): number {
  return roundToOneDecimal(weightKg * 0.6);
}

function calculateGeneralRange(caloriesPerDay: number): Range {
  const min = (caloriesPerDay * 0.2) / 9;
  const max = (caloriesPerDay * 0.35) / 9;
  return { min: roundToOneDecimal(min), max: roundToOneDecimal(max) };
}

function adjustRangeForGoal(caloriesPerDay: number, goal: "cut" | "maintain" | "bulk"): Range {
  let minPercent: number;
  let maxPercent: number;

  if (goal === "cut") {
    minPercent = 0.2;
    maxPercent = 0.25;
  } else if (goal === "maintain") {
    minPercent = 0.25;
    maxPercent = 0.3;
  } else {
    minPercent = 0.25;
    maxPercent = 0.35;
  }

  const min = (caloriesPerDay * minPercent) / 9;
  const max = (caloriesPerDay * maxPercent) / 9;
  return { min: roundToOneDecimal(min), max: roundToOneDecimal(max) };
}

function enforceHealthMinimum(range: Range, healthMinimum: number): Range {
  return {
    min: roundToOneDecimal(Math.max(range.min, healthMinimum)),
    max: roundToOneDecimal(Math.max(range.max, healthMinimum)),
  };
}

function calculatePercentageRange(range: Range, caloriesPerDay: number): Range {
  const percentMin = (range.min * 9) / caloriesPerDay;
  const percentMax = (range.max * 9) / caloriesPerDay;
  return { min: roundToOneDecimal(percentMin), max: roundToOneDecimal(percentMax) };
}

/**
 * Core logic for the fat intake calculator.
 */
export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const healthMinimum = calculateHealthMinimum(input.weightKg);
  const generalRange = calculateGeneralRange(input.caloriesPerDay);
  const recommendedRange = enforceHealthMinimum(generalRange, healthMinimum);
  const minimumFatGrams = recommendedRange.min;

  let goalAdjustedRange: Range | undefined;
  if (input.goal) {
    goalAdjustedRange = enforceHealthMinimum(
      adjustRangeForGoal(input.caloriesPerDay, input.goal),
      healthMinimum
    );
  }

  const percentageRange = calculatePercentageRange(recommendedRange, input.caloriesPerDay);

  return {
    minimumFatGrams,
    recommendedRange,
    percentageRange,
    healthMinimum,
    goalAdjustedRange,
  };
}
