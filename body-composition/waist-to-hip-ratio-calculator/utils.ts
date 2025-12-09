import { CalculatorInput, CalculatorOutput } from "./types";

const MALE_THRESHOLDS = {
  low: 0.9,
  moderate: 1.0,
};

const FEMALE_THRESHOLDS = {
  low: 0.8,
  moderate: 0.85,
};

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);
  const ratio = roundToTwo(calculateRatio(input.waistCm, input.hipCm));
  const category = determineCategory(input.gender, ratio);

  return {
    ratio,
    category,
  };
}

function validateInputs(input: CalculatorInput): void {
  const { gender, waistCm, hipCm } = input;
  if (gender !== "male" && gender !== "female") {
    throw new Error("Gender must be 'male' or 'female'.");
  }
  if (waistCm <= 0 || hipCm <= 0) {
    throw new Error("Waist and hip measurements must be greater than zero.");
  }
}

function calculateRatio(waistCm: number, hipCm: number): number {
  return waistCm / hipCm;
}

function roundToTwo(value: number): number {
  return Math.round(value * 100) / 100;
}

function determineCategory(gender: "male" | "female", ratio: number): string {
  if (gender === "male") {
    if (ratio < MALE_THRESHOLDS.low) return "low risk";
    if (ratio < MALE_THRESHOLDS.moderate) return "moderate risk";
    return "high risk";
  }

  if (ratio < FEMALE_THRESHOLDS.low) return "low risk";
  if (ratio < FEMALE_THRESHOLDS.moderate) return "moderate risk";
  return "high risk";
}
