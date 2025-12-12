import { CalculatorInput, CalculatorOutput, WeightEntry } from "./types";

function validateEntries(entries: WeightEntry[]): WeightEntry[] {
  if (!entries || entries.length === 0) {
    throw new Error("At least one weight entry is required.");
  }

  return entries.map((entry) => {
    const { date, weightKg } = entry;
    if (!date || Number.isNaN(Date.parse(date))) {
      throw new Error(`Invalid date provided: ${date}`);
    }
    if (typeof weightKg !== "number" || !Number.isFinite(weightKg) || weightKg <= 0) {
      throw new Error(`Invalid weight provided for ${date}.`);
    }
    return { date, weightKg };
  });
}

function sortEntries(entries: WeightEntry[]): WeightEntry[] {
  return [...entries].sort((a, b) => a.date.localeCompare(b.date));
}

function round(value: number, decimals = 2): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function calculateDailyChange(sortedEntries: WeightEntry[]): number | undefined {
  if (sortedEntries.length < 2) return undefined;
  const last = sortedEntries[sortedEntries.length - 1];
  const prev = sortedEntries[sortedEntries.length - 2];
  return round(last.weightKg - prev.weightKg);
}

function calculateWeeklyAverage(sortedEntries: WeightEntry[]): number | undefined {
  if (sortedEntries.length === 0) return undefined;
  const count = Math.min(7, sortedEntries.length);
  const slice = sortedEntries.slice(-count);
  const sum = slice.reduce((acc, entry) => acc + entry.weightKg, 0);
  return round(sum / count);
}

function linearRegressionSlope(sortedEntries: WeightEntry[]): number | undefined {
  if (sortedEntries.length < 2) return undefined;
  const n = sortedEntries.length;
  const xs = Array.from({ length: n }, (_, i) => i);
  const ys = sortedEntries.map((entry) => entry.weightKg);

  const meanX = xs.reduce((acc, x) => acc + x, 0) / n;
  const meanY = ys.reduce((acc, y) => acc + y, 0) / n;

  let covariance = 0;
  let variance = 0;
  for (let i = 0; i < n; i++) {
    const dx = xs[i] - meanX;
    const dy = ys[i] - meanY;
    covariance += dx * dy;
    variance += dx * dx;
  }

  if (variance === 0) return undefined;
  return covariance / variance;
}

function trendDirectionFromRate(rateKgPerWeek?: number): "up" | "down" | "stable" {
  if (rateKgPerWeek === undefined) return "stable";
  if (rateKgPerWeek > 0.05) return "up";
  if (rateKgPerWeek < -0.05) return "down";
  return "stable";
}

function formatDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = `${date.getUTCMonth() + 1}`.padStart(2, "0");
  const day = `${date.getUTCDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function projectGoalDate(
  sortedEntries: WeightEntry[],
  goalWeightKg: number,
  rateKgPerWeek?: number
): string | undefined {
  if (rateKgPerWeek === undefined || Math.abs(rateKgPerWeek) < 0.0001) return undefined;
  const latest = sortedEntries[sortedEntries.length - 1];
  const remaining = goalWeightKg - latest.weightKg;
  const weeksToGoal = remaining / rateKgPerWeek;
  if (!Number.isFinite(weeksToGoal)) return undefined;

  const latestDate = new Date(latest.date + "T00:00:00Z");
  const daysToGoal = weeksToGoal * 7;
  const projected = new Date(latestDate.getTime() + daysToGoal * 24 * 60 * 60 * 1000);
  return formatDate(projected);
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const cleanedEntries = validateEntries(input.entries);
  const sortedEntries = sortEntries(cleanedEntries);

  const dailyChange = calculateDailyChange(sortedEntries);
  const weeklyAverage = calculateWeeklyAverage(sortedEntries);

  const slopePerDay = linearRegressionSlope(sortedEntries);
  const rateKgPerWeek = slopePerDay !== undefined ? round(slopePerDay * 7) : undefined;
  const trendDirection = trendDirectionFromRate(rateKgPerWeek);

  const projectedDateToGoal =
    input.goalWeightKg !== undefined
      ? projectGoalDate(sortedEntries, input.goalWeightKg, rateKgPerWeek)
      : undefined;

  return {
    sortedEntries,
    dailyChange,
    weeklyAverage,
    rateKgPerWeek,
    projectedDateToGoal,
    trendDirection,
  };
}
