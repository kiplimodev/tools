import { z } from "zod";

export const inputSchema = z.object({
  gender: z.enum(["male", "female"]).describe("Gender"),
  heightCm: z.number().describe("Height (cm)"),
  neckCm: z.number().describe("Neck circumference (cm)"),
  waistCm: z.number().describe("Waist circumference (cm)"),
  hipCm: z.number().describe("Hip circumference (cm)").optional()
});

export const outputSchema = z.object({
  bodyFatPercentage: z.number()
});
