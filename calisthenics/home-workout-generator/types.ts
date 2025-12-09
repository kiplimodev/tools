export type DifficultyLevel = "beginner" | "novice" | "intermediate" | "advanced" | "elite";

export type FocusArea = "full-body" | "upper" | "lower" | "core";

export interface EquipmentAvailability {
  dumbbells?: boolean;
  pullupBar?: boolean;
  resistanceBands?: boolean;
  chair?: boolean;
}

export interface CalculatorInput {
  difficulty: DifficultyLevel;
  equipment?: EquipmentAvailability;
  durationMinutes?: number;
  focus?: FocusArea;
}

export interface ExercisePlan {
  name: string;
  sets: number;
  reps: string;
  restSeconds: number;
}

export interface CalculatorOutput {
  workoutName: string;
  totalDuration: number;
  exercises: ExercisePlan[];
}
