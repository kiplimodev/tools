import { CalculatorInput, CalculatorOutput, MacroSplit, WindowDetails } from "./types";

const MINUTES_IN_DAY = 24 * 60;

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

function formatMinutesToTime(totalMinutes: number): string {
  const normalized = ((totalMinutes % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_DAY;
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  const hh = hours.toString().padStart(2, "0");
  const mm = minutes.toString().padStart(2, "0");
  return `${hh}:${mm}`;
}

function deriveMealCount(eatingHours: number, meals?: number): number {
  if (meals !== undefined) {
    if (meals <= 0 || !Number.isFinite(meals)) {
      throw new Error("meals must be a positive number if provided");
    }
    return meals;
  }
  if (eatingHours <= 4) return 2;
  if (eatingHours <= 8) return 3;
  return 4;
}

function validateMacroSplit(split: MacroSplit): void {
  const { proteinPercent, fatPercent, carbPercent } = split;
  const values = [proteinPercent, fatPercent, carbPercent];
  if (values.some((v) => v < 0 || !Number.isFinite(v))) {
    throw new Error("Macro percentages must be non-negative numbers");
  }
  const total = proteinPercent + fatPercent + carbPercent;
  if (total < 0.99 || total > 1.01) {
    throw new Error("Macro percentages must sum to approximately 1.0 (100%)");
  }
}

function buildWindow(startMinutes: number, durationHours: number): WindowDetails {
  const durationMinutes = durationHours * 60;
  const endMinutes = startMinutes + durationMinutes;
  return {
    start: formatMinutesToTime(startMinutes),
    end: formatMinutesToTime(endMinutes),
    durationHours: roundToOneDecimal(durationHours),
  };
}

function computeMacros(
  dailyCalories: number,
  meals: number,
  split?: MacroSplit
): Pick<CalculatorOutput, "proteinGrams" | "fatGrams" | "carbGrams" | "proteinPerMeal" | "fatPerMeal" | "carbPerMeal"> {
  if (!split) return {};
  validateMacroSplit(split);

  const proteinCalories = dailyCalories * split.proteinPercent;
  const fatCalories = dailyCalories * split.fatPercent;
  const carbCalories = dailyCalories * split.carbPercent;

  const proteinGrams = roundToOneDecimal(proteinCalories / 4);
  const fatGrams = roundToOneDecimal(fatCalories / 9);
  const carbGrams = roundToOneDecimal(carbCalories / 4);

  return {
    proteinGrams,
    fatGrams,
    carbGrams,
    proteinPerMeal: roundToOneDecimal(proteinGrams / meals),
    fatPerMeal: roundToOneDecimal(fatGrams / meals),
    carbPerMeal: roundToOneDecimal(carbGrams / meals),
  };
}

function validateInput(input: CalculatorInput): void {
  if (input.fastingHours <= 0 || input.fastingHours >= 24) {
    throw new Error("fastingHours must be greater than 0 and less than 24");
  }
  if (input.eatingHours !== undefined && input.eatingHours <= 0) {
    throw new Error("eatingHours must be positive when provided");
  }
  if (input.dailyCalories <= 0 || !Number.isFinite(input.dailyCalories)) {
    throw new Error("dailyCalories must be a positive number");
  }
  parseTimeToMinutes(input.startTime); // validates format
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInput(input);
  const fastingStartMinutes = parseTimeToMinutes(input.startTime);
  const fastingDurationHours = input.fastingHours;
  const eatingDurationHours = input.eatingHours ?? 24 - fastingDurationHours;
  if (eatingDurationHours <= 0) {
    throw new Error("eatingHours must result in a positive eating window");
  }

  const fastingWindow = buildWindow(fastingStartMinutes, fastingDurationHours);
  const eatingStartMinutes = fastingStartMinutes + fastingDurationHours * 60;
  const eatingWindow = buildWindow(eatingStartMinutes, eatingDurationHours);

  const meals = deriveMealCount(eatingDurationHours, input.meals);
  const caloriesPerMeal = roundToOneDecimal(input.dailyCalories / meals);

  const macros = computeMacros(input.dailyCalories, meals, input.macroSplit);

  return {
    fastingWindow,
    eatingWindow,
    meals,
    caloriesPerMeal,
    ...macros,
  };
}
