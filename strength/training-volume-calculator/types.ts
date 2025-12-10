export interface SingleExerciseInput {
  sets: number;
  reps: number;
  weightKg: number;
}

export interface ExerciseInput {
  name: string;
  sets: number;
  reps: number;
  weightKg: number;
}

export interface CalculatorInput {
  sets?: number;
  reps?: number;
  weightKg?: number;
  exercises?: ExerciseInput[];
}

export interface ExerciseVolume {
  name: string;
  volume: number;
}

export interface CalculatorOutput {
  totalVolume: number;
  volumePerSet?: number;
  exerciseVolumes?: ExerciseVolume[];
}
