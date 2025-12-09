import { CalculatorInput, CalculatorOutput } from "./types";

function validateInput({ weightKg, heightCm }: CalculatorInput): void {
  if (weightKg <= 0 || heightCm <= 0) {
    throw new Error("Weight and height must be greater than zero.");
  }
}

function calculateBmi(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  const bmiValue = weightKg / (heightM * heightM);
  return Math.round(bmiValue * 10) / 10;
}

function determineCategory(bmi: number): string {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obese";
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInput(input);
  const bmi = calculateBmi(input.weightKg, input.heightCm);
  const category = determineCategory(bmi);

  return { bmi, category };
}

export { validateInput, calculateBmi, determineCategory };
