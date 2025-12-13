import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  durationMinutes: z.number().describe("Duration (minutes)"),
  speedKmh: z.number().describe("Speed (km/h)")
});

export const outputSchema = z.object({
  caloriesBurned: z.number(),
  metValue: z.number()
});
