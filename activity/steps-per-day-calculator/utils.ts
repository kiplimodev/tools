import { CalculatorInput, CalculatorOutput } from "./types";

const GOAL_RECOMMENDATIONS: Record<CalculatorInput["goal"], number> = {
  health: 7500,
  "weight-loss": 11000,
  fitness: 13500,
};

function validateInputs(input: CalculatorInput): void {
  if (input.age <= 0 || Number.isNaN(input.age)) {
    throw new Error("Age must be a positive number.");
  }
  if (!GOAL_RECOMMENDATIONS[input.goal]) {
    throw new Error("Goal must be one of: health, weight-loss, fitness.");
  }
  if (input.weightKg !== undefined && (input.weightKg <= 0 || Number.isNaN(input.weightKg))) {
    throw new Error("Weight must be a positive number when provided.");
  }
  if (input.currentSteps !== undefined && input.currentSteps < 0) {
    throw new Error("Current steps cannot be negative.");
  }
}

function computeRecommendedSteps(goal: CalculatorInput["goal"]): number {
  return GOAL_RECOMMENDATIONS[goal];
}

function classifyCurrentSteps(currentSteps?: number): string {
  if (currentSteps === undefined) return "unknown";
  if (currentSteps < 5000) return "sedentary";
  if (currentSteps < 7500) return "lightly active";
  if (currentSteps < 10000) return "active";
  return "highly active";
}

function estimateCalories(weightKg: number | undefined, recommendedSteps: number): number | undefined {
  if (weightKg === undefined) return undefined;
  const kcalPerStep = weightKg * 0.0005;
  return Math.round(recommendedSteps * kcalPerStep);
}

function computeDelta(recommendedSteps: number, currentSteps?: number): number | undefined {
  if (currentSteps === undefined) return undefined;
  return recommendedSteps - currentSteps;
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const recommendedSteps = computeRecommendedSteps(input.goal);
  const category = classifyCurrentSteps(input.currentSteps);
  const estimatedCalories = estimateCalories(input.weightKg, recommendedSteps);
  const deltaFromCurrent = computeDelta(recommendedSteps, input.currentSteps);

  return {
    recommendedSteps,
    category,
    estimatedCalories,
    deltaFromCurrent,
  };
}
