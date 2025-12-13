import { z } from "zod";

export const inputSchema = z.object({
  gender: z.enum(["male", "female"]).describe("Gender"),
  weightKg: z.number().describe("Weight (kg)"),
  heightCm: z.number().describe("Height (cm)")
});

export const outputSchema = z.object({
  leanBodyMassKg: z.number()
});
