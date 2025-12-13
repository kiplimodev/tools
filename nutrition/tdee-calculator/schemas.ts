import { z } from "zod";

export const inputSchema = z.object({
  gender: z.enum(["male", "female"]).describe("Gender"),
  age: z.number().describe("Age"),
  weightKg: z.number().describe("Weight (kg)"),
  heightCm: z.number().describe("Height (cm)"),
  activityLevel: z
    .enum(["sedentary", "light", "moderate", "active", "very_active", "athlete"])
    .describe("Activity level"),
  goal: z.enum(["maintain", "cut", "bulk"]).describe("Goal").optional(),
  bodyFatPercent: z.number().describe("Body fat (%)").optional()
});

export const outputSchema = z.object({
  bmr: z.number(),
  tdee: z.number(),
  activityMultiplier: z.number(),
  methodUsed: z.enum(["mifflin", "katch-mcardle"]),
  maintenanceCalories: z.number(),
  cutCalories: z.number().optional(),
  bulkCalories: z.number().optional(),
  proteinGrams: z.number(),
  fatGrams: z.number(),
  carbGrams: z.number()
});
