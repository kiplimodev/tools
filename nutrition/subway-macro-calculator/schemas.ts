import { z } from "zod";

const subwayItemSelectionSchema = z.object({
  itemId: z.string().describe("Item ID"),
  size: z.enum(["6-inch", "footlong"]).describe("Size").optional(),
  bread: z.string().describe("Bread").optional(),
  cheese: z.string().describe("Cheese").optional(),
  sauces: z.array(z.string()).describe("Sauces").optional(),
  addOns: z.array(z.string()).describe("Add-ons").optional(),
  quantity: z.number().describe("Quantity").optional()
});

const subwayItemMacroSchema = z.object({
  itemId: z.string().describe("Item ID"),
  name: z.string().describe("Name"),
  size: z.string().describe("Size"),
  bread: z.string().describe("Bread"),
  cheese: z.string().describe("Cheese"),
  sauces: z.array(z.string()).describe("Sauces"),
  addOns: z.array(z.string()).describe("Add-ons"),
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
  items: z.array(subwayItemSelectionSchema).describe("Items")
});

export const outputSchema = z.object({
  items: z.array(subwayItemMacroSchema),
  totals: totalsSchema
});
