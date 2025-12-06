export interface CalculatorInput {
  totalDistance: number;
  unit: "km" | "mi";
  time: string;
  splitDistance: number;
  splitUnit?: "km" | "mi";
}

export interface SplitDetail {
  splitNumber: number;
  splitDistance: number;
  cumulativeDistance: number;
  splitTime: string;
  cumulativeTime: string;
}

export interface CalculatorOutput {
  splits: SplitDetail[];
}
