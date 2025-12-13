import { z } from "zod";

export const inputSchema = z.object({
  gender: z.enum(["male", "female"]).describe("Gender"),
  heightCm: z.number().describe("Height (cm)")
});

export const outputSchema = z.object({
  devine: z.number(),
  hamwi: z.number(),
  robinson: z.number(),
  miller: z.number()
});
