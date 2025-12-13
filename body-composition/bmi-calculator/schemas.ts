import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  heightCm: z.number().describe("Height (cm)")
});

export const outputSchema = z.object({
  bmi: z.number(),
  category: z.string()
});
