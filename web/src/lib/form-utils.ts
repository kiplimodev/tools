import { FieldMeta } from "./zod-utils";

export function parseFormValues(fields: FieldMeta[], values: Record<string, string | boolean>) {
  const parsedInput: Record<string, unknown> = {};

  for (const field of fields) {
    const rawValue = values[field.name];

    if ((rawValue === "" || rawValue === undefined) && field.optional) {
      parsedInput[field.name] = undefined;
      continue;
    }

    if (field.type === "number") {
      const numeric = rawValue === "" ? NaN : Number(rawValue);
      if (Number.isNaN(numeric)) {
        throw new Error(`Please enter a valid number for ${field.label}.`);
      }
      parsedInput[field.name] = numeric;
    } else if (field.type === "boolean") {
      if (typeof rawValue === "string") {
        parsedInput[field.name] = rawValue === "true";
      } else {
        parsedInput[field.name] = Boolean(rawValue);
      }
    } else {
      parsedInput[field.name] = rawValue;
    }
  }

  return parsedInput;
}
