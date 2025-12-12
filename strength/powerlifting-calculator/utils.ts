import { CalculatorInput, CalculatorOutput } from "./types";

function roundToTwo(value: number): number {
  return Math.round(value * 100) / 100;
}

function validateInputs(input: CalculatorInput): void {
  const { gender, bodyWeightKg, squatKg, benchKg, deadliftKg } = input;
  if (gender !== "male" && gender !== "female") {
    throw new Error("Gender must be 'male' or 'female'.");
  }
  if (bodyWeightKg <= 0) {
    throw new Error("Body weight must be greater than 0 kg.");
  }
  if (squatKg < 0 || benchKg < 0 || deadliftKg < 0) {
    throw new Error("Lifts must be zero or greater.");
  }
}

function computeTotal(input: CalculatorInput): number {
  return input.squatKg + input.benchKg + input.deadliftKg;
}

function computeDots(total: number, weightKg: number, gender: "male" | "female"): number {
  const coefficients =
    gender === "male"
      ? {
          a: -0.000001093,
          b: 0.0007391293,
          c: -0.1918759221,
          d: 24.0900756,
          e: -307.75076,
          f: 2880,
        }
      : {
          a: -0.0000010706,
          b: 0.0005158568,
          c: -0.1126655495,
          d: 13.6175032,
          e: -57.96288,
          f: 320,
        };

  const { a, b, c, d, e, f } = coefficients;
  const w = weightKg;
  const denominator = a * Math.pow(w, 5) + b * Math.pow(w, 4) + c * Math.pow(w, 3) + d * Math.pow(w, 2) + e * w + f;
  return total * 500 / denominator;
}

function computeWilks(total: number, weightKg: number, gender: "male" | "female"): number {
  const coefficients =
    gender === "male"
      ? {
          a: -216.0475144,
          b: 16.2606339,
          c: -0.002388645,
          d: -0.00113732,
          e: 0.00000701863,
          f: -0.00000001291,
        }
      : {
          a: 594.31747775582,
          b: -27.23842536447,
          c: 0.82112226871,
          d: -0.00930733913,
          e: 0.00004731582,
          f: -0.00000009054,
        };

  const { a, b, c, d, e, f } = coefficients;
  const w = weightKg;
  const denominator = a + b * w + c * Math.pow(w, 2) + d * Math.pow(w, 3) + e * Math.pow(w, 4) + f * Math.pow(w, 5);
  return total * 500 / denominator;
}

function computeIpfGL(total: number, weightKg: number, gender: "male" | "female"): number {
  const coefficients =
    gender === "male"
      ? { a: 1199.72839, b: 1025.21504, c: 0.00921 }
      : { a: 610.32796, b: 1045.59282, c: 0.03048 };
  const { a, b, c } = coefficients;
  const w = weightKg;
  const denominator = a - b * Math.exp(-c * w);
  return (total * 100) / denominator;
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);
  const totalKg = computeTotal(input);
  const dots = computeDots(totalKg, input.bodyWeightKg, input.gender);
  const wilks = computeWilks(totalKg, input.bodyWeightKg, input.gender);
  const ipfGL = computeIpfGL(totalKg, input.bodyWeightKg, input.gender);

  return {
    totalKg: roundToTwo(totalKg),
    dots: roundToTwo(dots),
    wilks: roundToTwo(wilks),
    ipfGL: roundToTwo(ipfGL),
  };
}
