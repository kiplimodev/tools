import React from "react";

type ParamValue = string | string[] | null | undefined;

export type FieldDefinition =
  | {
      name: string;
      label: string;
      type: "number";
      placeholder?: string;
      min?: number;
      step?: number;
      helper?: string;
      required?: boolean;
      suffix?: string;
    }
  | {
      name: string;
      label: string;
      type: "select";
      options: { value: string; label: string; helper?: string }[];
      helper?: string;
      required?: boolean;
    };

export interface CalculatorLayoutProps<T extends Record<string, unknown>> {
  category: string;
  title: string;
  description: string;
  searchParams?: Record<string, ParamValue> | URLSearchParams | Promise<Record<string, ParamValue>>;
  fields: FieldDefinition[];
  compute: (values: Record<string, number | string>) => T | null;
  renderResults: (result: T | null) => React.ReactNode;
}

const toSingleValue = (value: ParamValue): string | null => {
  if (Array.isArray(value)) return value[0] ?? null;
  if (typeof value === "string") return value;
  return value ?? null;
};

const parseNumber = (value: string | null): number | null => {
  if (!value) return null;
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return null;
  return numericValue;
};

async function normalizeParams(input?: CalculatorLayoutProps<never>["searchParams"]): Promise<Record<string, ParamValue>> {
  if (!input) return {};
  if (input instanceof Promise) return input;
  if (input instanceof URLSearchParams) {
    const result: Record<string, ParamValue> = {};
    input.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }
  return input;
}

export async function CalculatorLayout<T extends Record<string, unknown>>({
  category,
  title,
  description,
  searchParams,
  fields,
  compute,
  renderResults,
}: CalculatorLayoutProps<T>) {
  const params = await normalizeParams(searchParams);

  const parsedValues: Record<string, number | string> = {};
  let valid = true;

  for (const field of fields) {
    const raw = toSingleValue(params[field.name]);
    if (field.type === "number") {
      const value = parseNumber(raw);
      if (value === null) {
        if (field.required !== false) valid = false;
      } else {
        if (field.min !== undefined && value < field.min) {
          valid = false;
        }
        parsedValues[field.name] = value;
      }
    } else if (field.type === "select") {
      if (!raw) {
        if (field.required !== false) valid = false;
      } else {
        parsedValues[field.name] = raw;
      }
    }
  }

  const result = valid ? compute(parsedValues) : null;

  return (
    <main className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 dark:text-emerald-200 dark:ring-emerald-500/40">
          {category}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{title}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">{description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <form className="space-y-5 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60" method="GET">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.name} className="space-y-2">
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{field.label}</span>
                {field.type === "number" ? (
                  <input
                    className="w-full rounded-lg border border-zinc-200/70 bg-white/80 px-3 py-2 text-sm shadow-inner transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-50 dark:focus:border-emerald-400 dark:focus:ring-emerald-500/40"
                    type="number"
                    name={field.name}
                    placeholder={field.placeholder}
                    min={field.min}
                    step={field.step ?? 0.01}
                    defaultValue={toSingleValue(params[field.name]) ?? ""}
                    required={field.required !== false}
                  />
                ) : (
                  <select
                    className="w-full rounded-lg border border-zinc-200/70 bg-white/80 px-3 py-2 text-sm shadow-inner transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-50 dark:focus:border-emerald-400 dark:focus:ring-emerald-500/40"
                    name={field.name}
                    defaultValue={toSingleValue(params[field.name]) ?? ""}
                    required={field.required !== false}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
                {field.suffix && <p className="text-xs text-zinc-500 dark:text-zinc-400">{field.suffix}</p>}
                {field.helper && <p className="text-xs text-zinc-500 dark:text-zinc-400">{field.helper}</p>}
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Calculate
          </button>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Values update via search parameters for easy sharing.</p>
        </form>

        <div className="space-y-4 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Results</h2>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 ring-1 ring-emerald-200 dark:text-emerald-200 dark:ring-emerald-500/40">
              Live
            </span>
          </div>
          {renderResults(result)}
        </div>
      </div>
    </main>
  );
}
