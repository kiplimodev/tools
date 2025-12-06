import { CalculatorInput, CalculatorOutput, IntervalBreakdown } from "./types";

const KM_PER_MILE = 1.60934;
const MILES_PER_KM = 0.621371;

function parseTimeToSeconds(time: string | undefined): number {
  if (!time) return 0;

  const parts = time.trim().split(":").map(Number);

  if (parts.length !== 2 && parts.length !== 3) {
    throw new Error("Time must be in mm:ss or hh:mm:ss format.");
  }

  if (parts.some((part) => Number.isNaN(part) || part < 0)) {
    throw new Error("Time values must be non-negative numbers.");
  }

  const [first, second, third] = parts;

  if (parts.length === 2) {
    return first * 60 + second;
  }

  return first * 3600 + (second ?? 0) * 60 + (third ?? 0);
}

function formatTime(totalSeconds: number): string {
  const clampedSeconds = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(clampedSeconds / 3600);
  const minutes = Math.floor((clampedSeconds % 3600) / 60);
  const seconds = clampedSeconds % 60;

  const paddedMinutes = hours > 0 ? minutes.toString().padStart(2, "0") : minutes.toString();
  const paddedSeconds = seconds.toString().padStart(2, "0");

  return hours > 0
    ? `${hours}:${paddedMinutes}:${paddedSeconds}`
    : `${minutes}:${paddedSeconds}`;
}

function convertKmToMiles(km: number): number {
  return km * MILES_PER_KM;
}

function convertMilesToKm(miles: number): number {
  return miles * KM_PER_MILE;
}

function calculateIntervalSeconds(
  intervalDistance: number,
  intervalUnit: "km" | "mi",
  paceSecondsPerUnit: number,
  paceUnit: "km" | "mi"
): number {
  const distanceInPaceUnit =
    intervalUnit === paceUnit
      ? intervalDistance
      : paceUnit === "km"
      ? convertMilesToKm(intervalDistance)
      : convertKmToMiles(intervalDistance);

  return paceSecondsPerUnit * distanceInPaceUnit;
}

function roundDistance(distance: number): number {
  return Number(distance.toFixed(3));
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const {
    intervalDistance,
    intervalUnit,
    numIntervals,
    paceTime,
    paceUnit,
    restTime,
    warmupTime,
    cooldownTime,
  } = input;

  if (intervalDistance <= 0) {
    throw new Error("Interval distance must be greater than zero.");
  }

  if (numIntervals <= 0 || !Number.isInteger(numIntervals)) {
    throw new Error("Number of intervals must be a positive integer.");
  }

  const paceSecondsPerUnit = parseTimeToSeconds(paceTime);
  if (paceSecondsPerUnit <= 0) {
    throw new Error("Pace time must be greater than zero.");
  }

  const restSeconds = parseTimeToSeconds(restTime);
  const warmupSeconds = parseTimeToSeconds(warmupTime);
  const cooldownSeconds = parseTimeToSeconds(cooldownTime);

  const intervalSeconds = calculateIntervalSeconds(
    intervalDistance,
    intervalUnit,
    paceSecondsPerUnit,
    paceUnit
  );

  let cumulativeSeconds = warmupSeconds;
  const workoutBreakdown: IntervalBreakdown[] = [];

  for (let i = 1; i <= numIntervals; i += 1) {
    cumulativeSeconds += intervalSeconds;
    const cumulativeDistance = roundDistance(intervalDistance * i);

    const isLast = i === numIntervals;
    const restForThisInterval = isLast ? 0 : restSeconds;

    if (restForThisInterval > 0) {
      cumulativeSeconds += restForThisInterval;
    }

    workoutBreakdown.push({
      intervalNumber: i,
      intervalTime: formatTime(intervalSeconds),
      restTime: formatTime(restForThisInterval),
      cumulativeTime: formatTime(cumulativeSeconds),
      cumulativeDistance,
    });
  }

  const totalDistance = roundDistance(intervalDistance * numIntervals);
  const totalSeconds = cumulativeSeconds + cooldownSeconds;

  return {
    totalDistance,
    totalTime: formatTime(totalSeconds),
    workoutBreakdown,
  };
}
