"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { getEnumOptions, getFieldType } from "@/lib/zod-utils";
import { ZodTypeAny } from "zod";

interface FieldRendererProps {
  name: string;
  schema: ZodTypeAny;
  value: string | boolean;
  onChange: (value: string | boolean) => void;
}

export function FieldRenderer({ name, schema, value, onChange }: FieldRendererProps) {
  const fieldType = getFieldType(schema);
  const label = schema.description ?? name;

  if (fieldType === "enum") {
    const options = getEnumOptions(schema);
    return (
      <div className="space-y-2">
        <Label htmlFor={name}>{label}</Label>
        <Select id={name} name={name} value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </div>
    );
  }

  if (fieldType === "boolean") {
    return (
      <div className="flex items-center gap-2">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4"
        />
        <Label htmlFor={name}>{label}</Label>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={fieldType === "number" ? "number" : "text"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
