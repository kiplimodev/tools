import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  durationMinutes: z.number().describe("Duration (minutes)"),
  intensity: z
    .enum(["leisure", "moderate", "vigorous", "very-vigorous", "race"])
    .describe("Intensity")
});

export const outputSchema = z.object({
  caloriesBurned: z.number(),
  metValue: z.number()
});
