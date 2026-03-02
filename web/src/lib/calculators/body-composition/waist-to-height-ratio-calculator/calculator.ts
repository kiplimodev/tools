import type { Input, Output } from "./types";

function categorize(ratio: number): string {
  if (ratio < 0.4) return "Extremely Slim";
  if (ratio < 0.5) return "Healthy";
  if (ratio < 0.6) return "Overweight";
  return "Obese";
}

export function calculator(input: Input): Output | null {
  const { waistCm, heightCm } = input;

  if (
    !Number.isFinite(waistCm) ||
    !Number.isFinite(heightCm) ||
    waistCm <= 0 ||
    heightCm <= 0
  ) {
    return null;
  }

  const ratio = waistCm / heightCm;

  return {
    ratio: parseFloat(ratio.toFixed(3)),
    category: categorize(ratio),
  };
}
