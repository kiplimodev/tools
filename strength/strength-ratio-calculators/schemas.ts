import { z } from "zod";

const proportionsSchema = z.object({
  benchPercent: z.number().describe("Bench percent"),
  squatPercent: z.number().describe("Squat percent"),
  deadliftPercent: z.number().describe("Deadlift percent")
});

export const inputSchema = z.object({
  bodyWeightKg: z.number().describe("Body weight (kg)"),
  benchKg: z.number().describe("Bench (kg)"),
  squatKg: z.number().describe("Squat (kg)"),
  deadliftKg: z.number().describe("Deadlift (kg)"),
  ohpKg: z.number().describe("Overhead press (kg)").optional(),
  rowKg: z.number().describe("Row (kg)").optional()
});

export const outputSchema = z.object({
  benchToBody: z.number(),
  squatToBody: z.number(),
  deadliftToBody: z.number(),
  pushPullRatio: z.number().optional(),
  squatDeadliftRatio: z.number(),
  upperLowerBalance: z.string(),
  proportions: proportionsSchema
});
