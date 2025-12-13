import { z } from "zod";

export const inputSchema = z.object({
  age: z.number().describe("Age"),
  goal: z.enum(["health", "weight-loss", "fitness"]).describe("Goal"),
  weightKg: z.number().describe("Weight (kg)").optional(),
  currentSteps: z.number().describe("Current daily steps").optional()
});

export const outputSchema = z.object({
  recommendedSteps: z.number(),
  category: z.string(),
  estimatedCalories: z.number().optional(),
  deltaFromCurrent: z.number().optional()
});
