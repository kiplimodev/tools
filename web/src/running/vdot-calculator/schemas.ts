import { z } from "zod";

const trainingPacesSchema = z.object({
  easy: z.string().describe("Easy pace"),
  marathon: z.string().describe("Marathon pace"),
  threshold: z.string().describe("Threshold pace"),
  interval: z.string().describe("Interval pace"),
  repetition: z.string().describe("Repetition pace")
});

const predictedRaceSchema = z.object({
  distanceName: z.string().describe("Distance name"),
  distanceMeters: z.number().describe("Distance in meters"),
  predictedTime: z.string().describe("Predicted time")
});

export const inputSchema = z.object({
  distance: z.number().describe("Race distance"),
  unit: z.enum(["km", "mi"]).describe("Race unit"),
  time: z.string().describe("Time (hh:mm:ss)")
});

export const outputSchema = z.object({
  vdot: z.number(),
  trainingPaces: trainingPacesSchema,
  predictedRaces: z.array(predictedRaceSchema)
});
