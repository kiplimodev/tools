"use client";

import { AutoForm } from "@/components/forms/AutoForm";
import type { FieldMeta } from "@/lib/zod-utils";

interface ClientToolDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  path: string;
  fields: FieldMeta[];
}

interface ToolPageClientProps {
  tool: ClientToolDefinition;
}

export default function ToolPageClient({ tool }: ToolPageClientProps) {
  return (
    <div className="space-y-4">
      <AutoForm fields={tool.fields} tool={{ id: tool.id, category: tool.category }} submitLabel="Calculate" />
    </div>
  );
}
