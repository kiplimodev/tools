"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { getEnumOptions, getFieldType } from "@/lib/zod-utils";
import { ZodTypeAny } from "zod";

interface FieldRendererProps {
  name: string;
  schema: ZodTypeAny;
  value: string;
  onChange: (value: string) => void;
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
