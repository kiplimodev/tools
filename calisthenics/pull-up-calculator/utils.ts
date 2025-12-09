import { CalculatorInput, CalculatorOutput } from "./types";

const MET_VALUE = 8.0;
const GRIP_FACTORS: Record<NonNullable<CalculatorInput["grip"]>, number> = {
  standard: 0.97,
  wide: 1.0,
  chinup: 0.92,
};
const TEMPO_MULTIPLIERS: Record<NonNullable<CalculatorInput["tempo"]>, number> = {
  fast: 1.5,
  normal: 2.5,
  slow: 3.5,
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function validateInputs(input: CalculatorInput): void {
  if (input.bodyWeightKg <= 0) {
    throw new Error("bodyWeightKg must be greater than 0");
  }
  if (input.maxPullups <= 0) {
    throw new Error("maxPullups must be greater than 0");
  }
  if (input.addedWeightKg !== undefined && input.addedWeightKg < 0) {
    throw new Error("addedWeightKg cannot be negative");
  }
  if (input.goalReps !== undefined && input.goalReps <= 0) {
    throw new Error("goalReps must be greater than 0 when provided");
  }
  if (input.grip && !GRIP_FACTORS[input.grip]) {
    throw new Error("grip must be one of 'standard', 'wide', or 'chinup'");
  }
  if (input.tempo && !TEMPO_MULTIPLIERS[input.tempo]) {
    throw new Error("tempo must be one of 'normal', 'slow', or 'fast'");
  }
}

function calculateEffectiveLoad(
  bodyWeightKg: number,
  grip: NonNullable<CalculatorInput["grip"]>,
  addedWeightKg = 0
): number {
  const loadFactor = GRIP_FACTORS[grip];
  return bodyWeightKg * loadFactor + addedWeightKg;
}

function estimate1RM(effectiveLoadKg: number, maxPullups: number): number {
  return effectiveLoadKg * (1 + maxPullups / 40);
}

function calculateStrengthScore(maxPullups: number): number {
  const score = (maxPullups / 25) * 100;
  return clamp(score, 0, 100);
}

function getProgressionTier(maxPullups: number): string {
  if (maxPullups < 4) return "beginner";
  if (maxPullups < 8) return "novice";
  if (maxPullups < 15) return "intermediate";
  if (maxPullups < 25) return "advanced";
  return "elite";
}

function calculateCalories(
  bodyWeightKg: number,
  maxPullups: number,
  tempo: NonNullable<CalculatorInput["tempo"]>
): number {
  const tempoSeconds = TEMPO_MULTIPLIERS[tempo];
  const durationHours = (maxPullups * tempoSeconds) / 3600;
  const calories = MET_VALUE * bodyWeightKg * durationHours;
  return Math.round(calories);
}

function predictReps(maxPullups: number, goalReps?: number): number | undefined {
  if (goalReps === undefined) return undefined;
  const extra = goalReps - maxPullups;
  if (extra <= 0) {
    return maxPullups;
  }
  return Math.round(maxPullups + extra * 0.55);
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);
  const grip = input.grip ?? "standard";
  const tempo = input.tempo ?? "normal";
  const addedWeight = input.addedWeightKg ?? 0;

  const effectiveLoad = calculateEffectiveLoad(
    input.bodyWeightKg,
    grip,
    addedWeight
  );
  const estimated1RM = estimate1RM(effectiveLoad, input.maxPullups);
  const strengthScore = calculateStrengthScore(input.maxPullups);
  const progressionTier = getProgressionTier(input.maxPullups);
  const caloriesBurned = calculateCalories(input.bodyWeightKg, input.maxPullups, tempo);
  const predictedMaxReps = predictReps(input.maxPullups, input.goalReps);

  return {
    effectiveLoadKg: roundTo(effectiveLoad, 1),
    estimated1RM: roundTo(estimated1RM, 1),
    strengthScore: roundTo(strengthScore, 1),
    predictedMaxReps,
    caloriesBurned,
    progressionTier,
  };
}
