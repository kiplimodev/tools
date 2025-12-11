import { CalculatorInput, CalculatorOutput, PredictedRace, TrainingPaces } from "./types";

const KM_TO_METERS = 1000;
const MILE_TO_METERS = 1609.34;

function parseTime(time: string): number {
  const parts = time.split(":").map((p) => p.trim()).filter(Boolean);
  if (parts.length < 2 || parts.length > 3) {
    throw new Error("Time must be in mm:ss or hh:mm:ss format");
  }

  const numbers = parts.map((p) => Number(p));
  if (numbers.some((n) => Number.isNaN(n) || n < 0)) {
    throw new Error("Time values must be non-negative numbers");
  }

  const [first, second, third] = numbers.length === 3 ? numbers : [0, numbers[0], numbers[1]];
  return first * 3600 + second * 60 + third;
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

function formatTime(totalSeconds: number): string {
  const seconds = Math.max(0, Math.round(totalSeconds));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(secs)}`;
  }
  return `${minutes}:${pad(secs)}`;
}

function formatPace(secondsPerUnit: number): string {
  const seconds = Math.max(0, Math.round(secondsPerUnit));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(secs)}`;
  }
  return `${minutes}:${pad(secs)}`;
}

function toMeters(distance: number, unit: "km" | "mi"): number {
  return unit === "km" ? distance * KM_TO_METERS : distance * MILE_TO_METERS;
}

function calculateVo2(velocityMps: number): number {
  const vMetersPerMinute = velocityMps * 60;
  return -4.6 + 0.182258 * vMetersPerMinute + 0.000104 * Math.pow(vMetersPerMinute, 2);
}

function percentMaxOxygen(timeSeconds: number): number {
  const timeMinutes = timeSeconds / 60;
  return 0.8 + 0.1894393 * Math.exp(-0.012778 * timeMinutes) + 0.2989558 * Math.exp(-0.1932605 * timeMinutes);
}

function velocityFromVo2(vo2: number): number {
  const a = 0.000104;
  const b = 0.182258;
  const c = -4.6 - vo2;
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    throw new Error("Invalid VO2 value for velocity calculation");
  }
  const velocityMetersPerMinute = (-b + Math.sqrt(discriminant)) / (2 * a);
  return velocityMetersPerMinute / 60; // convert to m/s
}

function paceLabel(velocity: number): string {
  const perKm = formatPace(KM_TO_METERS / velocity);
  const perMile = formatPace(MILE_TO_METERS / velocity);
  return `${perKm} /km | ${perMile} /mi`;
}

function calculateTrainingPaces(baseVelocity: number): TrainingPaces {
  return {
    easy: paceLabel(baseVelocity * 0.59),
    marathon: paceLabel(baseVelocity * 0.75),
    threshold: paceLabel(baseVelocity * 0.88),
    interval: paceLabel(baseVelocity * 1.0),
    repetition: paceLabel(baseVelocity * 1.1),
  };
}

function racePredictions(vdot: number): PredictedRace[] {
  const baseVelocity = velocityFromVo2(vdot);
  const races: { distanceName: string; distanceMeters: number }[] = [
    { distanceName: "1500m", distanceMeters: 1500 },
    { distanceName: "Mile", distanceMeters: MILE_TO_METERS },
    { distanceName: "3K", distanceMeters: 3000 },
    { distanceName: "5K", distanceMeters: 5000 },
    { distanceName: "10K", distanceMeters: 10000 },
    { distanceName: "Half Marathon", distanceMeters: 21097.5 },
    { distanceName: "Marathon", distanceMeters: 42195 },
  ];

  return races.map((race) => {
    const predictedSeconds = race.distanceMeters / baseVelocity;
    return {
      distanceName: race.distanceName,
      distanceMeters: race.distanceMeters,
      predictedTime: formatTime(predictedSeconds),
    };
  });
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const timeSeconds = parseTime(input.time);
  const distanceMeters = toMeters(input.distance, input.unit);
  const raceVelocity = distanceMeters / timeSeconds;

  const vo2 = calculateVo2(raceVelocity);
  const percent = percentMaxOxygen(timeSeconds);
  const vdot = vo2 / percent;
  const roundedVdot = Math.round(vdot * 100) / 100;

  const trainingVelocity = velocityFromVo2(roundedVdot);
  const trainingPaces = calculateTrainingPaces(trainingVelocity);
  const predictedRaces = racePredictions(roundedVdot);

  return {
    vdot: roundedVdot,
    trainingPaces,
    predictedRaces,
  };
}

export { parseTime, formatTime };
