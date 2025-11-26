export type Sex = "male" | "female";

export type ActivityLevelKey =
  | "sedentary"
  | "light"
  | "moderate"
  | "veryActive"
  | "extraActive";

export interface ActivityLevel {
  key: ActivityLevelKey;
  label: string;
  description: string;
  multiplier: number;
}

export const activityLevels: ActivityLevel[] = [
  {
    key: "sedentary",
    label: "Sedentary",
    description: "Little to no exercise, desk job",
    multiplier: 1.2,
  },
  {
    key: "light",
    label: "Lightly active",
    description: "1-3 workouts per week",
    multiplier: 1.375,
  },
  {
    key: "moderate",
    label: "Moderately active",
    description: "3-5 workouts per week",
    multiplier: 1.55,
  },
  {
    key: "veryActive",
    label: "Very active",
    description: "6-7 hard workouts per week",
    multiplier: 1.725,
  },
  {
    key: "extraActive",
    label: "Extra active",
    description: "Manual labor + daily training",
    multiplier: 1.9,
  },
];

export interface TdeeInput {
  sex: Sex;
  weightKg: number;
  heightCm: number;
  age: number;
  activityLevel: ActivityLevelKey;
}

export interface TdeeResult {
  bmr: number;
  tdee: number;
}

export function calculateTdee(input: TdeeInput): TdeeResult {
  const { sex, weightKg, heightCm, age, activityLevel } = input;

  if (weightKg <= 0 || heightCm <= 0 || age <= 0) {
    throw new Error("Inputs must be positive values.");
  }

  const bmr = calculateMifflinStJeor({ sex, weightKg, heightCm, age });
  const activity = activityLevels.find((level) => level.key === activityLevel);

  if (!activity) {
    throw new Error("Invalid activity level provided.");
  }

  const tdee = Math.round(bmr * activity.multiplier);

  return {
    bmr,
    tdee,
  };
}

interface BmrInput {
  sex: Sex;
  weightKg: number;
  heightCm: number;
  age: number;
}

function calculateMifflinStJeor({
  sex,
  weightKg,
  heightCm,
  age,
}: BmrInput): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const sexAdjustment = sex === "male" ? 5 : -161;
  return Math.round(base + sexAdjustment);
}
