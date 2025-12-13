import { z } from "zod";

const exerciseInputSchema = z.object({
  name: z.string().describe("Exercise name"),
  sets: z.number().describe("Sets"),
  reps: z.number().describe("Reps"),
  weightKg: z.number().describe("Weight (kg)")
});

const exerciseVolumeSchema = z.object({
  name: z.string().describe("Exercise name"),
  volume: z.number().describe("Volume")
});

export const inputSchema = z.object({
  sets: z.number().describe("Sets").optional(),
  reps: z.number().describe("Reps").optional(),
  weightKg: z.number().describe("Weight (kg)").optional(),
  exercises: z.array(exerciseInputSchema).describe("Exercises").optional()
});

export const outputSchema = z.object({
  totalVolume: z.number(),
  volumePerSet: z.number().optional(),
  exerciseVolumes: z.array(exerciseVolumeSchema).optional()
});
