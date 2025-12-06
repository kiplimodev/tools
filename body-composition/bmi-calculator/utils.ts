import { CalculatorInput, CalculatorOutput } from "./types";

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const { weightKg, heightM } = input;

  if (weightKg <= 0 || heightM <= 0) {
    throw new Error("Weight and height must be greater than zero.");
  }

  const bmi = weightKg / (heightM * heightM);

  return {
    bmi: Number(bmi.toFixed(2)),
  };
}
