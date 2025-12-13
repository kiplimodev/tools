import { z } from "zod";

const rangeSchema = z.object({
  min: z.number().describe("Minimum"),
  max: z.number().describe("Maximum")
});

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  caloriesPerDay: z.number().describe("Calories per day"),
  goal: z.enum(["cut", "maintain", "bulk"]).describe("Goal").optional()
});

export const outputSchema = z.object({
  minimumFatGrams: z.number(),
  recommendedRange: rangeSchema,
  percentageRange: rangeSchema,
  healthMinimum: z.number(),
  goalAdjustedRange: rangeSchema.optional()
});
