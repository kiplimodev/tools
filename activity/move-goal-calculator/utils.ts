import { CalculatorInput, CalculatorOutput } from "./types";

const BASE_MOVE_GOALS: Record<CalculatorInput["goal"], { range: [number, number]; midpoint: number }> = {
  health: { range: [250, 350], midpoint: 300 },
  "weight-loss": { range: [400, 700], midpoint: 550 },
  fitness: { range: [450, 800], midpoint: 625 },
};

function validateInputs(input: CalculatorInput): void {
  if (input.weightKg <= 0 || Number.isNaN(input.weightKg)) {
    throw new Error("weightKg must be a positive number.");
  }
  if (input.tdee <= 0 || Number.isNaN(input.tdee)) {
    throw new Error("tdee must be a positive number.");
  }
  if (!BASE_MOVE_GOALS[input.goal]) {
    throw new Error("goal must be one of: health, weight-loss, fitness.");
  }
  if (input.weeklyCalorieDeficit !== undefined && input.weeklyCalorieDeficit < 0) {
    throw new Error("weeklyCalorieDeficit cannot be negative.");
  }
  if (input.weeklyCalorieSurplus !== undefined && input.weeklyCalorieSurplus < 0) {
    throw new Error("weeklyCalorieSurplus cannot be negative.");
  }
}

function computeBaseMoveGoal(goal: CalculatorInput["goal"]): { range: [number, number]; midpoint: number } {
  return BASE_MOVE_GOALS[goal];
}

function applyDeficitSurplusAdjustments(
  baseDaily: number,
  weeklyCalorieDeficit?: number,
  weeklyCalorieSurplus?: number
): number {
  let adjusted = baseDaily;

  if (weeklyCalorieDeficit && weeklyCalorieDeficit > 0) {
    const dailyAdjustment = weeklyCalorieDeficit / 7;
    adjusted += dailyAdjustment * 0.3;
  }

  if (weeklyCalorieSurplus && weeklyCalorieSurplus > 0) {
    const dailyAdjustment = weeklyCalorieSurplus / 7;
    adjusted += dailyAdjustment * 0.1;
  }

  return Math.round(adjusted);
}

function determineClassification(input: CalculatorInput): string {
  if (input.weeklyCalorieDeficit && input.weeklyCalorieDeficit > 0) {
    return "fat-loss";
  }
  if (input.weeklyCalorieSurplus && input.weeklyCalorieSurplus > 0) {
    return "muscle-gain";
  }
  if (input.goal === "fitness") {
    return "recomp";
  }
  if (input.goal === "health") {
    return "maintain";
  }
  return "fat-loss";
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const { range, midpoint } = computeBaseMoveGoal(input.goal);
  const dailyMoveCalories = applyDeficitSurplusAdjustments(
    midpoint,
    input.weeklyCalorieDeficit,
    input.weeklyCalorieSurplus
  );
  const goalClassification = determineClassification(input);

  return {
    dailyMoveCalories,
    recommendedRange: range,
    goalClassification,
  };
}
