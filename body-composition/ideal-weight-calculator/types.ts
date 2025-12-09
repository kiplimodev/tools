/**
 * Input and output types for the ideal weight calculator using multiple formulas.
 */

export interface CalculatorInput {
  gender: "male" | "female";
  heightCm: number;
}

export interface CalculatorOutput {
  devine: number;
  hamwi: number;
  robinson: number;
  miller: number;
}
