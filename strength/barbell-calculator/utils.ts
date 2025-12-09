import { CalculatorInput, CalculatorOutput } from "./types";

const DEFAULT_PLATES_KG = [25, 20, 15, 10, 5, 2.5, 1.25];
const EPSILON = 1e-9;

function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function validateInputs(input: CalculatorInput): void {
  const { barWeightKg, targetWeightKg, availablePlatesKg } = input;
  if (barWeightKg <= 0 || targetWeightKg <= 0) {
    throw new Error("Bar weight and target weight must be positive numbers.");
  }

  if (targetWeightKg < barWeightKg) {
    throw new Error("Target weight must be greater than or equal to the bar weight.");
  }

  if (availablePlatesKg && availablePlatesKg.some((plate) => plate <= 0)) {
    throw new Error("All available plates must be positive values.");
  }
}

function sortPlates(plates: number[]): number[] {
  return [...plates].sort((a, b) => b - a);
}

function computeLoadPerSide(barWeightKg: number, targetWeightKg: number): number {
  const load = (targetWeightKg - barWeightKg) / 2;
  if (load < 0) {
    throw new Error("Computed load per side cannot be negative.");
  }
  return load;
}

function greedyPlateSelection(loadPerSide: number, plates: number[]): {
  platesPerSide: number[];
  perSideWeight: number;
  missingWeight?: number;
} {
  const platesPerSide: number[] = [];
  let remaining = loadPerSide;

  plates.forEach((plate) => {
    while (remaining + EPSILON >= plate) {
      platesPerSide.push(plate);
      remaining = roundTo(remaining - plate, 4);
    }
  });

  const perSideWeight = roundTo(platesPerSide.reduce((sum, plate) => sum + plate, 0), 2);
  const leftover = roundTo(remaining, 2);
  const missingWeight = leftover > 0.25 ? leftover : undefined;

  return { platesPerSide, perSideWeight, missingWeight };
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);
  const plates = sortPlates(input.availablePlatesKg ?? DEFAULT_PLATES_KG);
  const loadPerSide = computeLoadPerSide(input.barWeightKg, input.targetWeightKg);
  return greedyPlateSelection(loadPerSide, plates);
}
