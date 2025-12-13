import { z } from "zod";

export const inputSchema = z.object({
  barWeightKg: z.number().describe("Bar weight (kg)"),
  targetWeightKg: z.number().describe("Target weight (kg)"),
  availablePlatesKg: z.array(z.number()).describe("Available plates (kg)").optional()
});

export const outputSchema = z.object({
  perSideWeight: z.number(),
  platesPerSide: z.array(z.number()),
  missingWeight: z.number().optional()
});
