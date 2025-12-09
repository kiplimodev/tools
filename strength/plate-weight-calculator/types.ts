export interface CalculatorInput {
  targetPerSideKg: number;
  availablePlatesKg?: number[];
}

export interface CalculatorOutput {
  plates: number[];
  totalLoaded: number;
  missingWeight?: number;
}
