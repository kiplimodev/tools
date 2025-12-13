"use client";

import { Card } from "@/components/ui/card";
import { SubmitButton } from "./SubmitButton";
import { FieldRenderer } from "./FieldRenderer";
import { parseFormValues } from "@/lib/form-utils";
import { getFieldType, getShapeFromSchema } from "@/lib/zod-utils";
import { ZodObject, ZodRawShape } from "zod";
import React, { useMemo, useState } from "react";

interface AutoFormProps<T extends ZodRawShape> {
  schema: ZodObject<T>;
  onSubmit: (values: any) => Promise<void> | void;
  submitLabel?: string;
}

export function AutoForm<T extends ZodRawShape>({ schema, onSubmit, submitLabel }: AutoFormProps<T>) {
  const shape = getShapeFromSchema(schema) ?? schema.shape;
  const [values, setValues] = useState<Record<string, string | boolean>>(() => {
    return Object.entries(shape).reduce((acc, [key, fieldSchema]) => {
      const type = getFieldType(fieldSchema);
      const initialValue = type === "boolean" ? false : "";
      return { ...acc, [key]: initialValue } as Record<string, string | boolean>;
    }, {} as Record<string, string | boolean>);
  });
  const [error, setError] = useState<string | null>(null);

  const fields = useMemo(() => Object.entries(shape), [shape]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    try {
      const parsed = parseFormValues(schema, values);
      await onSubmit(parsed);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Please check your inputs.";
      setError(message);
    }
  }

  return (
    <Card className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map(([name, fieldSchema]) => (
          <FieldRenderer
            key={name}
            name={name}
            schema={fieldSchema}
            value={values[name] ?? ""}
            onChange={(val) => setValues((prev) => ({ ...prev, [name]: val }))}
          />
        ))}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <SubmitButton>{submitLabel ?? "Calculate"}</SubmitButton>
      </form>
    </Card>
  );
}
