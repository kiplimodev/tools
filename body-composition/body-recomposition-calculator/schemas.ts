import { z } from "zod";

export const inputSchema = z.object({
  currentWeightKg: z.number().describe("Current weight (kg)"),
  currentBodyFatPercent: z.number().describe("Current body fat (%)"),
  goalWeightKg: z.number().describe("Goal weight (kg)").optional(),
  goalBodyFatPercent: z.number().describe("Goal body fat (%)").optional(),
  weeklyFatChangeKg: z.number().describe("Weekly fat change (kg)").optional(),
  weeklyLeanChangeKg: z.number().describe("Weekly lean change (kg)").optional()
});

export const outputSchema = z.object({
  currentFatMassKg: z.number(),
  currentLeanMassKg: z.number(),
  goalFatMassKg: z.number().optional(),
  goalLeanMassKg: z.number().optional(),
  fatChangeKg: z.number().optional(),
  leanChangeKg: z.number().optional(),
  weeklyFatChangeKg: z.number().optional(),
  weeklyLeanChangeKg: z.number().optional(),
  estimatedWeeksToGoal: z.number().optional(),
  classification: z.string()
});
