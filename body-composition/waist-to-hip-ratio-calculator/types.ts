export interface CalculatorInput {
  gender: "male" | "female";
  waistCm: number;
  hipCm: number;
}

export interface CalculatorOutput {
  ratio: number;
  category: string;
}
