import { z } from "zod";

export const inputSchema = z.object({
  protocol: z.enum(["16:8", "18:6", "20:4", "23:1", "custom"]).describe("Fasting protocol"),
  fastingHours: z.number().describe("Fasting hours").optional(),
  eatingHours: z.number().describe("Eating hours").optional(),
  dailyCalories: z.number().describe("Daily calories").optional(),
  meals: z.number().describe("Meals per day").optional(),
  startTime: z.string().describe("Start time").optional()
});

export const outputSchema = z.object({
  fastingHours: z.number(),
  eatingHours: z.number(),
  eatingWindowStart: z.string().optional(),
  eatingWindowEnd: z.string().optional(),
  mealTimes: z.array(z.string()).optional(),
  caloriesPerMeal: z.number().optional(),
  weeklyFastingHours: z.number()
});
