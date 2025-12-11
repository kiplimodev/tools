import { CalculatorInput, CalculatorOutput } from "./types";

function roundTo(value: number, decimals = 2): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function validateInputs(input: CalculatorInput): void {
  const { bodyWeightKg, benchKg, squatKg, deadliftKg, ohpKg, rowKg } = input;
  if (bodyWeightKg <= 0) {
    throw new Error("Body weight must be greater than zero.");
  }
  if (benchKg < 0 || squatKg < 0 || deadliftKg < 0) {
    throw new Error("Lift values cannot be negative.");
  }
  if (rowKg !== undefined && rowKg < 0) {
    throw new Error("Row value cannot be negative.");
  }
  if (ohpKg !== undefined && ohpKg < 0) {
    throw new Error("Overhead press value cannot be negative.");
  }
  if (benchKg === 0 && squatKg === 0 && deadliftKg === 0) {
    throw new Error("At least one main lift must be greater than zero.");
  }
}

function computeLiftToBodyRatios(bodyWeightKg: number, benchKg: number, squatKg: number, deadliftKg: number) {
  return {
    benchToBody: roundTo(benchKg / bodyWeightKg),
    squatToBody: roundTo(squatKg / bodyWeightKg),
    deadliftToBody: roundTo(deadliftKg / bodyWeightKg),
  };
}

function computePushPullRatio(benchKg: number, ohpKg: number | undefined, rowKg: number | undefined): number | undefined {
  if (rowKg === undefined) {
    return undefined;
  }
  if (rowKg <= 0) {
    throw new Error("Row value must be greater than zero to compute push/pull ratio.");
  }
  if (benchKg > 0) {
    return roundTo(benchKg / rowKg);
  }
  if (ohpKg !== undefined && ohpKg > 0) {
    return roundTo(ohpKg / rowKg);
  }
  return undefined;
}

function computeSquatDeadliftRatio(squatKg: number, deadliftKg: number): number {
  if (deadliftKg <= 0) {
    throw new Error("Deadlift must be greater than zero to compute squat/deadlift ratio.");
  }
  return roundTo(squatKg / deadliftKg);
}

function computeProportions(benchKg: number, squatKg: number, deadliftKg: number) {
  const total = benchKg + squatKg + deadliftKg;
  if (total <= 0) {
    throw new Error("Total of bench, squat, and deadlift must be greater than zero.");
  }
  return {
    benchPercent: roundTo(benchKg / total),
    squatPercent: roundTo(squatKg / total),
    deadliftPercent: roundTo(deadliftKg / total),
  };
}

function determineUpperLowerBalance(
  benchKg: number,
  squatKg: number,
  deadliftKg: number,
  ohpKg?: number
): string {
  const upper = benchKg + (ohpKg !== undefined ? ohpKg : benchKg * 0.6);
  const lower = squatKg + deadliftKg;
  if (upper > lower) {
    return "upper-dominant";
  }
  if (lower > upper) {
    return "lower-dominant";
  }
  return "balanced";
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const { bodyWeightKg, benchKg, squatKg, deadliftKg, ohpKg, rowKg } = input;

  const liftToBodyRatios = computeLiftToBodyRatios(bodyWeightKg, benchKg, squatKg, deadliftKg);
  const pushPullRatio = computePushPullRatio(benchKg, ohpKg, rowKg);
  const squatDeadliftRatio = computeSquatDeadliftRatio(squatKg, deadliftKg);
  const proportions = computeProportions(benchKg, squatKg, deadliftKg);
  const upperLowerBalance = determineUpperLowerBalance(benchKg, squatKg, deadliftKg, ohpKg);

  return {
    ...liftToBodyRatios,
    pushPullRatio,
    squatDeadliftRatio,
    upperLowerBalance,
    proportions,
  };
}
