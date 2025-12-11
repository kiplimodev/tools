import { CalculatorInput, CalculatorOutput } from "./types";

const MET_VALUE = 8.0;
const TEMPO_MULTIPLIERS: Record<NonNullable<CalculatorInput["tempo"]>, number> = {
  fast: 1.2,
  normal: 2.0,
  slow: 3.0,
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function validateInputs(input: CalculatorInput): void {
  if (input.bodyWeightKg <= 0) {
    throw new Error("bodyWeightKg must be greater than 0");
  }
  if (input.maxPushups <= 0) {
    throw new Error("maxPushups must be greater than 0");
  }
  if (input.vestWeightKg !== undefined && input.vestWeightKg < 0) {
    throw new Error("vestWeightKg cannot be negative");
  }
  if (input.goalReps !== undefined && input.goalReps <= 0) {
    throw new Error("goalReps must be greater than 0 when provided");
  }
  if (input.tempo && !TEMPO_MULTIPLIERS[input.tempo]) {
    throw new Error("tempo must be one of 'normal', 'slow', or 'fast'");
  }
}

function calculateEffectiveLoad(bodyWeightKg: number, vestWeightKg = 0): number {
  return bodyWeightKg * 0.64 + vestWeightKg;
}

function estimate1RM(effectiveLoadKg: number, maxPushups: number): number {
  return effectiveLoadKg * (1 + maxPushups / 30);
}

function calculateStrengthScore(maxPushups: number): number {
  const score = (maxPushups / 50) * 100;
  return clamp(score, 0, 100);
}

function determineProgressionTier(maxPushups: number): string {
  if (maxPushups < 10) return "beginner";
  if (maxPushups < 20) return "novice";
  if (maxPushups < 35) return "intermediate";
  if (maxPushups < 50) return "advanced";
  return "elite";
}

function calculateCalories(
  bodyWeightKg: number,
  maxPushups: number,
  tempo: NonNullable<CalculatorInput["tempo"]>
): number {
  const tempoMultiplier = TEMPO_MULTIPLIERS[tempo];
  const durationSeconds = maxPushups * tempoMultiplier;
  const durationHours = durationSeconds / 3600;
  const calories = MET_VALUE * bodyWeightKg * durationHours;
  return Math.round(calories);
}

function predictReps(maxPushups: number, goalReps?: number): number | undefined {
  if (goalReps === undefined) return undefined;
  const extraReps = goalReps - maxPushups;
  if (extraReps <= 0) {
    return maxPushups;
  }
  return Math.round(maxPushups + extraReps * 0.6);
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);
  const vestWeight = input.vestWeightKg ?? 0;
  const tempo = input.tempo ?? "normal";

  const effectiveLoadKg = calculateEffectiveLoad(input.bodyWeightKg, vestWeight);
  const estimated1RM = estimate1RM(effectiveLoadKg, input.maxPushups);
  const strengthScore = calculateStrengthScore(input.maxPushups);
  const progressionTier = determineProgressionTier(input.maxPushups);
  const caloriesBurned = calculateCalories(input.bodyWeightKg, input.maxPushups, tempo);
  const predictedMaxReps = predictReps(input.maxPushups, input.goalReps);

  return {
    effectiveLoadKg: Math.round(effectiveLoadKg * 10) / 10,
    estimated1RM: Math.round(estimated1RM * 10) / 10,
    strengthScore: Math.round(strengthScore * 10) / 10,
    predictedMaxReps,
    caloriesBurned,
    progressionTier,
  };
}
