"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import type { FieldMeta } from "@/lib/zod-utils";

interface FieldRendererProps {
  field: FieldMeta;
  value: string;
  onChange: (value: string) => void;
}

export function FieldRenderer({ field, value, onChange }: FieldRendererProps) {
  const { name, label, type, enumValues, optional } = field;

  if (type === "enum") {
    const options = enumValues ?? [];
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

  if (type === "boolean") {
    return (
      <div className="space-y-2">
        <Label htmlFor={name}>{label}</Label>
        <Select id={name} name={name} value={value} onChange={(e) => onChange(e.target.value)}>
          {optional && <option value="">Select an option</option>}
          <option value="true">Yes</option>
          <option value="false">No</option>
        </Select>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type === "number" ? "number" : "text"}
        step={type === "number" ? "any" : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
