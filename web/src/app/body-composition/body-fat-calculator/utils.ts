import { CalculatorInput, CalculatorOutput } from "./types";

function ensurePositive(value: number, field: string): void {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${field} must be a positive number.`);
  }
}

function validateInputs(input: CalculatorInput): void {
  const { gender, heightCm, neckCm, waistCm, hipCm } = input;
  if (gender !== "male" && gender !== "female") {
    throw new Error("Gender must be 'male' or 'female'.");
  }

  ensurePositive(heightCm, "Height");
  ensurePositive(neckCm, "Neck circumference");
  ensurePositive(waistCm, "Waist circumference");

  if (gender === "female") {
    if (hipCm === undefined) {
      throw new Error("Hip circumference is required for females.");
    }
    ensurePositive(hipCm, "Hip circumference");
    if (waistCm + hipCm - neckCm <= 0) {
      throw new Error("For females, waist + hip must be greater than neck measurement.");
    }
  } else if (waistCm - neckCm <= 0) {
    throw new Error("For males, waist circumference must be greater than neck measurement.");
  }
}

function computeMaleBodyFat(input: CalculatorInput): number {
  const { heightCm, neckCm, waistCm } = input;
  return (
    86.010 * Math.log10(waistCm - neckCm) - 70.041 * Math.log10(heightCm) + 36.76
  );
}

function computeFemaleBodyFat(input: CalculatorInput): number {
  const { heightCm, neckCm, waistCm, hipCm = 0 } = input;
  return (
    163.205 * Math.log10(waistCm + hipCm - neckCm) -
    97.684 * Math.log10(heightCm) -
    78.387
  );
}

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);
  const rawBodyFat = input.gender === "male" ? computeMaleBodyFat(input) : computeFemaleBodyFat(input);
  return {
    bodyFatPercentage: roundToOneDecimal(rawBodyFat),
  };
}

