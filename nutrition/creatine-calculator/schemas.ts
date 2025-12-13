import { z } from "zod";

export const inputSchema = z.object({
  weightKg: z.number().describe("Weight (kg)"),
  useLoadingPhase: z.boolean().describe("Use loading phase").optional(),
  loadingDays: z.number().describe("Loading days").optional(),
  scoopsPerServing: z.number().describe("Scoops per serving").optional()
});

export const outputSchema = z.object({
  loadingDosePerDay: z.number().optional(),
  maintenanceDosePerDay: z.number(),
  totalCreatineForLoading: z.number().optional(),
  totalCreatinePerWeek: z.number(),
  servingsPerDay: z.number(),
  estimatedSaturationDays: z.number()
});
