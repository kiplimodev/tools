import { CalculatorInput, CalculatorOutput } from "./types";

const MAX_REPS = 20;

function roundOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

function validateInputs(input: CalculatorInput): void {
  if (input.weightKg <= 0) {
    throw new Error("weightKg must be greater than 0");
  }
  if (input.reps < 1) {
    throw new Error("reps must be at least 1");
  }
  if (input.reps > MAX_REPS) {
    throw new Error("reps must be 20 or fewer for reliable estimation");
  }
}

function computeEpley(weightKg: number, reps: number): number {
  return weightKg * (1 + reps / 30);
}

function computeBrzycki(weightKg: number, reps: number): number {
  return weightKg * (36 / (37 - reps));
}

function computeLombardi(weightKg: number, reps: number): number {
  return weightKg * Math.pow(reps, 0.1);
}

function computeOConner(weightKg: number, reps: number): number {
  return weightKg * (1 + reps / 40);
}

function computeLander(weightKg: number, reps: number): number {
  return (100 * weightKg) / (101.3 - 2.67123 * reps);
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);

  const { weightKg, reps } = input;

  if (reps === 1) {
    const oneRm = roundOneDecimal(weightKg);
    return {
      epley: oneRm,
      brzycki: oneRm,
      lombardi: oneRm,
      oconner: oneRm,
      lander: oneRm,
    };
  }

  const epley = roundOneDecimal(computeEpley(weightKg, reps));
  const brzycki = roundOneDecimal(computeBrzycki(weightKg, reps));
  const lombardi = roundOneDecimal(computeLombardi(weightKg, reps));
  const oconner = roundOneDecimal(computeOConner(weightKg, reps));
  const lander = roundOneDecimal(computeLander(weightKg, reps));

  return {
    epley,
    brzycki,
    lombardi,
    oconner,
    lander,
  };
}
