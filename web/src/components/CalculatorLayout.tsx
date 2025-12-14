"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, ReactNode } from "react";

export type FieldDefinition = {
  name: string;
  label: string;
  type: "number" | "select";
  min?: number;
  step?: number;
  required?: boolean;
  options?: { value: string; label: string }[];
  helper?: string;
};

type CalculatorLayoutProps<T> = {
  category: string;
  title: string;
  description: string;
  fields: FieldDefinition[];
  compute?: (values: Record<string, number>) => T | null;
  renderResults?: (result: T) => ReactNode;
};

export default function CalculatorLayout<T>({
  category,
  title,
  description,
  fields,
  compute,
  renderResults,
}: CalculatorLayoutProps<T>) {
  const searchParams = useSearchParams();

  const values: Record<string, number> = {};
  for (const field of fields) {
    const raw = searchParams.get(field.name);
    if (raw !== null) values[field.name] = Number(raw);
  }

  const result =
    compute && Object.keys(values).length > 0 ? compute(values) : null;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    const formData = new FormData(e.currentTarget);

    fields.forEach((f) => {
      const v = formData.get(f.name);
      if (v !== null && v !== "") params.set(f.name, String(v));
    });

    window.location.search = params.toString();
  }

  return (
    <div>
      <span className="text-xs uppercase tracking-wide text-zinc-500">
        {category}
      </span>

      <h1 className="text-2xl font-bold mt-1">{title}</h1>
      <p className="text-zinc-600 mb-6">{description}</p>

      <form onSubmit={onSubmit} className="space-y-3">
        {fields.map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-medium mb-1">
              {f.label}
            </label>

            <input
              name={f.name}
              type="number"
              defaultValue={searchParams.get(f.name) ?? ""}
              min={f.min}
              step={f.step}
              required={f.required}
              className="w-full rounded border px-3 py-2"
            />

            {f.helper && (
              <p className="text-xs text-zinc-500 mt-1">{f.helper}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-black text-white rounded py-2 mt-4"
        >
          Calculate
        </button>
      </form>

      {result && renderResults && (
        <div className="mt-8 border rounded p-4">
          <h2 className="font-semibold mb-2">Results</h2>
          {renderResults(result)}
        </div>
      )}
    </div>
  );
}
