import { CalculatorInput, CalculatorOutput } from "./types";

const DEFAULT_PLATES_KG = [25, 20, 15, 10, 5, 2.5, 1.25];
const EPSILON = 1e-9;

function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function validateInputs(input: CalculatorInput): void {
  const { targetPerSideKg, availablePlatesKg } = input;

  if (targetPerSideKg <= 0) {
    throw new Error("Target per-side weight must be a positive number.");
  }

  if (availablePlatesKg && availablePlatesKg.some((plate) => plate <= 0)) {
    throw new Error("All available plates must be positive values.");
  }
}

function sortPlates(plates: number[]): number[] {
  return [...plates].sort((a, b) => b - a);
}

function greedyPlateSelection(targetPerSideKg: number, plates: number[]): CalculatorOutput {
  const chosenPlates: number[] = [];
  let remaining = targetPerSideKg;

  plates.forEach((plate) => {
    while (remaining + EPSILON >= plate) {
      chosenPlates.push(plate);
      remaining = roundTo(remaining - plate, 4);
    }
  });

  const totalLoaded = roundTo(chosenPlates.reduce((sum, plate) => sum + plate, 0), 2);
  const leftover = roundTo(remaining, 2);
  const missingWeight = leftover > 0.25 ? leftover : undefined;

  return {
    plates: chosenPlates,
    totalLoaded,
    missingWeight,
  };
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);
  const plates = sortPlates(input.availablePlatesKg ?? DEFAULT_PLATES_KG);
  return greedyPlateSelection(input.targetPerSideKg, plates);
}
