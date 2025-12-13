"use client";

import { AutoForm } from "@/components/forms/AutoForm";
import { ResultCard } from "@/components/ui/ResultCard";
import { getToolDefinition } from "@/lib/registry-client";
import { useState } from "react";

interface ToolPageClientProps {
  category: string;
  toolId: string;
}

export default function ToolPageClient({ category, toolId }: ToolPageClientProps) {
  const tool = getToolDefinition(category, toolId);
  const [result, setResult] = useState<Record<string, string | number> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!tool) {
    return <div className="text-red-600">Tool not found.</div>;
  }

  async function handleSubmit(values: any) {
    setIsSubmitting(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`/api/tools/${category}/${toolId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!payload.success) {
        throw new Error(payload.error ?? "Calculation failed");
      }

      const parsed = tool.outputSchema.parse(payload.data);
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
      <AutoForm schema={tool.inputSchema} onSubmit={handleSubmit} submitLabel={isSubmitting ? "Calculating..." : "Calculate"} />
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
