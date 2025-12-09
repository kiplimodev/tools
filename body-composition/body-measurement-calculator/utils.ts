import { CalculatorInput, CalculatorOutput } from "./types";

type MeasurementKey = keyof CalculatorInput;

const MEASUREMENT_LABELS: Record<MeasurementKey, string> = {
  neckCm: "neck",
  chestCm: "chest",
  waistCm: "waist",
  hipCm: "hip",
  thighCm: "thigh",
  calfCm: "calf",
  bicepCm: "bicep",
  forearmCm: "forearm",
};

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

function roundToInteger(value: number): number {
  return Math.round(value);
}

export function extractMeasurements(input: CalculatorInput): Record<string, number> {
  const measurements: Record<string, number> = {};

  (Object.keys(MEASUREMENT_LABELS) as MeasurementKey[]).forEach((key) => {
    const value = input[key];
    if (value !== undefined) {
      if (typeof value !== "number" || Number.isNaN(value) || value <= 0) {
        throw new Error(`${MEASUREMENT_LABELS[key]} must be a positive number.`);
      }
      measurements[MEASUREMENT_LABELS[key]] = value;
    }
  });

  if (Object.keys(measurements).length === 0) {
    throw new Error("At least one measurement must be provided.");
  }

  return measurements;
}

export function computeStats(measurements: Record<string, number>): CalculatorOutput {
  const values = Object.values(measurements);
  const total = values.reduce((sum, current) => sum + current, 0);
  const count = values.length;
  const average = total / count;
  const min = Math.min(...values);
  const max = Math.max(...values);

  return {
    measurementsCount: count,
    totalCm: roundToInteger(total),
    averageCm: roundToOneDecimal(average),
    minCm: roundToInteger(min),
    maxCm: roundToInteger(max),
    measurements,
  };
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const measurements = extractMeasurements(input);
  return computeStats(measurements);
}
