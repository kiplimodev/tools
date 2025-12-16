"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, ReactNode } from "react";

export interface FieldDefinition {
  name: string;
  label: string;
  type: "number" | "select";
  required?: boolean;
  min?: number;
  options?: { label: string; value: string }[];
}

export interface CalculatorLayoutProps<TInput extends Record<string, any>> {
  title: string;
  description: string;
  fields: FieldDefinition[];
  calculate: (input: TInput) => number | null;
  renderResult: (result: number) => ReactNode;
}

export default function CalculatorLayout<TInput extends Record<string, any>>({
  title,
  description,
  fields,
  calculate,
  renderResult,
}: CalculatorLayoutProps<TInput>) {
  const searchParams = useSearchParams();
  const values = {} as TInput;

  for (const field of fields) {
    const raw = searchParams.get(field.name);
    if (!raw) continue;

    values[field.name as keyof TInput] =
      field.type === "number" ? Number(raw) : (raw as any);
  }

  const result =
    Object.keys(values).length > 0 ? calculate(values) : null;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    const data = new FormData(e.currentTarget);

    fields.forEach((f) => {
      const v = data.get(f.name);
      if (v !== null && v !== "") params.set(f.name, String(v));
    });

    window.location.search = params.toString();
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-zinc-600">{description}</p>
      </header>

      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-medium">{f.label}</label>

            {f.type === "number" ? (
              <input
                name={f.name}
                type="number"
                min={f.min}
                required={f.required}
                defaultValue={searchParams.get(f.name) ?? ""}
                className="w-full border rounded px-3 py-2"
              />
            ) : (
              <select
                name={f.name}
                required={f.required}
                defaultValue={searchParams.get(f.name) ?? ""}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select…</option>
                {f.options?.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}

        <button className="w-full bg-black text-white py-2 rounded">
          Calculate
        </button>
      </form>

      {result !== null && (
        <div className="border rounded p-4">
          {renderResult(result)}
        </div>
      )}
    </div>
  );
}
