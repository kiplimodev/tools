import { z } from "zod";

export const inputSchema = z.object({
  steps: z.number().describe("Steps"),
  weightKg: z.number().describe("Weight (kg)"),
  strideLengthMeters: z.number().describe("Stride length (meters)").optional(),
  intensity: z.enum(["low", "moderate", "high"]).describe("Intensity").optional()
});

export const outputSchema = z.object({
  caloriesBurned: z.number(),
  distanceKm: z.number(),
  caloriesPerStep: z.number()
});
