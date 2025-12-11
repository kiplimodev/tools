export interface CalculatorInput {
  distance: number; // race distance
  unit: "km" | "mi"; // race unit input
  time: string; // "hh:mm:ss"
}

export interface TrainingPaces {
  easy: string;
  marathon: string;
  threshold: string;
  interval: string;
  repetition: string;
}

export interface PredictedRace {
  distanceName: string;
  distanceMeters: number;
  predictedTime: string;
}

export interface CalculatorOutput {
  vdot: number;
  trainingPaces: TrainingPaces;
  predictedRaces: PredictedRace[];
}
