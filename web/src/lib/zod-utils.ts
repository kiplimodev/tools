import { z, ZodType, ZodTypeAny } from "zod";

type FieldType = "string" | "number" | "enum" | "boolean";

function unwrapSchema(schema: ZodTypeAny): ZodTypeAny {
  if (schema instanceof z.ZodOptional || schema instanceof z.ZodNullable || schema instanceof z.ZodDefault) {
    return unwrapSchema(schema._def.innerType as ZodTypeAny);
  }

  if (schema instanceof z.ZodEffects) {
    return unwrapSchema(schema._def.schema as ZodTypeAny);
  }

  return schema;
}

export function getFieldType(schema: ZodTypeAny): FieldType {
  const baseSchema = unwrapSchema(schema);

  if (baseSchema instanceof z.ZodNumber) {
    return "number";
  }

  if (baseSchema instanceof z.ZodBoolean) {
    return "boolean";
  }

  if (baseSchema instanceof z.ZodEnum || baseSchema instanceof z.ZodNativeEnum) {
    return "enum";
  }

  if (baseSchema instanceof z.ZodUnion) {
    const options = baseSchema.options;
    const isStringUnion = options.every((opt) => opt instanceof z.ZodLiteral && typeof opt.value === "string");
    if (isStringUnion) {
      return "enum";
    }
  }

  if (baseSchema instanceof z.ZodString) {
    return "string";
  }

  return "string";
}

export function getEnumOptions(schema: ZodTypeAny): string[] {
  const baseSchema = unwrapSchema(schema);

  if (baseSchema instanceof z.ZodEnum) {
    return [...baseSchema.options];
  }

  if (baseSchema instanceof z.ZodNativeEnum) {
    return Object.values(baseSchema.enum as Record<string, string>);
  }

  if (baseSchema instanceof z.ZodUnion) {
    const literals = baseSchema.options.filter(
      (opt) => opt instanceof z.ZodLiteral && typeof opt.value === "string"
    ) as z.ZodLiteral<string>[];

    if (literals.length) {
      return literals.map((lit) => lit.value);
    }
  }

  return [];
}

export function getShapeFromSchema(schema: ZodTypeAny): Record<string, ZodType<any>> | null {
  const baseSchema = unwrapSchema(schema);

  if (baseSchema instanceof z.ZodObject) {
    return baseSchema.shape;
  }

  if (baseSchema instanceof z.ZodEffects) {
    return getShapeFromSchema(baseSchema._def.schema as ZodTypeAny);
  }

  return null;
}
