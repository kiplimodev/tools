import { z } from "zod";

export const inputSchema = z.object({
  waistCm: z.number().describe("Waist circumference (cm)"),
  heightCm: z.number().describe("Height (cm)")
});

export const outputSchema = z.object({
  ratio: z.number(),
  category: z.string()
});
