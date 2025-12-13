import {
  ZodBoolean,
  ZodDefault,
  ZodEffects,
  ZodEnum,
  ZodLiteral,
  ZodNativeEnum,
  ZodNullable,
  ZodNumber,
  ZodObject,
  ZodOptional,
  ZodString,
  ZodTypeAny,
  ZodUnion,
} from "zod";

type FieldType = "string" | "number" | "enum" | "boolean";

function unwrapSchema(schema: ZodTypeAny): ZodTypeAny {
  if (schema instanceof ZodOptional || schema instanceof ZodNullable || schema instanceof ZodDefault) {
    return unwrapSchema(schema._def.innerType);
  }

  if (schema instanceof ZodEffects) {
    return unwrapSchema(schema._def.schema);
  }

  return schema;
}

export function getFieldType(schema: ZodTypeAny): FieldType {
  const baseSchema = unwrapSchema(schema);

  if (baseSchema instanceof ZodNumber) {
    return "number";
  }

  if (baseSchema instanceof ZodBoolean) {
    return "boolean";
  }

  if (baseSchema instanceof ZodEnum || baseSchema instanceof ZodNativeEnum) {
    return "enum";
  }

  if (baseSchema instanceof ZodUnion) {
    const options = baseSchema.options;
    const isStringUnion = options.every((opt) => opt instanceof ZodLiteral && typeof opt.value === "string");
    if (isStringUnion) {
      return "enum";
    }
  }

  if (baseSchema instanceof ZodString) {
    return "string";
  }

  return "string";
}

export function getEnumOptions(schema: ZodTypeAny): string[] {
  const baseSchema = unwrapSchema(schema);

  if (baseSchema instanceof ZodEnum) {
    return [...baseSchema.options];
  }

  if (baseSchema instanceof ZodNativeEnum) {
    return Object.values(baseSchema.enum as Record<string, string>);
  }

  if (baseSchema instanceof ZodUnion) {
    const literals = baseSchema.options.filter(
      (opt) => opt instanceof ZodLiteral && typeof opt.value === "string"
    ) as ZodLiteral<string>[];

    if (literals.length) {
      return literals.map((lit) => lit.value);
    }
  }

  return [];
}

export function getShapeFromSchema(schema: ZodTypeAny): Record<string, ZodTypeAny> | null {
  const baseSchema = unwrapSchema(schema);

  if (baseSchema instanceof ZodObject) {
    return baseSchema.shape;
  }

  if (baseSchema instanceof ZodEffects) {
    return getShapeFromSchema(baseSchema._def.schema);
  }

  return null;
}
