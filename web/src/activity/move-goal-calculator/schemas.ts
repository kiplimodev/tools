import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  tdee: z.number().describe("Total daily energy expenditure"),
  goal: z.enum(["health", "weight-loss", "fitness"]).describe("Goal"),
  weeklyCalorieDeficit: z.number().describe("Weekly calorie deficit").optional(),
  weeklyCalorieSurplus: z.number().describe("Weekly calorie surplus").optional()
});

export const outputSchema = z.object({
  dailyMoveCalories: z.number(),
  recommendedRange: z.tuple([z.number(), z.number()]),
  goalClassification: z.string()
});
