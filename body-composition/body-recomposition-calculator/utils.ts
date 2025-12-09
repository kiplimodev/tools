import { CalculatorInput, CalculatorOutput } from "./types";

interface Composition {
  fatMassKg: number;
  leanMassKg: number;
}

interface WeeklyChange {
  fat: number;
  lean: number;
}

const ROUND_1_DECIMAL = (value: number): number => Math.round(value * 10) / 10;
const isPositive = (value: number | undefined): value is number =>
  typeof value === "number" && Number.isFinite(value) && value > 0;

function validateInputs(input: CalculatorInput): void {
  if (!isPositive(input.currentWeightKg)) {
    throw new Error("Current weight must be greater than 0.");
  }
  if (!isPositive(input.currentBodyFatPercent)) {
    throw new Error("Current body fat percent must be greater than 0.");
  }
  if (input.currentBodyFatPercent >= 100) {
    throw new Error("Current body fat percent must be less than 100.");
  }
  if (!isPositive(input.goalWeightKg) && !isPositive(input.goalBodyFatPercent)) {
    throw new Error("At least one goal (weight or body fat percent) must be provided.");
  }
  if (isPositive(input.goalBodyFatPercent) && (input.goalBodyFatPercent as number) >= 100) {
    throw new Error("Goal body fat percent must be less than 100.");
  }
  if (isPositive(input.goalWeightKg) && (input.goalWeightKg as number) <= 0) {
    throw new Error("Goal weight must be greater than 0 if provided.");
  }
}

function computeCurrentComposition(input: CalculatorInput): Composition {
  const fatMassKg = input.currentWeightKg * (input.currentBodyFatPercent / 100);
  const leanMassKg = input.currentWeightKg - fatMassKg;
  return {
    fatMassKg: ROUND_1_DECIMAL(fatMassKg),
    leanMassKg: ROUND_1_DECIMAL(leanMassKg),
  };
}

function computeGoalComposition(
  input: CalculatorInput,
  effectiveGoalWeightKg: number
): Composition | undefined {
  if (!isPositive(input.goalBodyFatPercent)) {
    return undefined;
  }
  const goalFatMassKg = effectiveGoalWeightKg * ((input.goalBodyFatPercent as number) / 100);
  const goalLeanMassKg = effectiveGoalWeightKg - goalFatMassKg;
  return {
    fatMassKg: ROUND_1_DECIMAL(goalFatMassKg),
    leanMassKg: ROUND_1_DECIMAL(goalLeanMassKg),
  };
}

function classifyGoal(
  currentWeightKg: number,
  currentBf: number,
  goalWeightKg: number,
  goalBf: number
): string {
  const weightDelta = goalWeightKg - currentWeightKg;
  const bfDelta = goalBf - currentBf;

  if (weightDelta < 0 && bfDelta < 0) {
    return "cut";
  }
  if (weightDelta > 0 && bfDelta < 0) {
    return "recomp";
  }
  if (weightDelta > 0 && bfDelta >= 0) {
    return bfDelta <= 2 ? "lean bulk" : "bulk";
  }
  if (weightDelta === 0 && bfDelta < 0) {
    return "recomp";
  }
  if (weightDelta <= 0 && bfDelta >= 0) {
    return "bulk";
  }
  return "recomp";
}

function deriveWeeklyChange(
  classification: string,
  providedFat?: number,
  providedLean?: number
): WeeklyChange {
  if (typeof providedFat === "number" && typeof providedLean === "number") {
    return { fat: providedFat, lean: providedLean };
  }

  switch (classification) {
    case "cut":
      return { fat: providedFat ?? -0.3, lean: providedLean ?? 0 };
    case "recomp":
      return { fat: providedFat ?? -0.1, lean: providedLean ?? 0.1 };
    case "lean bulk":
      return { fat: providedFat ?? 0.1, lean: providedLean ?? 0.2 };
    case "bulk":
    default:
      return { fat: providedFat ?? 0.1, lean: providedLean ?? 0.2 };
  }
}

function estimateTimeToGoal(
  current: Composition,
  goal: Composition | undefined,
  weekly: WeeklyChange
): number | undefined {
  if (!goal) return undefined;

  const fatDelta = goal.fatMassKg - current.fatMassKg;
  const leanDelta = goal.leanMassKg - current.leanMassKg;

  const fatWeeks = weekly.fat !== 0 ? Math.abs(fatDelta / weekly.fat) : undefined;
  const leanWeeks = weekly.lean !== 0 ? Math.abs(leanDelta / weekly.lean) : undefined;

  const weeksCandidates = [fatWeeks, leanWeeks].filter(
    (value): value is number => typeof value === "number" && Number.isFinite(value)
  );

  if (weeksCandidates.length === 0) return undefined;

  const weeks = Math.max(...weeksCandidates);
  return Math.round(weeks);
}

function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const effectiveGoalWeightKg = isPositive(input.goalWeightKg)
    ? (input.goalWeightKg as number)
    : input.goalBodyFatPercent
    ? input.currentWeightKg
    : input.currentWeightKg;

  const effectiveGoalBodyFatPercent = isPositive(input.goalBodyFatPercent)
    ? (input.goalBodyFatPercent as number)
    : input.currentBodyFatPercent;

  const classification = classifyGoal(
    input.currentWeightKg,
    input.currentBodyFatPercent,
    effectiveGoalWeightKg,
    effectiveGoalBodyFatPercent
  );

  const weeklyChanges = deriveWeeklyChange(
    classification,
    input.weeklyFatChangeKg,
    input.weeklyLeanChangeKg
  );

  const currentComposition = computeCurrentComposition(input);
  const goalComposition = computeGoalComposition(input, effectiveGoalWeightKg);

  const fatChangeKg = goalComposition
    ? ROUND_1_DECIMAL(goalComposition.fatMassKg - currentComposition.fatMassKg)
    : undefined;
  const leanChangeKg = goalComposition
    ? ROUND_1_DECIMAL(goalComposition.leanMassKg - currentComposition.leanMassKg)
    : undefined;

  const estimatedWeeksToGoal = estimateTimeToGoal(
    currentComposition,
    goalComposition,
    weeklyChanges
  );

  return {
    currentFatMassKg: currentComposition.fatMassKg,
    currentLeanMassKg: currentComposition.leanMassKg,
    goalFatMassKg: goalComposition?.fatMassKg,
    goalLeanMassKg: goalComposition?.leanMassKg,
    fatChangeKg,
    leanChangeKg,
    weeklyFatChangeKg: ROUND_1_DECIMAL(weeklyChanges.fat),
    weeklyLeanChangeKg: ROUND_1_DECIMAL(weeklyChanges.lean),
    estimatedWeeksToGoal,
    classification,
  };
}

export { calculateCore };
