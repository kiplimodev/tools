"use client";

import { AutoForm } from "@/components/forms/AutoForm";
import { ResultCard } from "@/components/ui/ResultCard";
import { FullToolDefinition } from "@/lib/registry-client";
import { useState } from "react";

interface ToolPageClientProps {
  tool: FullToolDefinition;
}

export default function ToolPageClient({ tool }: ToolPageClientProps) {
  const [result, setResult] = useState<Record<string, string | number> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(values: any) {
    setIsSubmitting(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`/api/tools/${tool.category}/${tool.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        const message = (payload && payload.error) || "Calculation failed";
        throw new Error(message);
      }

      const parsed = tool.schemas.outputSchema.parse(payload);
      setResult(parsed as Record<string, string | number>);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-4">
      <AutoForm
        schema={tool.schemas.inputSchema}
        onSubmit={handleSubmit}
        submitLabel={isSubmitting ? "Calculating..." : "Calculate"}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      {result && (
        <div className="grid gap-3 md:grid-cols-2">
          {Object.entries(result).map(([key, value]) => (
            <ResultCard key={key} title={key} value={value} />
          ))}
        </div>
      )}
    </div>
  );
}
