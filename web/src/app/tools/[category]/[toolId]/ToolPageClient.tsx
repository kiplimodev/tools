"use client";

import { AutoForm } from "@/components/forms/AutoForm";
import { ResultCard } from "@/components/tools/ResultCard";
import { ToolDescription } from "@/components/tools/ToolDescription";
import type { InputFieldDefinition } from "@/lib/form-utils";
import { useState } from "react";

interface ToolPageClientProps {
  description: string;
  apiPath: string;
  fields: InputFieldDefinition[];
  defaultValues: Record<string, unknown>;
}

export default function ToolPageClient({
  description,
  apiPath,
  fields,
  defaultValues,
}: ToolPageClientProps) {
  const [result, setResult] = useState<Record<string, any> | null>(null);

  const handleSubmit = async (values: Record<string, unknown>) => {
    const response = await fetch(apiPath, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = await response.json();
    if (!payload.success) {
      throw new Error(payload.error ?? "Unable to calculate results");
    }
    setResult(payload.data);
    return payload.data;
  };

  return (
    <div className="space-y-4">
      <ToolDescription description={description} />
      <AutoForm fields={fields} defaultValues={defaultValues} onSubmit={handleSubmit} />
      <ResultCard data={result} />
    </div>
  );
}
