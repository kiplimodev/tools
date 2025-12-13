import { z, ZodEnum, ZodObject, ZodTypeAny } from "zod";

export interface FieldMeta {
  name: string;
  label: string;
  type: "string" | "number" | "boolean" | "enum";
  enumValues?: string[];
  optional?: boolean;
}

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

function isOptionalSchema(schema: ZodTypeAny): boolean {
  return (
    schema instanceof z.ZodOptional ||
    schema instanceof z.ZodNullable ||
    schema instanceof z.ZodDefault ||
    Boolean((schema as any).isOptional?.())
  );
}

function createLabel(key: string): string {
  const withSpaces = key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ");
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

export function extractFieldMetadata(schema: ZodObject<any>): FieldMeta[] {
  const shape = schema.shape;

  return Object.entries(shape).map(([key, value]) => {
    const unwrapped = unwrapZodType(value);
    const optional = isOptionalSchema(value);

    if (unwrapped instanceof ZodEnum) {
      return {
        name: key,
        label: createLabel(key),
        type: "enum",
        enumValues: unwrapped.options,
        optional,
      };
    }

    if (unwrapped instanceof z.ZodBoolean) {
      return { name: key, label: createLabel(key), type: "boolean", optional };
    }

    if (unwrapped instanceof z.ZodNumber) {
      return { name: key, label: createLabel(key), type: "number", optional };
    }

    return { name: key, label: createLabel(key), type: "string", optional };
  });
}
