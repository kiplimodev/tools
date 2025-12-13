import { getFieldType, getShapeFromSchema } from "./zod-utils";
import { ZodObject, ZodRawShape, ZodTypeAny } from "zod";

export function parseFormValues<T extends ZodRawShape>(schema: ZodObject<T>, values: Record<string, string | boolean>) {
  const shape = (schema.shape as Record<string, ZodTypeAny>) || getShapeFromSchema(schema);
  const parsedInput: Record<string, unknown> = {};

  if (!shape) {
    throw new Error("Invalid schema shape for AutoForm.");
  }

  for (const key of Object.keys(shape)) {
    const fieldSchema = shape[key];
    const rawValue = values[key];
    const fieldType = getFieldType(fieldSchema);

    if (fieldType === "number") {
      const numeric = rawValue === "" ? NaN : Number(rawValue);
      parsedInput[key] = numeric;
    } else if (fieldType === "boolean") {
      parsedInput[key] = Boolean(rawValue);
    } else {
      parsedInput[key] = rawValue;
    }
  }

  return schema.parse(parsedInput);
}
