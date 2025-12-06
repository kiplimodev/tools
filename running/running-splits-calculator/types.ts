export interface CalculatorInput {
  distance: number;
  unit: "km" | "mi";
  time: string; // hh:mm:ss
  splitUnit?: "km" | "mi";
}

export interface SplitResult {
  splitNumber: number;
  cumulativeDistance: number;
  splitTime: string;
  cumulativeTime: string;
}

export interface CalculatorOutput {
  splits: SplitResult[];
}
