import { z } from "zod";

export const inputSchema = z.object({
  tdee: z.number().describe("Total daily energy expenditure"),
  surplusCalories: z.number().describe("Calorie surplus"),
  weightKg: z.number().describe("Weight (kg)"),
  proteinPerKg: z.number().describe("Protein per kg"),
  fatPercentage: z.number().describe("Fat percentage").optional()
});

export const outputSchema = z.object({
  dailyCalories: z.number(),
  proteinGrams: z.number(),
  fatGrams: z.number(),
  carbGrams: z.number(),
  weeklyGainKg: z.number(),
  monthlyGainKg: z.number(),
  leanMassGainKg: z.number(),
  fatMassGainKg: z.number()
});
