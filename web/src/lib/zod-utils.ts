import { z, ZodType, ZodTypeAny } from "zod";

type FieldType = "string" | "number" | "enum" | "boolean";

export function unwrapZodType(schema: ZodTypeAny): ZodTypeAny {
  if (
    schema instanceof z.ZodOptional ||
    schema instanceof z.ZodNullable ||
    schema instanceof z.ZodDefault
  ) {
    return unwrapZodType(schema._def.innerType as ZodTypeAny);
  }

  if (schema instanceof z.ZodEffects) {
    return unwrapZodType(schema._def.schema as ZodTypeAny);
  }

  if (
    schema instanceof z.ZodObject ||
    schema instanceof z.ZodArray ||
    schema instanceof z.ZodUnion ||
    schema instanceof z.ZodIntersection
  ) {
    throw new Error("Unsupported field type in AutoForm");
  }

  return schema;
}

export function getFieldType(schema: ZodTypeAny): FieldType {
  const baseSchema = unwrapZodType(schema);

  if (baseSchema instanceof z.ZodEnum) {
    return "enum";
  }

  if (baseSchema instanceof z.ZodBoolean) {
    return "boolean";
  }

  if (baseSchema instanceof z.ZodNumber) {
    return "number";
  }

  if (baseSchema instanceof z.ZodString) {
    return "string";
  }

  throw new Error("Unsupported field type in AutoForm");
}

export function getEnumOptions(schema: ZodTypeAny): string[] {
  const baseSchema = unwrapZodType(schema);

  if (baseSchema instanceof z.ZodEnum) {
    return [...baseSchema._def.values];
  }

  throw new Error("Unsupported field type in AutoForm");
}

export function getShapeFromSchema(schema: ZodTypeAny): Record<string, ZodType<any>> | null {
  if (
    schema instanceof z.ZodOptional ||
    schema instanceof z.ZodNullable ||
    schema instanceof z.ZodDefault
  ) {
    return getShapeFromSchema(schema._def.innerType as ZodTypeAny);
  }

  if (schema instanceof z.ZodEffects) {
    return getShapeFromSchema(schema._def.schema as ZodTypeAny);
  }

  if (schema instanceof z.ZodObject) {
    return schema.shape;
  }

  return null;
}
