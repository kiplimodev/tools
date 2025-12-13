import { z } from "zod";

export const inputSchema = z.object({
  gender: z.enum(["male", "female"]).describe("Gender"),
  waistCm: z.number().describe("Waist circumference (cm)"),
  hipCm: z.number().describe("Hip circumference (cm)")
});

export const outputSchema = z.object({
  ratio: z.number(),
  category: z.string()
});
