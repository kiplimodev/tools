"use client";

import { Card } from "@/components/ui/card";
import { SubmitButton } from "./SubmitButton";
import { FieldRenderer } from "./FieldRenderer";
import { parseFormValues } from "@/lib/form-utils";
import { getFieldType, getShapeFromSchema } from "@/lib/zod-utils";
import { ZodObject, ZodRawShape } from "zod";
import React, { useMemo, useState } from "react";
import { FullToolDefinition } from "@/lib/registry-client";
import { ResultCard } from "@/components/ui/ResultCard";

interface AutoFormProps<T extends ZodRawShape> {
  schema: ZodObject<T>;
  tool: FullToolDefinition;
  submitLabel?: string;
}

export function AutoForm<T extends ZodRawShape>({ schema, tool, submitLabel }: AutoFormProps<T>) {
  const shape = getShapeFromSchema(schema) ?? schema.shape;
  const [values, setValues] = useState<Record<string, string>>(() => {
    return Object.entries(shape).reduce((acc, [key, fieldSchema]) => {
      const type = getFieldType(fieldSchema);
      const initialValue = type === "boolean" ? "false" : "";
      return { ...acc, [key]: initialValue } as Record<string, string>;
    }, {} as Record<string, string>);
  });
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Record<string, string | number> | null>(null);
  const [loading, setLoading] = useState(false);

  const fields = useMemo(() => Object.entries(shape), [shape]);

  const onSubmit = async (formData: any) => {
    setLoading(true);
    setError(null);

    try {
      const parsed = schema.parse(formData);

      const res = await fetch(`/api/tools/${tool.category}/${tool.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });

      if (!res.ok) throw new Error("Failed to calculate");

      const output = await res.json();
      setResult(output);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
        <SubmitButton disabled={loading}>{loading ? "Calculating..." : submitLabel ?? "Calculate"}</SubmitButton>
      </form>
      {result && (
        <div className="grid gap-3 md:grid-cols-2">
          {Object.entries(result).map(([key, value]) => (
            <ResultCard key={key} title={key} value={value} />
          ))}
        </div>
      )}
    </Card>
  );
}
