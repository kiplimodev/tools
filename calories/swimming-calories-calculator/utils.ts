import { CalculatorInput, CalculatorOutput } from "./types";

type Stroke = CalculatorInput["stroke"];
type Intensity = CalculatorInput["intensity"];

const MET_TABLE: Record<Stroke, Partial<Record<Intensity, number>>> = {
  freestyle: {
    light: 5.8,
    moderate: 7.0,
    vigorous: 10.0,
  },
  breaststroke: {
    light: 5.3,
    moderate: 8.9,
    vigorous: 10.3,
  },
  butterfly: {
    vigorous: 13.8,
  },
  backstroke: {
    light: 4.8,
    moderate: 7.0,
    vigorous: 9.5,
  },
};

function resolveButterflyMet(intensity: Intensity): number {
  if (intensity === "vigorous") {
    return MET_TABLE.butterfly.vigorous!;
  }
  // Fallback to moderate freestyle per requirements for non-vigorous butterfly selections.
  return MET_TABLE.freestyle.moderate!;
}

export function getMET(stroke: Stroke, intensity: Intensity): number {
  if (stroke === "butterfly") {
    return resolveButterflyMet(intensity);
  }

  const met = MET_TABLE[stroke][intensity];
  if (met === undefined) {
    throw new Error(`Unsupported intensity '${intensity}' for stroke '${stroke}'.`);
  }
  return met;
}

export function calculateCalories(weightKg: number, durationMinutes: number, metValue: number): number {
  const durationHours = durationMinutes / 60;
  const calories = metValue * weightKg * durationHours;
  return Math.round(calories);
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const { weightKg, durationMinutes, stroke, intensity } = input;
  const metValue = getMET(stroke, intensity);
  const caloriesBurned = calculateCalories(weightKg, durationMinutes, metValue);

  return {
    caloriesBurned,
    metValue,
  };
}
