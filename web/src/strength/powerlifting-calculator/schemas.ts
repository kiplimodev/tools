import { z } from "zod";

export const inputSchema = z.object({
  gender: z.enum(["male", "female"]).describe("Gender"),
  bodyWeightKg: z.number().describe("Body weight (kg)"),
  squatKg: z.number().describe("Squat (kg)"),
  benchKg: z.number().describe("Bench (kg)"),
  deadliftKg: z.number().describe("Deadlift (kg)")
});

export const outputSchema = z.object({
  totalKg: z.number(),
  dots: z.number(),
  wilks: z.number(),
  ipfGL: z.number()
});
