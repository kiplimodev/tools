export interface CalculatorInput {
  barWeightKg: number;
  targetWeightKg: number;
  availablePlatesKg?: number[];
}

export interface CalculatorOutput {
  perSideWeight: number;
  platesPerSide: number[];
  missingWeight?: number;
}
