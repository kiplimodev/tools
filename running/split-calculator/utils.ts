import { CalculatorInput, CalculatorOutput, SplitDetail } from "./types";

export function parseTime(time: string): number {
  const parts = time.split(":").map(Number);
  if (parts.length !== 3 || parts.some((part) => Number.isNaN(part) || part < 0)) {
    throw new Error("Time must be in hh:mm:ss format with non-negative values.");
  }
  const [hours, minutes, seconds] = parts;
  return hours * 3600 + minutes * 60 + seconds;
}

export function formatTime(seconds: number): string {
  const totalSeconds = Math.round(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const remainingSeconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }

  const totalMinutes = Math.floor(totalSeconds / 60);
  return `${totalMinutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function convertKmToMiles(km: number): number {
  return km * 0.621371;
}

export function convertMilesToKm(miles: number): number {
  return miles * 1.60934;
}

function toSplitUnitDistance(totalDistance: number, unit: "km" | "mi", splitUnit: "km" | "mi"): number {
  if (unit === splitUnit) {
    return totalDistance;
  }
  return unit === "km" ? convertKmToMiles(totalDistance) : convertMilesToKm(totalDistance);
}

export function calculatePace(totalSeconds: number, totalDistance: number): number {
  if (totalDistance <= 0) {
    throw new Error("Total distance must be greater than zero.");
  }
  return totalSeconds / totalDistance;
}

export function generateSplits(input: CalculatorInput): SplitDetail[] {
  const { totalDistance, unit, time, splitDistance, splitUnit = unit } = input;
  if (totalDistance <= 0) {
    throw new Error("Total distance must be greater than zero.");
  }
  if (splitDistance <= 0) {
    throw new Error("Split distance must be greater than zero.");
  }

  const totalSeconds = parseTime(time);
  const totalDistanceInSplitUnit = toSplitUnitDistance(totalDistance, unit, splitUnit);
  const paceSecondsPerUnit = calculatePace(totalSeconds, totalDistanceInSplitUnit);

  const splitDistanceInSplitUnit = splitDistance;
  const splits: SplitDetail[] = [];
  const epsilon = 1e-9;

  if (splitDistanceInSplitUnit >= totalDistanceInSplitUnit - epsilon) {
    const splitTimeSeconds = paceSecondsPerUnit * totalDistanceInSplitUnit;
    splits.push({
      splitNumber: 1,
      splitDistance: Number(totalDistanceInSplitUnit.toFixed(3)),
      cumulativeDistance: Number(totalDistanceInSplitUnit.toFixed(3)),
      splitTime: formatTime(splitTimeSeconds),
      cumulativeTime: formatTime(splitTimeSeconds),
    });
    return splits;
  }

  let cumulativeDistance = 0;
  let splitNumber = 1;

  while (cumulativeDistance < totalDistanceInSplitUnit - epsilon) {
    const remainingDistance = totalDistanceInSplitUnit - cumulativeDistance;
    const currentSplitDistance = Math.min(splitDistanceInSplitUnit, remainingDistance);

    const splitTimeSeconds = paceSecondsPerUnit * currentSplitDistance;
    cumulativeDistance += currentSplitDistance;
    const cumulativeTimeSeconds = paceSecondsPerUnit * cumulativeDistance;

    splits.push({
      splitNumber,
      splitDistance: Number(currentSplitDistance.toFixed(3)),
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
