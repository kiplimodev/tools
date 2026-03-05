export interface CalculatorInput {
  gender: "male" | "female";
  weightKg: number;
  heightCm: number;
}

export interface CalculatorOutput {
  leanBodyMassKg: number;
}
