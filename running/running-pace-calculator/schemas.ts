import { z } from "zod";

export const inputSchema = z.object({
  distance: z.number().describe("Distance"),
  unit: z.enum(["km", "mi"]).describe("Distance unit"),
  time: z.string().describe("Time (hh:mm:ss)")
});

export const outputSchema = z.object({
  pacePerKm: z.string(),
  pacePerMile: z.string(),
  speedKmh: z.number(),
  speedMph: z.number()
});
