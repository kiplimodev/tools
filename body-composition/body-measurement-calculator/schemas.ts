import { z } from "zod";

export const inputSchema = z.object({
  neckCm: z.number().describe("Neck circumference (cm)").optional(),
  chestCm: z.number().describe("Chest circumference (cm)").optional(),
  waistCm: z.number().describe("Waist circumference (cm)").optional(),
  hipCm: z.number().describe("Hip circumference (cm)").optional(),
  thighCm: z.number().describe("Thigh circumference (cm)").optional(),
  calfCm: z.number().describe("Calf circumference (cm)").optional(),
  bicepCm: z.number().describe("Bicep circumference (cm)").optional(),
  forearmCm: z.number().describe("Forearm circumference (cm)").optional()
});

export const outputSchema = z.object({
  measurementsCount: z.number(),
  totalCm: z.number(),
  averageCm: z.number(),
  minCm: z.number(),
  maxCm: z.number(),
  measurements: z.record(z.number())
});
