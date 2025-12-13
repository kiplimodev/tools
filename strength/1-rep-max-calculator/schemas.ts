import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  reps: z.number().describe("Reps")
});

export const outputSchema = z.object({
  epley: z.number(),
  brzycki: z.number(),
  lombardi: z.number(),
  oconner: z.number(),
  lander: z.number()
});
