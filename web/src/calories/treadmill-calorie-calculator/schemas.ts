import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  durationMinutes: z.number().describe("Duration (minutes)"),
  speed: z.number().describe("Speed"),
  unit: z.enum(["kmh", "mph"]).describe("Speed unit"),
  inclinePercent: z.number().describe("Incline percent").optional()
});

export const outputSchema = z.object({
  calories: z.number(),
  met: z.number(),
  speedKmh: z.number(),
  inclinePercent: z.number()
});
