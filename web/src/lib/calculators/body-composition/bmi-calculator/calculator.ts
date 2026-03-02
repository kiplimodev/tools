import type { Input, Output } from "./types";

function categorize(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

export function calculator(input: Input): Output | null {
  const { weightKg, heightCm } = input;

  if (
    !Number.isFinite(weightKg) ||
    !Number.isFinite(heightCm) ||
    weightKg <= 0 ||
    heightCm <= 0
  ) {
    return null;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  return {
    bmi: parseFloat(bmi.toFixed(1)),
    category: categorize(bmi),
  };
}
