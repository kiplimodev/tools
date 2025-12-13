import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  bodyFatPercent: z.number().describe("Body fat (%)").optional(),
  tdee: z.number().describe("Total daily energy expenditure"),
  surplusCalories: z.number().describe("Calorie surplus").optional(),
  proteinPerKg: z.number().describe("Protein per kg").optional(),
  fatPercent: z.number().describe("Fat percentage").optional()
});

export const outputSchema = z.object({
  dailyCalories: z.number(),
  proteinGrams: z.number(),
  fatGrams: z.number(),
  carbGrams: z.number(),
  weeklyCaloricSurplus: z.number(),
  projectedWeeklyWeightGainKg: z.number(),
  rateClassification: z.string(),
  leanMassGainEstimate: z.number().optional(),
  fatMassGainEstimate: z.number().optional()
});
