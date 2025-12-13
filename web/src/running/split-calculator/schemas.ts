import { z } from "zod";

const splitDetailSchema = z.object({
  splitNumber: z.number().describe("Split number"),
  splitDistance: z.number().describe("Split distance"),
  cumulativeDistance: z.number().describe("Cumulative distance"),
  splitTime: z.string().describe("Split time"),
  cumulativeTime: z.string().describe("Cumulative time")
});

export const inputSchema = z.object({
  totalDistance: z.number().describe("Total distance"),
  unit: z.enum(["km", "mi"]).describe("Distance unit"),
  time: z.string().describe("Time"),
  splitDistance: z.number().describe("Split distance"),
  splitUnit: z.enum(["km", "mi"]).describe("Split unit").optional()
});

export const outputSchema = z.object({
  splits: z.array(splitDetailSchema)
});
