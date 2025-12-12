"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import type { InputFieldDefinition } from "@/lib/form-utils";
import { cn } from "@/lib/utils";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FieldRendererProps {
  field: InputFieldDefinition;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

export function FieldRenderer({ field, register, errors }: FieldRendererProps) {
  const error = errors[field.name]?.message as string | undefined;

  let control: JSX.Element;
  if (field.type === "enum" && field.options) {
    control = (
      <Select
        defaultValue={field.options[0]}
        options={field.options.map((option) => ({ label: option, value: option }))}
        {...register(field.name)}
      />
    );
  } else if (field.type === "boolean") {
    control = (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
        {...register(field.name)}
      />
    );
  } else {
    const inputType = field.type === "number" ? "number" : "text";
    control = <Input type={inputType} step={field.type === "number" ? "any" : undefined} {...register(field.name)} />;
  }

  return (
    <div className="flex flex-col gap-1">
      <div className={cn("flex items-center justify-between gap-2", field.type === "boolean" && "flex-row-reverse justify-end gap-3")}> 
        <Label htmlFor={field.name} className="capitalize">
          {field.name.replace(/([A-Z])/g, " $1").replace(/_/g, " ")}
          {field.optional ? " (optional)" : ""}
        </Label>
        {field.type === "boolean" ? control : null}
      </div>
      {field.type !== "boolean" ? control : null}
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
}
