"use client";

import { AutoForm } from "@/components/forms/AutoForm";
import { ClientToolDefinition } from "@/lib/registry-client";

interface ToolPageClientProps {
  tool: ClientToolDefinition;
}

export default function ToolPageClient({ tool }: ToolPageClientProps) {
  return (
    <div className="space-y-4">
      <AutoForm schema={tool.schemas.inputSchema} tool={tool} submitLabel="Calculate" />
    </div>
  );
}
