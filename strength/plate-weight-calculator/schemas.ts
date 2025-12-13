import { z } from "zod";

export const inputSchema = z.object({
  targetPerSideKg: z.number().describe("Target per side (kg)"),
  availablePlatesKg: z.array(z.number()).describe("Available plates (kg)").optional()
});

export const outputSchema = z.object({
  plates: z.array(z.number()),
  totalLoaded: z.number(),
  missingWeight: z.number().optional()
});
