import { CalculatorInput, CalculatorOutput } from "./types";

type Goal = "maintain" | "cut" | "bulk";

type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very_active"
  | "athlete";

type BmrMethod = "mifflin" | "katch-mcardle";

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
  athlete: 2.1,
};

const DEFAULT_GOAL: Goal = "maintain";

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

function validateInputs(input: CalculatorInput): void {
  const { gender, age, weightKg, heightCm, activityLevel, goal, bodyFatPercent } = input;

  if (gender !== "male" && gender !== "female") {
    throw new Error("Gender must be 'male' or 'female'.");
  }

  if (age <= 0) {
    throw new Error("Age must be greater than 0.");
  }

  if (weightKg <= 0) {
    throw new Error("Weight must be greater than 0.");
  }

  if (heightCm <= 0) {
    throw new Error("Height must be greater than 0.");
  }

  if (!(activityLevel in activityMultipliers)) {
    throw new Error("Activity level is not supported.");
  }

  if (goal && goal !== "maintain" && goal !== "cut" && goal !== "bulk") {
    throw new Error("Goal must be 'maintain', 'cut', or 'bulk' if provided.");
  }

  if (bodyFatPercent !== undefined) {
    if (bodyFatPercent <= 0 || bodyFatPercent >= 100) {
      throw new Error("Body fat percent must be between 0 and 100.");
    }
  }
}

function computeMifflinBmr(input: CalculatorInput): number {
  const { gender, weightKg, heightCm, age } = input;
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

function computeKatchBmr(input: CalculatorInput): number {
  const { weightKg, bodyFatPercent } = input;
  const leanBodyMass = weightKg * (1 - (bodyFatPercent ?? 0) / 100);
  return 370 + 21.6 * leanBodyMass;
}

function selectBmr(input: CalculatorInput): { bmr: number; method: BmrMethod } {
  if (input.bodyFatPercent !== undefined) {
    return { bmr: computeKatchBmr(input), method: "katch-mcardle" };
  }
  return { bmr: computeMifflinBmr(input), method: "mifflin" };
}

function getActivityMultiplier(activityLevel: ActivityLevel): number {
  return activityMultipliers[activityLevel];
}

function calculateGoalCalories(tdee: number): { cutCalories: number; bulkCalories: number } {
  return {
    cutCalories: tdee - 300,
    bulkCalories: tdee + 300,
  };
}

function calculateMacros(
  weightKg: number,
  maintenanceCalories: number,
  goal: Goal
): { proteinGrams: number; fatGrams: number; carbGrams: number } {
  let proteinPerKg: number;
  let fatPercent: number;

  switch (goal) {
    case "cut":
      proteinPerKg = 2.0;
      fatPercent = 0.2;
      break;
    case "bulk":
      proteinPerKg = 1.8;
      fatPercent = 0.25;
      break;
    default:
      proteinPerKg = 1.6;
      fatPercent = 0.25;
      break;
  }

  const proteinGramsRaw = weightKg * proteinPerKg;
  const proteinCalories = proteinGramsRaw * 4;
  const fatCalories = maintenanceCalories * fatPercent;
  const fatGramsRaw = fatCalories / 9;
  const carbCalories = maintenanceCalories - (proteinCalories + fatCalories);
  const carbGramsRaw = Math.max(0, carbCalories / 4);

  return {
    proteinGrams: roundToOneDecimal(proteinGramsRaw),
    fatGrams: roundToOneDecimal(fatGramsRaw),
    carbGrams: roundToOneDecimal(carbGramsRaw),
  };
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const { bmr, method } = selectBmr(input);
  const roundedBmr = roundToOneDecimal(bmr);

  const activityMultiplier = getActivityMultiplier(input.activityLevel);
  const tdeeRaw = bmr * activityMultiplier;
  const roundedTdee = roundToOneDecimal(tdeeRaw);

  const maintenanceCalories = roundToOneDecimal(roundedTdee);

  const macros = calculateMacros(input.weightKg, maintenanceCalories, input.goal ?? DEFAULT_GOAL);

  const result: CalculatorOutput = {
    bmr: roundedBmr,
    tdee: roundedTdee,
    activityMultiplier,
    methodUsed: method,
    maintenanceCalories,
    proteinGrams: macros.proteinGrams,
    fatGrams: macros.fatGrams,
    carbGrams: macros.carbGrams,
  };

  if (input.goal) {
    const { cutCalories, bulkCalories } = calculateGoalCalories(roundedTdee);
    result.cutCalories = roundToOneDecimal(cutCalories);
    result.bulkCalories = roundToOneDecimal(bulkCalories);
  }

  return result;
}
