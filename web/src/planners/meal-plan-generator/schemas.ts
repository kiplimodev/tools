import { z } from "zod";

const macroSplitSchema = z.object({
  proteinPercent: z.number().describe("Protein percent"),
  fatPercent: z.number().describe("Fat percent"),
  carbPercent: z.number().describe("Carb percent")
});

const foodPortionSchema = z.object({
  name: z.string().describe("Food name"),
  calories: z.number().describe("Calories"),
  protein: z.number().describe("Protein (g)"),
  fat: z.number().describe("Fat (g)"),
  carbs: z.number().describe("Carbs (g)")
});

const mealPlanEntrySchema = z.object({
  mealNumber: z.number().describe("Meal number"),
  calories: z.number().describe("Calories"),
  protein: z.number().describe("Protein (g)"),
  fat: z.number().describe("Fat (g)"),
  carbs: z.number().describe("Carbs (g)"),
  foods: z.array(foodPortionSchema).describe("Foods")
});

export const inputSchema = z.object({
  targetCalories: z.number().describe("Target calories"),
  meals: z.number().describe("Number of meals"),
  diet: z
    .enum(["omnivore", "vegetarian", "vegan", "carnivore", "high_protein", "low_fat"])
    .describe("Diet type")
    .optional(),
  macroSplit: macroSplitSchema.optional()
});

export const outputSchema = z.object({
  dailyCalories: z.number(),
  proteinGrams: z.number(),
  fatGrams: z.number(),
  carbGrams: z.number(),
  meals: z.array(mealPlanEntrySchema)
});
