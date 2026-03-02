"use client";

import { useSearchParams } from "next/navigation";
import { type FormEvent, type ReactNode } from "react";

export type FieldDefinition = {
  name: string;
  label: string;
  type: "number" | "select";
  required?: boolean;
  min?: number;
  options?: { label: string; value: string }[];
};

export type CalculatorLayoutProps<TInput extends object> = {
  title: string;
  description: string;
  fields: FieldDefinition[];
  calculate: (input: TInput) => number | null;
  renderResult: (result: number) => ReactNode;
};

export default function CalculatorLayout<TInput extends object>({
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
    (values as Record<string, unknown>)[field.name] =
      field.type === "number" ? Number(raw) : raw;
  }

  const hasRequiredValues = fields
    .filter((f) => f.required !== false)
    .every((f) => searchParams.get(f.name));

  const result = hasRequiredValues ? calculate(values) : null;

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
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      </header>

      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-medium mb-1">{f.label}</label>

            {f.type === "number" ? (
              <input
                name={f.name}
                type="number"
                min={f.min}
                required={f.required !== false}
                defaultValue={searchParams.get(f.name) ?? ""}
                className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
              />
            ) : (
              <select
                name={f.name}
                required={f.required !== false}
                defaultValue={searchParams.get(f.name) ?? ""}
                className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
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

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg font-medium transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Calculate
        </button>
      </form>

      <div className="border border-zinc-200 rounded-xl p-4 dark:border-zinc-800 min-h-[60px] flex items-center">
        {result !== null
          ? renderResult(result)
          : <p className="text-zinc-400 dark:text-zinc-500">Enter values above to see your result.</p>
        }
      </div>
    </div>
  );
}
