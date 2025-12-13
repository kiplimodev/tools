import { z } from "zod";

const exercisePlanSchema = z.object({
  name: z.string().describe("Exercise name"),
  sets: z.number().describe("Sets"),
  reps: z.union([z.number(), z.string()]).describe("Reps"),
  equipment: z.string().describe("Equipment")
});

const programDaySchema = z.object({
  day: z.number().describe("Day"),
  focus: z.string().describe("Focus"),
  exercises: z.array(exercisePlanSchema).describe("Exercises")
});

export const inputSchema = z.object({
  goal: z.enum(["strength", "hypertrophy", "endurance", "fat_loss", "general"]).describe("Goal"),
  experience: z.enum(["beginner", "intermediate", "advanced"]).describe("Experience"),
  equipment: z.enum(["bodyweight", "dumbbells", "gym"]).describe("Equipment").optional(),
  daysPerWeek: z.number().describe("Days per week").optional(),
  sessionLength: z.enum(["short", "medium", "long"]).describe("Session length").optional()
});

export const outputSchema = z.object({
  program: z.array(programDaySchema)
});
