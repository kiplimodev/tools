import { CalculatorInput, CalculatorOutput } from "./types";

const INTENSITY_CALORIES_PER_STEP: Record<NonNullable<CalculatorInput["intensity"]>, number> = {
  low: 0.035,
  moderate: 0.045,
  high: 0.065,
};

function assertNonNegative(value: number, name: string) {
  if (value < 0) {
    throw new Error(`${name} cannot be negative.`);
  }
}

function assertInteger(value: number, name: string) {
  if (!Number.isInteger(value)) {
    throw new Error(`${name} must be an integer.`);
  }
}

export function determineStrideLength(weightKg: number, providedStride?: number): number {
  assertNonNegative(weightKg, "weightKg");
  if (providedStride !== undefined) {
    assertNonNegative(providedStride, "strideLengthMeters");
    return providedStride;
  }
  return weightKg < 70 ? 0.68 : 0.75;
}

export function getCaloriesPerStep(intensity?: CalculatorInput["intensity"]): number {
  const level = intensity ?? "moderate";
  const calories = INTENSITY_CALORIES_PER_STEP[level];
  if (calories === undefined) {
    throw new Error("Invalid intensity provided.");
  }
  return calories;
}

export function computeDistance(steps: number, strideMeters: number): number {
  assertInteger(steps, "steps");
  assertNonNegative(steps, "steps");
  const distanceKm = (steps * strideMeters) / 1000;
  return Number(distanceKm.toFixed(2));
}

export function computeCalories(steps: number, caloriesPerStep: number): number {
  return Math.round(steps * caloriesPerStep);
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const strideMeters = determineStrideLength(input.weightKg, input.strideLengthMeters);
  const caloriesPerStep = getCaloriesPerStep(input.intensity);
  const distanceKm = computeDistance(input.steps, strideMeters);
  const caloriesBurned = computeCalories(input.steps, caloriesPerStep);

  return {
    caloriesBurned,
    distanceKm,
    caloriesPerStep,
  };
}
