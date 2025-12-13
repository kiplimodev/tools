import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  durationMinutes: z.number().describe("Duration (minutes)"),
  pace: z.enum(["slow", "moderate", "brisk", "very-brisk"]).describe("Pace")
});

export const outputSchema = z.object({
  caloriesBurned: z.number(),
  metValue: z.number()
});
