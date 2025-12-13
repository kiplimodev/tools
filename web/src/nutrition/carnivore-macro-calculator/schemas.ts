import { z } from "zod";

const foodItemInputSchema = z.object({
  id: z.string().describe("Item ID"),
  grams: z.number().describe("Grams"),
  quantity: z.number().describe("Quantity").optional()
});

const itemMacroResultSchema = z.object({
  id: z.string().describe("Item ID"),
  calories: z.number().describe("Calories"),
  protein: z.number().describe("Protein (g)"),
  fat: z.number().describe("Fat (g)"),
  carbs: z.number().describe("Carbs (g)"),
  grams: z.number().describe("Grams"),
  quantity: z.number().describe("Quantity")
});

export const inputSchema = z.object({
  items: z.array(foodItemInputSchema).describe("Food items")
});

export const outputSchema = z.object({
  totalCalories: z.number(),
  totalProtein: z.number(),
  totalFat: z.number(),
  totalCarbs: z.number(),
  items: z.array(itemMacroResultSchema)
});
