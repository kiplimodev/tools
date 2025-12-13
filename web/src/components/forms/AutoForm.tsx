"use client";

import { Card } from "@/components/ui/card";
import { SubmitButton } from "./SubmitButton";
import { FieldRenderer } from "./FieldRenderer";
import { parseFormValues } from "@/lib/form-utils";
import React, { useState } from "react";
import { ResultCard } from "@/components/ui/ResultCard";
import type { FieldMeta } from "@/lib/zod-utils";

interface AutoFormProps {
  fields: FieldMeta[];
  tool: { id: string; category: string };
  submitLabel?: string;
}

export function AutoForm({ fields, tool, submitLabel }: AutoFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    return fields.reduce((acc, field) => {
      const initialValue = field.optional ? "" : field.type === "boolean" ? "false" : "";
      return { ...acc, [field.name]: initialValue } as Record<string, string>;
    }, {} as Record<string, string>);
  });
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Record<string, string | number> | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData: any) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/tools/${tool.category}/${tool.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
      const parsed = parseFormValues(fields, values);
      await onSubmit(parsed);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Please check your inputs.";
      setError(message);
    }
  }

  return (
    <Card className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <FieldRenderer
            key={field.name}
            field={field}
            value={values[field.name] ?? ""}
            onChange={(val) => setValues((prev) => ({ ...prev, [field.name]: val }))}
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
