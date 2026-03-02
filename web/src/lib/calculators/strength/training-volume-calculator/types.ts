export type ExerciseInput = {
  name: string;
  sets: number;
  reps: number;
  weightKg: number;
};

export type Input = {
  // Single-exercise mode
  sets?: number;
  reps?: number;
  weightKg?: number;
  // Multi-exercise mode
  exercises?: ExerciseInput[];
};

export type ExerciseVolume = {
  name: string;
  volume: number;
};

export type Output = {
  totalVolume: number;
  volumePerSet: number | null;
  exerciseVolumes: ExerciseVolume[] | null;
};
