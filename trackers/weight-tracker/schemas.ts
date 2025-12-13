import { z } from "zod";

const weightEntrySchema = z.object({
  date: z.string().describe("Date (YYYY-MM-DD)"),
  weightKg: z.number().describe("Weight (kg)")
});

export const inputSchema = z.object({
  entries: z.array(weightEntrySchema).describe("Weight entries"),
  goalWeightKg: z.number().describe("Goal weight (kg)").optional()
});

export const outputSchema = z.object({
  sortedEntries: z.array(weightEntrySchema),
  dailyChange: z.number().optional(),
  weeklyAverage: z.number().optional(),
  rateKgPerWeek: z.number().optional(),
  projectedDateToGoal: z.string().optional(),
  trendDirection: z.enum(["up", "down", "stable"])
});
