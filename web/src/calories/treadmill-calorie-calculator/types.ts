export interface TreadmillCalorieCalculatorInput {
  weightKg: number; // user weight in kilograms
  durationMinutes: number; // workout duration
  speed: number; // treadmill speed
  unit: "kmh" | "mph"; // input speed unit
  inclinePercent?: number; // optional incline
}

export interface TreadmillCalorieCalculatorOutput {
  calories: number; // rounded kcal burned
  met: number; // MET intensity used
  speedKmh: number; // normalized km/h
  inclinePercent: number;
}
