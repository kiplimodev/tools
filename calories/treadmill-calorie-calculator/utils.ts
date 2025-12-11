import { TreadmillCalorieCalculatorInput, TreadmillCalorieCalculatorOutput } from "./types";

const MET_SPEED_TABLE: { speed: number; met: number }[] = [
  { speed: 3.2, met: 2.0 },
  { speed: 4.7, met: 2.8 },
  { speed: 5.5, met: 3.5 },
  { speed: 6.4, met: 4.3 },
  { speed: 8.0, met: 8.3 },
  { speed: 9.7, met: 9.8 },
  { speed: 10.8, met: 11.0 },
  { speed: 12.1, met: 11.8 },
  { speed: 14.5, met: 12.8 },
];

function round(value: number, decimals = 1): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

export function convertMphToKmh(mph: number): number {
  return mph * 1.60934;
}

export function getBaseMET(speedKmh: number): number {
  if (speedKmh <= MET_SPEED_TABLE[0].speed) {
    return MET_SPEED_TABLE[0].met;
  }

  for (let i = MET_SPEED_TABLE.length - 1; i >= 0; i -= 1) {
    if (speedKmh >= MET_SPEED_TABLE[i].speed) {
      return MET_SPEED_TABLE[i].met;
    }
  }

  return MET_SPEED_TABLE[MET_SPEED_TABLE.length - 1].met;
}

export function applyInclineAdjustment(baseMET: number, inclinePercent: number): number {
  const safeIncline = Math.max(inclinePercent, 0);
  return baseMET + safeIncline * 0.5;
}

export function calculateCalories(weightKg: number, durationMinutes: number, met: number): number {
  const hours = durationMinutes / 60;
  const calories = met * weightKg * hours;
  return Math.round(calories);
}

function validateInput(input: TreadmillCalorieCalculatorInput): void {
  if (input.weightKg <= 0) {
    throw new Error("weightKg must be greater than 0");
  }
  if (input.durationMinutes <= 0) {
    throw new Error("durationMinutes must be greater than 0");
  }
  if (input.speed <= 0) {
    throw new Error("speed must be greater than 0");
  }
  if (input.inclinePercent !== undefined && input.inclinePercent < 0) {
    throw new Error("inclinePercent cannot be negative");
  }
}

export function calculateCore(
  input: TreadmillCalorieCalculatorInput
): TreadmillCalorieCalculatorOutput {
  validateInput(input);

  const inclinePercent = input.inclinePercent ?? 0;
  const speedKmh = input.unit === "mph" ? convertMphToKmh(input.speed) : input.speed;
  const baseMET = getBaseMET(speedKmh);
  const adjustedMET = applyInclineAdjustment(baseMET, inclinePercent);
  const metRounded = round(adjustedMET, 1);
  const calories = calculateCalories(input.weightKg, input.durationMinutes, metRounded);

  return {
    calories,
    met: metRounded,
    speedKmh: round(speedKmh, 2),
    inclinePercent,
  };
}
