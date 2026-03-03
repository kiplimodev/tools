"use client";

import { useSearchParams } from "next/navigation";
import { type FormEvent, type ReactNode, useState } from "react";
import { UNIT_CONVERSIONS, type UnitGroup, type UnitSystem } from "@/lib/units";

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
  /** When set, this field participates in metric/imperial conversion. */
  unitGroup?: UnitGroup;
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

  // Unit system — stored as URL param, defaults to metric
  const unitSystem: UnitSystem =
    searchParams.get("unit") === "imperial" ? "imperial" : "metric";
  const isImperial = unitSystem === "imperial";
  const hasUnitToggle = fields.some((f) => f.unitGroup);

  function switchUnit(u: UnitSystem) {
    const params = new URLSearchParams(window.location.search);
    params.set("unit", u);
    window.location.assign(`?${params.toString()}`);
  }

  // Build input values for the calculator (always SI)
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

  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    const data = new FormData(e.currentTarget);

    fields.forEach((f) => {
      const v = data.get(f.name);
      if (v === null || v === "") return;

      if (f.type === "number" && f.unitGroup && isImperial) {
        // Convert display value → SI before storing in URL
        const conv = UNIT_CONVERSIONS[f.unitGroup].imperial;
        const siValue = Number(v) * conv.toSI;
        params.set(f.name, String(siValue));
      } else {
        params.set(f.name, String(v));
      }
    });

    // Preserve unit preference
    if (isImperial) params.set("unit", "imperial");

    window.location.assign(`?${params.toString()}`);
  }

  /** Resolve the default value for an input, converting SI → display if needed */
  function getDefaultValue(field: FieldDefinition): string {
    const raw = searchParams.get(field.name);
    if (!raw) return "";
    if (field.type === "number" && field.unitGroup && isImperial) {
      const conv = UNIT_CONVERSIONS[field.unitGroup].imperial;
      const displayValue = Number(raw) / conv.toSI;
      return Number.isFinite(displayValue) ? String(Math.round(displayValue * 100) / 100) : "";
    }
    return raw;
  }

  /** Resolve effective label/step/placeholder for a field based on unit system */
  function getFieldMeta(field: FieldDefinition) {
    if (field.unitGroup) {
      const conv = UNIT_CONVERSIONS[field.unitGroup][unitSystem];
      return {
        label: `${field.label} (${conv.label})`,
        step: conv.step,
        placeholder: conv.placeholder,
      };
    }
    return {
      label: field.label,
      step: field.step,
      placeholder: field.placeholder,
    };
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
        {/* Unit toggle — only shown when at least one field supports it */}
        {hasUnitToggle && (
          <div className="flex items-center justify-between pb-2">
            <span className="text-xs text-zinc-400 dark:text-zinc-500">Units</span>
            <div className="flex gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-0.5 dark:border-zinc-700 dark:bg-zinc-900">
              {(["metric", "imperial"] as UnitSystem[]).map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => switchUnit(u)}
                  className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                    unitSystem === u
                      ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
                      : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                  }`}
                >
                  {u.charAt(0).toUpperCase() + u.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {fields.map((f) => {
          const meta = getFieldMeta(f);
          return (
            <div key={f.name} className="space-y-1.5">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {meta.label}
              </label>

              {f.type === "number" ? (
                <input
                  name={f.name}
                  type="number"
                  min={f.min}
                  max={f.max}
                  step={meta.step ?? "any"}
                  required={f.required !== false}
                  placeholder={meta.placeholder}
                  defaultValue={getDefaultValue(f)}
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
          );
        })}

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 dark:bg-emerald-500 dark:hover:bg-emerald-400"
        >
          Calculate
        </button>
      </form>

      <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60 min-h-[80px]">
        {result !== null ? (
          <>
            <div className="w-full">{renderResult(result)}</div>
            <div className="flex justify-end mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={copyLink}
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-start min-h-[80px]">
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Enter values above to see your result.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
