import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)").optional(),
  reps: z.number().describe("Reps").optional(),
  rpe: z.number().describe("RPE").optional(),
  targetReps: z.number().describe("Target reps").optional(),
  targetRpe: z.number().describe("Target RPE").optional(),
  estimated1RM: z.number().describe("Estimated 1RM").optional()
});

export const outputSchema = z.object({
  estimated1RM: z.number().optional(),
  percent1RM: z.number().optional(),
  rir: z.number().optional(),
  recommendedTrainingMax: z.number().optional(),
  predictedWeight: z.number().optional()
});
