import { z } from "zod";
import type { InputFieldDefinition } from "./form-utils";

export function buildZodSchema(fields: InputFieldDefinition[]): z.ZodObject<any> {
  const shape: Record<string, z.ZodTypeAny> = {};

  fields.forEach((field) => {
    let base: z.ZodTypeAny;
    switch (field.type) {
      case "number":
        base = z.preprocess((value) => {
          if (value === "") return undefined;
          if (typeof value === "string") return Number(value);
          return value;
        }, z.number({ invalid_type_error: "Expected a number" }));
        break;
      case "boolean":
        base = z.preprocess((value) => {
          if (typeof value === "string") return value === "true" || value === "on";
          return Boolean(value);
        }, z.boolean());
        break;
      case "enum":
        base = z.enum((field.options ?? ["value"]).map(String) as [string, ...string[]]);
        break;
      case "string":
        base = z.string();
        break;
      default:
        base = z.any();
        break;
    }

    shape[field.name] = field.optional ? base.optional() : base;
  });

  return z.object(shape);
}
