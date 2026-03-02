"use client";

import { useSearchParams } from "next/navigation";
import { type FormEvent, type ReactNode } from "react";

export type FieldDefinition = {
  name: string;
  label: string;
  type: "number" | "select";
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  options?: { label: string; value: string }[];
};

export type CalculatorLayoutProps<TInput extends object, TResult = number> = {
  title: string;
  description: string;
  fields: FieldDefinition[];
  calculate: (input: TInput) => TResult | null;
  renderResult: (result: TResult) => ReactNode;
};

export default function CalculatorLayout<TInput extends object, TResult = number>({
  title,
  description,
  fields,
  calculate,
  renderResult,
}: CalculatorLayoutProps<TInput, TResult>) {
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
    <div className="max-w-xl space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      </header>

      <form
        onSubmit={onSubmit}
        className="space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60"
      >
        {fields.map((f) => (
          <div key={f.name} className="space-y-1.5">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {f.label}
            </label>

            {f.type === "number" ? (
              <input
                name={f.name}
                type="number"
                min={f.min}
                max={f.max}
                step={f.step ?? "any"}
                required={f.required !== false}
                placeholder={f.placeholder}
                defaultValue={searchParams.get(f.name) ?? ""}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              />
            ) : (
              <select
                name={f.name}
                required={f.required !== false}
                defaultValue={searchParams.get(f.name) ?? ""}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
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
          className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 dark:bg-emerald-500 dark:hover:bg-emerald-400"
        >
          Calculate
        </button>
      </form>

      <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60 min-h-[80px] flex items-start">
        {result !== null ? (
          <div className="w-full">{renderResult(result)}</div>
        ) : (
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            Enter values above to see your result.
          </p>
        )}
      </div>
    </div>
  );
}
