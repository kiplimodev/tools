export interface CalculatorInput {
  gender: "male" | "female";
  heightCm: number;
  neckCm: number;
  waistCm: number;
  hipCm?: number;
}

export interface CalculatorOutput {
  bodyFatPercentage: number;
}
