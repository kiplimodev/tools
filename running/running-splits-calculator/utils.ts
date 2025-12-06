import { CalculatorInput, CalculatorOutput, SplitResult } from "./types";

function parseTime(time: string): number {
  const parts = time.split(":").map(Number);
  if (parts.length !== 3 || parts.some((p) => Number.isNaN(p) || p < 0)) {
    throw new Error("Time must be in hh:mm:ss format with non-negative numbers.");
  }
  const [hours, minutes, seconds] = parts;
  return hours * 3600 + minutes * 60 + seconds;
}

function formatTime(seconds: number): string {
  const totalSeconds = Math.round(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function convertKmToMiles(km: number): number {
  return km * 0.621371;
}

function convertMilesToKm(miles: number): number {
  return miles * 1.60934;
}

function generateSplits(input: CalculatorInput): SplitResult[] {
  const totalSeconds = parseTime(input.time);
  const splitUnit = input.splitUnit ?? input.unit;

  const totalDistanceInSplitUnit =
    input.unit === splitUnit
      ? input.distance
      : input.unit === "km"
      ? convertKmToMiles(input.distance)
      : convertMilesToKm(input.distance);

  if (totalDistanceInSplitUnit <= 0) {
    throw new Error("Distance must be greater than zero.");
  }

  const paceSecondsPerUnit = totalSeconds / totalDistanceInSplitUnit;
  const splits: SplitResult[] = [];

  let remainingDistance = totalDistanceInSplitUnit;
  let cumulativeDistance = 0;
  let splitNumber = 1;

  const unitIncrement = 1;
  const epsilon = 1e-9;

  while (remainingDistance > epsilon) {
    const currentSplitDistance = Math.min(unitIncrement, remainingDistance);
    cumulativeDistance += currentSplitDistance;
    remainingDistance -= currentSplitDistance;

    const splitTimeSeconds = paceSecondsPerUnit * currentSplitDistance;
    const cumulativeTimeSeconds = paceSecondsPerUnit * cumulativeDistance;

    splits.push({
      splitNumber,
      cumulativeDistance: Number(cumulativeDistance.toFixed(3)),
      splitTime: formatTime(splitTimeSeconds),
      cumulativeTime: formatTime(cumulativeTimeSeconds),
    });

    splitNumber += 1;
  }

  return splits;
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  return {
    splits: generateSplits(input),
  };
}
