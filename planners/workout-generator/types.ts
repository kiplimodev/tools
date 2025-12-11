export type Goal = "strength" | "hypertrophy" | "endurance" | "fat_loss" | "general";

export type Experience = "beginner" | "intermediate" | "advanced";

export type EquipmentType = "bodyweight" | "dumbbells" | "gym";

export type SessionLength = "short" | "medium" | "long";

export interface CalculatorInput {
  goal: Goal;
  experience: Experience;
  equipment?: EquipmentType;
  daysPerWeek?: number;
  sessionLength?: SessionLength;
}

export interface ExercisePlan {
  name: string;
  sets: number;
  reps: number | string;
  equipment: string;
}

export interface ProgramDay {
  day: number;
  focus: string;
  exercises: ExercisePlan[];
}

export interface CalculatorOutput {
  program: ProgramDay[];
}
