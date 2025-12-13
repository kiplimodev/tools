import { getFieldType } from "./zod-utils";
import { ZodObject, ZodRawShape, ZodTypeAny } from "zod";

export function parseFormValues<T extends ZodRawShape>(schema: ZodObject<T>, values: Record<string, string>) {
  const shape = schema.shape as Record<string, ZodTypeAny>;
  const parsedInput: Record<string, unknown> = {};

  for (const key of Object.keys(shape)) {
    const fieldSchema = shape[key];
    const rawValue = values[key];
    const fieldType = getFieldType(fieldSchema);

    if (fieldType === "number") {
      const numeric = rawValue === "" ? NaN : Number(rawValue);
      parsedInput[key] = numeric;
    } else {
      parsedInput[key] = rawValue;
    }
  }

  return schema.parse(parsedInput);
}
