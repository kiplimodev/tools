import {
  IntermittentFastingCalculatorInput,
  IntermittentFastingCalculatorOutput,
} from "./types";

const MINUTES_PER_DAY = 24 * 60;

const PROTOCOL_MAP: Record<
  Exclude<IntermittentFastingCalculatorInput["protocol"], "custom">,
  { fasting: number; eating: number }
> = {
  "16:8": { fasting: 16, eating: 8 },
  "18:6": { fasting: 18, eating: 6 },
  "20:4": { fasting: 20, eating: 4 },
  "23:1": { fasting: 23, eating: 1 },
};

function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

function parseTimeToMinutes(time: string): number {
  const match = /^([0-1]?\d|2[0-3]):([0-5]\d)$/.exec(time);
  if (!match) {
    throw new Error("startTime must be in HH:MM 24h format");
  }
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  return hours * 60 + minutes;
}

function formatTimeFromMinutes(totalMinutes: number): string {
  const normalized = ((totalMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_DAY;
  const hours = Math.floor(normalized / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (normalized % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function parseProtocol(
  protocol: IntermittentFastingCalculatorInput["protocol"],
  fastingHours?: number,
  eatingHours?: number
): { fastingHours: number; eatingHours: number } {
  if (protocol === "custom") {
    return validateCustomProtocol(fastingHours, eatingHours);
  }
  const preset = PROTOCOL_MAP[protocol];
  if (!preset) {
    throw new Error("Unsupported protocol");
  }
  return { fastingHours: preset.fasting, eatingHours: preset.eating };
}

function validateCustomProtocol(
  fastingHours?: number,
  eatingHours?: number
): { fastingHours: number; eatingHours: number } {
  if (fastingHours === undefined || eatingHours === undefined) {
    throw new Error("Custom protocol requires fastingHours and eatingHours");
  }
  if (fastingHours <= 0 || eatingHours <= 0) {
    throw new Error("fastingHours and eatingHours must be greater than 0");
  }
  return { fastingHours, eatingHours };
}

function computeMealCount(eatingHours: number, meals?: number): number {
  if (meals !== undefined) {
    if (meals <= 0 || !Number.isFinite(meals)) {
      throw new Error("meals must be a positive number when provided");
    }
    return meals;
  }
  return eatingHours <= 4 ? 2 : 3;
}

function computeMealTimes(
  eatingStartMinutes: number,
  eatingHours: number,
  meals: number
): string[] {
  const intervalMinutes = (eatingHours * 60) / meals;
  const times: string[] = [];
  for (let i = 0; i < meals; i += 1) {
    const timeMinutes = eatingStartMinutes + intervalMinutes * i;
    times.push(formatTimeFromMinutes(timeMinutes));
  }
  return times;
}

function assignCalories(
  dailyCalories: number | undefined,
  meals: number
): number | undefined {
  if (dailyCalories === undefined) return undefined;
  if (dailyCalories <= 0 || !Number.isFinite(dailyCalories)) {
    throw new Error("dailyCalories must be a positive number when provided");
  }
  return roundToOneDecimal(dailyCalories / meals);
}

function validateInput(input: IntermittentFastingCalculatorInput): void {
  if (!input.protocol) {
    throw new Error("protocol is required");
  }
  if (input.meals !== undefined && input.meals <= 0) {
    throw new Error("meals must be greater than 0 when provided");
  }
  if (input.startTime) {
    parseTimeToMinutes(input.startTime);
  }
}

export function calculateCore(
  input: IntermittentFastingCalculatorInput
): IntermittentFastingCalculatorOutput {
  validateInput(input);
  const { fastingHours, eatingHours } = parseProtocol(
    input.protocol,
    input.fastingHours,
    input.eatingHours
  );

  if (fastingHours <= 0 || eatingHours <= 0) {
    throw new Error("fastingHours and eatingHours must be positive values");
  }

  const meals = computeMealCount(eatingHours, input.meals);
  const weeklyFastingHours = roundToOneDecimal(fastingHours * 7);

  const caloriesPerMeal = assignCalories(input.dailyCalories, meals);

  let eatingWindowStart: string | undefined;
  let eatingWindowEnd: string | undefined;
  let mealTimes: string[] | undefined;

  if (input.startTime) {
    const fastingStartMinutes = parseTimeToMinutes(input.startTime);
    const eatingStartMinutes = fastingStartMinutes + fastingHours * 60;
    const eatingEndMinutes = eatingStartMinutes + eatingHours * 60;
    eatingWindowStart = formatTimeFromMinutes(eatingStartMinutes);
    eatingWindowEnd = formatTimeFromMinutes(eatingEndMinutes);
    mealTimes = computeMealTimes(eatingStartMinutes, eatingHours, meals);
  }

  return {
    fastingHours,
    eatingHours,
    eatingWindowStart,
    eatingWindowEnd,
    mealTimes,
    caloriesPerMeal,
    weeklyFastingHours,
  };
}
