import { CalculatorInput, CalculatorOutput } from "./types";

function validateInputs({ gender, weightKg, heightCm }: CalculatorInput): void {
  if (gender !== "male" && gender !== "female") {
    throw new Error("Gender must be 'male' or 'female'.");
  }
  if (weightKg <= 0 || !Number.isFinite(weightKg)) {
    throw new Error("Weight must be a positive number in kilograms.");
  }
  if (heightCm <= 0 || !Number.isFinite(heightCm)) {
    throw new Error("Height must be a positive number in centimeters.");
  }
}

function calculateMaleLBM(weightKg: number, heightCm: number): number {
  return 0.407 * weightKg + 0.267 * heightCm - 19.2;
}

function calculateFemaleLBM(weightKg: number, heightCm: number): number {
  return 0.252 * weightKg + 0.473 * heightCm - 48.3;
}

function roundToSingleDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

/**
 * Core logic for this calculator.
 * Calculates lean body mass using the Boer formula.
 */
export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const { gender, weightKg, heightCm } = input;
  const leanBodyMass =
    gender === "male"
      ? calculateMaleLBM(weightKg, heightCm)
      : calculateFemaleLBM(weightKg, heightCm);

  return {
    leanBodyMassKg: roundToSingleDecimal(leanBodyMass),
  };
}
