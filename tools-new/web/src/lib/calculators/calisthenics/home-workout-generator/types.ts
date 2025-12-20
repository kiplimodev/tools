export type Input = {
  /** Fitness level of the user */
  level: "beginner" | "intermediate" | "advanced";

  /** Available workout time in minutes */
  durationMinutes: number;
};
