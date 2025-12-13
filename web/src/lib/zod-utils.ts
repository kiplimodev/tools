import { ZodEnum, ZodLiteral, ZodNativeEnum, ZodNumber, ZodString, ZodTypeAny, ZodUnion } from "zod";

type FieldType = "string" | "number" | "enum";

export function getFieldType(schema: ZodTypeAny): FieldType {
  if (schema instanceof ZodNumber) {
    return "number";
  }

  if (schema instanceof ZodEnum || schema instanceof ZodNativeEnum) {
    return "enum";
  }

  if (schema instanceof ZodUnion) {
    const options = schema.options;
    const isStringUnion = options.every((opt) => opt instanceof ZodLiteral && typeof opt.value === "string");
    if (isStringUnion) {
      return "enum";
    }
  }

  if (schema instanceof ZodString) {
    return "string";
  }

  return "string";
}

export function getEnumOptions(schema: ZodTypeAny): string[] {
  if (schema instanceof ZodEnum) {
    return [...schema.options];
  }

  if (schema instanceof ZodNativeEnum) {
    return Object.values(schema.enum as Record<string, string>);
  }

  if (schema instanceof ZodUnion) {
    const literals = schema.options.filter(
      (opt) => opt instanceof ZodLiteral && typeof opt.value === "string"
    ) as ZodLiteral<string>[];

    if (literals.length) {
      return literals.map((lit) => lit.value);
    }
  }

  return [];
}
