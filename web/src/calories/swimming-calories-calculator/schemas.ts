import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  durationMinutes: z.number().describe("Duration (minutes)"),
  stroke: z
    .enum(["freestyle", "breaststroke", "butterfly", "backstroke"])
    .describe("Stroke"),
  intensity: z.enum(["light", "moderate", "vigorous"]).describe("Intensity")
});

export const outputSchema = z.object({
  caloriesBurned: z.number(),
  metValue: z.number()
});
