"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { getFieldType, unwrapZodType } from "@/lib/zod-utils";
import { ZodEnum, ZodTypeAny } from "zod";

interface FieldRendererProps {
  name: string;
  schema: ZodTypeAny;
  value: string;
  onChange: (value: string) => void;
}

export function FieldRenderer({ name, schema, value, onChange }: FieldRendererProps) {
  const fieldType = getFieldType(schema);
  const baseSchema = unwrapZodType(schema);
  const label = baseSchema.description ?? schema.description ?? name;

  if (fieldType === "enum") {
    const options = (baseSchema as ZodEnum<[string, ...string[]]>)._def.values;
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
      <div className="space-y-2">
        <Label htmlFor={name}>{label}</Label>
        <Select id={name} name={name} value={value} onChange={(e) => onChange(e.target.value)}>
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
        type={fieldType === "number" ? "number" : "text"}
        step={fieldType === "number" ? "any" : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
