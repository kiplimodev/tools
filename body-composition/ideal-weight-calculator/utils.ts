import { CalculatorInput, CalculatorOutput } from "./types";

const CM_PER_INCH = 2.54;
const BASE_HEIGHT_INCHES = 60; // 5 feet

function validateInput(input: CalculatorInput): void {
  if (input.heightCm <= 0) {
    throw new Error("Height must be greater than 0.");
  }
  if (input.gender !== "male" && input.gender !== "female") {
    throw new Error("Gender must be either 'male' or 'female'.");
  }
}

function convertHeightToInches(heightCm: number): number {
  return heightCm / CM_PER_INCH;
}

function inchesOverFiveFeet(heightInches: number): number {
  return Math.max(heightInches - BASE_HEIGHT_INCHES, 0);
}

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

function calculateDevine(gender: CalculatorInput["gender"], inchesOver: number): number {
  const base = gender === "male" ? 50 : 45.5;
  return base + 2.3 * inchesOver;
}

function calculateHamwi(gender: CalculatorInput["gender"], inchesOver: number): number {
  const base = gender === "male" ? 48 : 45.5;
  const multiplier = gender === "male" ? 2.7 : 2.2;
  return base + multiplier * inchesOver;
}

function calculateRobinson(gender: CalculatorInput["gender"], inchesOver: number): number {
  const base = gender === "male" ? 52 : 49;
  const multiplier = gender === "male" ? 1.9 : 1.7;
  return base + multiplier * inchesOver;
}

function calculateMiller(gender: CalculatorInput["gender"], inchesOver: number): number {
  const base = gender === "male" ? 56.2 : 53.1;
  const multiplier = gender === "male" ? 1.41 : 1.36;
  return base + multiplier * inchesOver;
}

/**
 * Core logic for the ideal weight calculator.
 */
export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInput(input);
  const heightInches = convertHeightToInches(input.heightCm);
  const inchesOver = inchesOverFiveFeet(heightInches);

  const devine = roundToOneDecimal(calculateDevine(input.gender, inchesOver));
  const hamwi = roundToOneDecimal(calculateHamwi(input.gender, inchesOver));
  const robinson = roundToOneDecimal(calculateRobinson(input.gender, inchesOver));
  const miller = roundToOneDecimal(calculateMiller(input.gender, inchesOver));

  return {
    devine,
    hamwi,
    robinson,
    miller,
  };
}
