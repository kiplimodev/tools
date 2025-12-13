import { z } from "zod";

const splitResultSchema = z.object({
  splitNumber: z.number().describe("Split number"),
  cumulativeDistance: z.number().describe("Cumulative distance"),
  splitTime: z.string().describe("Split time"),
  cumulativeTime: z.string().describe("Cumulative time")
});

export const inputSchema = z.object({
  distance: z.number().describe("Distance"),
  unit: z.enum(["km", "mi"]).describe("Distance unit"),
  time: z.string().describe("Time (hh:mm:ss)"),
  splitUnit: z.enum(["km", "mi"]).describe("Split unit").optional()
});

export const outputSchema = z.object({
  splits: z.array(splitResultSchema)
});
