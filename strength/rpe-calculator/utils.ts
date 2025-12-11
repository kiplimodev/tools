import { CalculatorInput, CalculatorOutput } from "./types";

const rpeChart: Record<number, number[]> = {
  10: [1.0, 0.96, 0.92, 0.89, 0.86, 0.84, 0.81, 0.79, 0.76, 0.74],
  9.5: [0.98, 0.94, 0.9, 0.87, 0.85, 0.82, 0.8, 0.77],
  9: [0.96, 0.92, 0.89, 0.86, 0.84, 0.81, 0.79],
  8.5: [0.94, 0.9, 0.87, 0.84, 0.81],
  8: [0.92, 0.89, 0.86, 0.84, 0.81],
  7.5: [0.91, 0.88, 0.85, 0.82, 0.8],
  7: [0.89, 0.86, 0.84, 0.81, 0.79],
  6.5: [0.88, 0.85, 0.82, 0.8],
  6: [0.86, 0.84, 0.81, 0.79]
};

function round(value: number, decimals = 2): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function validateInputs(input: CalculatorInput): { mode: "estimate" | "predict" } {
  const hasEstimateFields =
    input.weightKg !== undefined &&
    input.reps !== undefined &&
    input.rpe !== undefined;
  const hasPredictFields =
    input.targetReps !== undefined &&
    input.targetRpe !== undefined &&
    input.estimated1RM !== undefined;

  if (hasEstimateFields && hasPredictFields) {
    throw new Error("Provide either estimate inputs (weight, reps, rpe) or prediction inputs (targetReps, targetRpe, estimated1RM), not both.");
  }

  if (!hasEstimateFields && !hasPredictFields) {
    throw new Error("Missing required fields: supply either estimate mode inputs or prediction mode inputs.");
  }

  if (hasEstimateFields) {
    if (input.weightKg! < 0) {
      throw new Error("Weight must be zero or greater.");
    }
    if (input.reps! < 1) {
      throw new Error("Reps must be at least 1.");
    }
    if (!isValidRpe(input.rpe!)) {
      throw new Error("RPE must be between 6.0 and 10.0 in 0.5 increments.");
    }
    return { mode: "estimate" };
  }

  if (hasPredictFields) {
    if (input.estimated1RM! <= 0) {
      throw new Error("Estimated 1RM must be greater than 0.");
    }
    if (input.targetReps! < 1) {
      throw new Error("Target reps must be at least 1.");
    }
    if (!isValidRpe(input.targetRpe!)) {
      throw new Error("Target RPE must be between 6.0 and 10.0 in 0.5 increments.");
    }
    return { mode: "predict" };
  }

  throw new Error("Invalid input combination.");
}

function isValidRpe(rpe: number): boolean {
  const normalized = Number(rpe.toFixed(1));
  return normalized >= 6 && normalized <= 10 && normalized % 0.5 === 0 && rpeChart[normalized] !== undefined;
}

function lookupPercentage(rpe: number, reps: number): number {
  const normalizedRpe = Number(rpe.toFixed(1));
  const chart = rpeChart[normalizedRpe];
  if (!chart) {
    throw new Error(`No RPE chart data for RPE ${normalizedRpe}.`);
  }
  const index = reps - 1;
  if (index < 0 || index >= chart.length) {
    throw new Error(`No percentage available for ${reps} reps at RPE ${normalizedRpe}.`);
  }
  return chart[index];
}

function calculateFromSet(weightKg: number, reps: number, rpe: number): CalculatorOutput {
  const percent = lookupPercentage(rpe, reps);
  const estimated1RM = weightKg / percent;
  const rir = 10 - rpe;
  const recommendedTrainingMax = estimated1RM * 0.9;

  return {
    estimated1RM: round(estimated1RM),
    percent1RM: round(percent),
    rir: round(rir),
    recommendedTrainingMax: round(recommendedTrainingMax)
  };
}

function predictFromOneRepMax(estimated1RM: number, targetReps: number, targetRpe: number): CalculatorOutput {
  const percent = lookupPercentage(targetRpe, targetReps);
  const predictedWeight = estimated1RM * percent;

  return {
    predictedWeight: round(predictedWeight),
    percent1RM: round(percent)
  };
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const { mode } = validateInputs(input);

  if (mode === "estimate") {
    return calculateFromSet(input.weightKg!, input.reps!, input.rpe!);
  }

  return predictFromOneRepMax(input.estimated1RM!, input.targetReps!, input.targetRpe!);
}
