export interface CalculatorInput {
  intervalDistance: number;
  intervalUnit: "km" | "mi";
  numIntervals: number;
  paceTime: string;
  paceUnit: "km" | "mi";
  restTime: string;
  warmupTime?: string;
  cooldownTime?: string;
}

export interface IntervalBreakdown {
  intervalNumber: number;
  intervalTime: string;
  restTime: string;
  cumulativeTime: string;
  cumulativeDistance: number;
}

export interface CalculatorOutput {
  totalDistance: number;
  totalTime: string;
  workoutBreakdown: IntervalBreakdown[];
}
