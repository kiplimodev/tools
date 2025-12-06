import { CalculatorInput, CalculatorOutput } from "./types";

const KM_PER_MILE = 1.60934;
const MILES_PER_KM = 0.621371;

function parseTimeToSeconds(time: string): number {
  const trimmed = time.trim();

  if (trimmed.includes(":")) {
    const parts = trimmed.split(":").map(Number);

    if (parts.length !== 3) {
      throw new Error("Time must be in hh:mm:ss format.");
    }

    if (parts.some((part) => Number.isNaN(part) || part < 0)) {
      throw new Error("Time values must be non-negative numbers.");
    }

    const [hours, minutes, seconds] = parts;
    return hours * 3600 + minutes * 60 + seconds;
  }

  const numericSeconds = Number(trimmed);
  if (Number.isNaN(numericSeconds) || numericSeconds < 0) {
    throw new Error("Time must be a valid non-negative number of seconds.");
  }

  return numericSeconds;
}

function formatPace(secondsPerUnit: number): string {
  const rounded = Math.round(secondsPerUnit);
  const totalMinutes = Math.floor(rounded / 60);
  let remainingSeconds = rounded % 60;
  let minutes = totalMinutes;

  if (remainingSeconds === 60) {
    minutes += 1;
    remainingSeconds = 0;
  }

  const paddedSeconds = remainingSeconds.toString().padStart(2, "0");
  return `${minutes}:${paddedSeconds}`;
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const { distance, unit, time } = input;

  if (distance <= 0) {
    throw new Error("Distance must be greater than zero.");
  }

  const totalSeconds = parseTimeToSeconds(time);
  if (totalSeconds <= 0) {
    throw new Error("Time must be greater than zero.");
  }

  const totalHours = totalSeconds / 3600;
  const paceSeconds = totalSeconds / distance;

  let pacePerKmSeconds: number;
  let pacePerMileSeconds: number;
  let speedKmh: number;
  let speedMph: number;

  if (unit === "km") {
    pacePerKmSeconds = paceSeconds;
    pacePerMileSeconds = paceSeconds / MILES_PER_KM;
    speedKmh = distance / totalHours;
    speedMph = speedKmh * MILES_PER_KM;
  } else {
    pacePerMileSeconds = paceSeconds;
    pacePerKmSeconds = paceSeconds / KM_PER_MILE;
    speedMph = distance / totalHours;
    speedKmh = speedMph * KM_PER_MILE;
  }

  return {
    pacePerKm: formatPace(pacePerKmSeconds),
    pacePerMile: formatPace(pacePerMileSeconds),
    speedKmh: Number(speedKmh.toFixed(2)),
    speedMph: Number(speedMph.toFixed(2)),
  };
}
