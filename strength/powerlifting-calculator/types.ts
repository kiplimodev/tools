export interface CalculatorInput {
  gender: "male" | "female";
  bodyWeightKg: number;
  squatKg: number;
  benchKg: number;
  deadliftKg: number;
}

export interface CalculatorOutput {
  totalKg: number;
  dots: number;
  wilks: number;
  ipfGL: number;
}
