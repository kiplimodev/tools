import { z } from "zod";

const intervalBreakdownSchema = z.object({
  intervalNumber: z.number().describe("Interval number"),
  intervalTime: z.string().describe("Interval time"),
  restTime: z.string().describe("Rest time"),
  cumulativeTime: z.string().describe("Cumulative time"),
  cumulativeDistance: z.number().describe("Cumulative distance")
});

export const inputSchema = z.object({
  intervalDistance: z.number().describe("Interval distance"),
  intervalUnit: z.enum(["km", "mi"]).describe("Interval unit"),
  numIntervals: z.number().describe("Number of intervals"),
  paceTime: z.string().describe("Pace time"),
  paceUnit: z.enum(["km", "mi"]).describe("Pace unit"),
  restTime: z.string().describe("Rest time"),
  warmupTime: z.string().describe("Warm-up time").optional(),
  cooldownTime: z.string().describe("Cooldown time").optional()
});

export const outputSchema = z.object({
  totalDistance: z.number(),
  totalTime: z.string(),
  workoutBreakdown: z.array(intervalBreakdownSchema)
});
