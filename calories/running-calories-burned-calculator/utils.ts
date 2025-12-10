import { CalculatorInput, CalculatorOutput } from "./types";

type SpeedMetPair = {
  speedKmh: number;
  met: number;
};

const MET_TABLE: SpeedMetPair[] = [
  { speedKmh: 6.4, met: 6.0 },
  { speedKmh: 8.0, met: 8.3 },
  { speedKmh: 9.7, met: 9.8 },
  { speedKmh: 11.3, met: 11.0 },
  { speedKmh: 12.9, met: 11.8 },
  { speedKmh: 14.5, met: 12.8 },
  { speedKmh: 16.1, met: 14.5 },
];

const MIN_SPEED_MET = 6.0;
const MAX_SPEED_MET = 16.0;
const MIN_SPEED_THRESHOLD = 6;
const MAX_SPEED_THRESHOLD = 17;

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const { weightKg, durationMinutes, speedKmh } = input;

  validateInput(weightKg, durationMinutes, speedKmh);

  const metValue = determineMET(speedKmh);
  const caloriesBurned = calculateCalories(weightKg, durationMinutes, metValue);

  return {
    caloriesBurned,
    metValue,
  };
}

export function determineMET(speedKmh: number): number {
  if (speedKmh <= 0) {
    throw new Error("Speed must be greater than zero.");
  }

  if (speedKmh < MIN_SPEED_THRESHOLD) {
    return MIN_SPEED_MET;
  }

  if (speedKmh > MAX_SPEED_THRESHOLD) {
    return MAX_SPEED_MET;
  }

  let selectedMet = MIN_SPEED_MET;

  for (const entry of MET_TABLE) {
    if (speedKmh >= entry.speedKmh) {
      selectedMet = entry.met;
    } else {
      break;
    }
  }

  return selectedMet;
}

export function calculateCalories(
  weightKg: number,
  durationMinutes: number,
  metValue: number
): number {
  const durationHours = durationMinutes / 60;
  const calories = metValue * weightKg * durationHours;
  return Math.round(calories);
}

function validateInput(weightKg: number, durationMinutes: number, speedKmh: number) {
  if (weightKg <= 0) {
    throw new Error("Weight must be greater than zero.");
  }

  if (durationMinutes <= 0) {
    throw new Error("Duration must be greater than zero.");
  }

  if (speedKmh <= 0) {
    throw new Error("Speed must be greater than zero.");
  }
}
