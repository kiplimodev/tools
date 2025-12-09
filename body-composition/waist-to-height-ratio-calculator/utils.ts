import { CalculatorInput, CalculatorOutput } from "./types";

function validateInputs({ waistCm, heightCm }: CalculatorInput): void {
  if (waistCm <= 0 || heightCm <= 0) {
    throw new Error("Waist and height must be greater than zero.");
  }

  if (heightCm <= waistCm) {
    throw new Error("Height must be greater than waist circumference.");
  }
}

function calculateRatio(waistCm: number, heightCm: number): number {
  const ratio = waistCm / heightCm;
  return roundToTwoDecimals(ratio);
}

function determineCategory(ratio: number): string {
  if (ratio < 0.4) {
    return "underweight risk";
  }

  if (ratio < 0.5) {
    return "healthy";
  }

  if (ratio < 0.6) {
    return "increased risk";
  }

  return "high risk";
}

function roundToTwoDecimals(value: number): number {
  return Math.round(value * 100) / 100;
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const ratio = calculateRatio(input.waistCm, input.heightCm);
  const category = determineCategory(ratio);

  return {
    ratio,
    category,
  };
}
