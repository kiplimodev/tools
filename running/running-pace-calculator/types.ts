export interface CalculatorInput {
  distance: number;
  unit: "km" | "mi";
  time: string; // "hh:mm:ss"
}

export interface CalculatorOutput {
  pacePerKm: string;
  pacePerMile: string;
  speedKmh: number;
  speedMph: number;
}
