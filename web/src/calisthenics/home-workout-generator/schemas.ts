import { z } from "zod";

const equipmentOptionsSchema = z.object({
  dumbbells: z.boolean().describe("Dumbbells available").optional(),
  pullupBar: z.boolean().describe("Pull-up bar available").optional(),
  resistanceBands: z.boolean().describe("Resistance bands available").optional(),
  chair: z.boolean().describe("Chair available").optional()
});

const exercisePlanSchema = z.object({
  name: z.string().describe("Exercise name"),
  sets: z.number().describe("Sets"),
  reps: z.string().describe("Reps"),
  restSeconds: z.number().describe("Rest (seconds)")
});

export const inputSchema = z.object({
  difficulty: z
    .enum(["beginner", "novice", "intermediate", "advanced", "elite"])
    .describe("Difficulty"),
  equipment: equipmentOptionsSchema.optional(),
  durationMinutes: z.number().describe("Duration (minutes)").optional(),
  focus: z.enum(["full-body", "upper", "lower", "core"]).describe("Focus area").optional()
});

export const outputSchema = z.object({
  workoutName: z.string(),
  totalDuration: z.number(),
  exercises: z.array(exercisePlanSchema)
});
