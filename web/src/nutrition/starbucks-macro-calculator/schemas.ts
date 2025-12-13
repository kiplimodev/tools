import { z } from "zod";

const starbucksItemSelectionSchema = z.object({
  itemId: z.string().describe("Item ID"),
  size: z.string().describe("Size").optional(),
  quantity: z.number().describe("Quantity").optional()
});

const starbucksItemMacroSchema = z.object({
  itemId: z.string().describe("Item ID"),
  name: z.string().describe("Name"),
  size: z.string().describe("Size"),
  quantity: z.number().describe("Quantity"),
  calories: z.number().describe("Calories"),
  protein: z.number().describe("Protein (g)"),
  carbs: z.number().describe("Carbs (g)"),
  fat: z.number().describe("Fat (g)"),
  sugar: z.number().describe("Sugar (g)")
});

const totalsSchema = z.object({
  calories: z.number().describe("Calories"),
  protein: z.number().describe("Protein (g)"),
  carbs: z.number().describe("Carbs (g)"),
  fat: z.number().describe("Fat (g)"),
  sugar: z.number().describe("Sugar (g)")
});

export const inputSchema = z.object({
  items: z.array(starbucksItemSelectionSchema).describe("Items")
});

export const outputSchema = z.object({
  items: z.array(starbucksItemMacroSchema),
  totals: totalsSchema
});
