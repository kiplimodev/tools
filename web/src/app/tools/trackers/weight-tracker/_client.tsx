"use client";

import { useState, useEffect } from "react";

type Entry = { date: string; weightKg: number };

const STORAGE_KEY = "denstar_weight_log";

function loadEntries(): Entry[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Entry[];
  } catch {
    return [];
  }
}

function saveEntries(entries: Entry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function movingAverage(entries: Entry[], window: number): number | null {
  if (entries.length < window) return null;
  const last = entries.slice(-window);
  return last.reduce((sum, e) => sum + e.weightKg, 0) / window;
}

export default function WeightTrackerClientPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<"kg" | "lbs">("kg");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setEntries(loadEntries());
    setMounted(true);
  }, []);

  function addEntry() {
    const w = parseFloat(weight);
    if (!date || isNaN(w) || w <= 0) return;
    const weightKg = unit === "lbs" ? w / 2.20462 : w;
    const newEntries = [...entries.filter((e) => e.date !== date), { date, weightKg: parseFloat(weightKg.toFixed(2)) }]
      .sort((a, b) => a.date.localeCompare(b.date));
    setEntries(newEntries);
    saveEntries(newEntries);
    setWeight("");
  }

  function removeEntry(date: string) {
    const newEntries = entries.filter((e) => e.date !== date);
    setEntries(newEntries);
    saveEntries(newEntries);
  }

  const avg7 = movingAverage(entries, 7);
  const avg14 = movingAverage(entries, 14);
  const latest = entries.at(-1);
  const earliest = entries.at(0);
  const totalChange = latest && earliest && latest.date !== earliest.date
    ? latest.weightKg - earliest.weightKg
    : null;

  function displayWeight(kg: number) {
    const v = unit === "lbs" ? kg * 2.20462 : kg;
    return `${v.toFixed(1)} ${unit}`;
  }

  if (!mounted) return null;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Weight Tracker</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        Log your daily weight, monitor trends, and track 7- and 14-day moving averages.
        Data is stored in your browser.
      </p>

      {/* Log entry */}
      <div className="rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/60 p-6 shadow-sm space-y-4 mb-4">
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
              Weight
            </label>
            <div className="flex gap-1">
              <input
                type="number"
                min="20"
                max="500"
                step="0.1"
                placeholder={unit === "kg" ? "70.5" : "155.0"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                onClick={() => setUnit(unit === "kg" ? "lbs" : "kg")}
                className="rounded-lg border border-zinc-200 dark:border-zinc-700 px-3 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 transition-colors"
              >
                {unit}
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={addEntry}
          disabled={!weight || !date}
          className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-medium py-2.5 text-sm transition-colors"
        >
          Log Weight
        </button>
      </div>

      {/* Stats */}
      {entries.length > 0 && (
        <div className="rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/60 p-5 shadow-sm mb-4">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Summary</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {latest && (
              <div>
                <p className="text-zinc-400 text-xs">Latest</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">{displayWeight(latest.weightKg)}</p>
                <p className="text-xs text-zinc-400">{latest.date}</p>
              </div>
            )}
            {totalChange !== null && (
              <div>
                <p className="text-zinc-400 text-xs">Total change</p>
                <p className={`font-semibold ${totalChange < 0 ? "text-emerald-600" : "text-zinc-900 dark:text-zinc-100"}`}>
                  {totalChange > 0 ? "+" : ""}{displayWeight(totalChange)}
                </p>
                <p className="text-xs text-zinc-400">{earliest?.date} → {latest?.date}</p>
              </div>
            )}
            {avg7 !== null && (
              <div>
                <p className="text-zinc-400 text-xs">7-day avg</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">{displayWeight(avg7)}</p>
              </div>
            )}
            {avg14 !== null && (
              <div>
                <p className="text-zinc-400 text-xs">14-day avg</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">{displayWeight(avg14)}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Log */}
      {entries.length > 0 && (
        <div className="rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/60 p-5 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Log</p>
            <span className="text-xs text-zinc-400">{entries.length} entries</span>
          </div>
          <div className="space-y-1 max-h-72 overflow-y-auto">
            {[...entries].reverse().map((entry) => (
              <div key={entry.date} className="flex justify-between items-center text-sm py-1.5 border-b border-zinc-50 dark:border-zinc-800/50 last:border-0">
                <span className="text-zinc-500 dark:text-zinc-400">{entry.date}</span>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">{displayWeight(entry.weightKg)}</span>
                  <button
                    onClick={() => removeEntry(entry.date)}
                    className="text-zinc-300 hover:text-red-500 dark:text-zinc-600 dark:hover:text-red-400 transition-colors text-xs"
                    title="Remove entry"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {entries.length === 0 && (
        <div className="text-center py-8 text-zinc-400 text-sm">
          No entries yet. Log your first weight above.
        </div>
      )}
    </div>
  );
}
