import { z } from "zod";

export const inputSchema = z.object({
  bodyWeightKg: z.number().describe("Body weight (kg)"),
  maxPullups: z.number().describe("Max pull-ups"),
  addedWeightKg: z.number().describe("Added weight (kg)").optional(),
  goalReps: z.number().describe("Goal reps").optional(),
  grip: z.enum(["standard", "wide", "chinup"]).describe("Grip type").optional(),
  tempo: z.enum(["normal", "slow", "fast"]).describe("Tempo").optional()
});

export const outputSchema = z.object({
  effectiveLoadKg: z.number(),
  estimated1RM: z.number(),
  strengthScore: z.number(),
  predictedMaxReps: z.number().optional(),
  caloriesBurned: z.number(),
  progressionTier: z.string()
});
