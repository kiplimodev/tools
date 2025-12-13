import { z } from "zod";

export const inputSchema = z.object({
  dailyProteinTarget: z.number().describe("Daily protein target (g)"),
  dietaryProteinIntake: z.number().describe("Dietary protein intake (g)"),
  proteinPerScoop: z.number().describe("Protein per scoop (g)"),
  caloriesPerScoop: z.number().describe("Calories per scoop").optional(),
  bagSizeGrams: z.number().describe("Bag size (g)").optional()
});

export const outputSchema = z.object({
  requiredSupplementProtein: z.number(),
  scoopsPerDay: z.number(),
  caloriesFromProteinPowder: z.number(),
  weeklyScoops: z.number(),
  weeklyProteinFromPowder: z.number(),
  daysPerBag: z.number(),
  needsSupplement: z.boolean()
});
