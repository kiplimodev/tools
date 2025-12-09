import { CalculatorInput, CalculatorOutput, ExerciseInput, ExerciseVolume, SingleExerciseInput } from "./types";

function isNumber(value: unknown): value is number {
  return typeof value === "number" && !Number.isNaN(value);
}

function roundVolume(value: number): number {
  return Math.round(value);
}

function validateSingleExercise(input: CalculatorInput): SingleExerciseInput {
  if (!isNumber(input.sets) || !isNumber(input.reps) || !isNumber(input.weightKg)) {
    throw new Error("sets, reps, and weightKg are required for single-exercise mode.");
  }

  if (input.sets < 1 || input.reps < 1) {
    throw new Error("sets and reps must be at least 1.");
  }

  if (input.weightKg < 0) {
    throw new Error("weightKg must be non-negative.");
  }

  return {
    sets: input.sets,
    reps: input.reps,
    weightKg: input.weightKg,
  };
}

function validateExerciseEntry(exercise: ExerciseInput): ExerciseInput {
  if (!exercise.name || exercise.name.trim().length === 0) {
    throw new Error("Exercise name must be a non-empty string.");
  }

  if (!isNumber(exercise.sets) || exercise.sets < 1) {
    throw new Error(`Exercise '${exercise.name}' must have sets >= 1.`);
  }

  if (!isNumber(exercise.reps) || exercise.reps < 1) {
    throw new Error(`Exercise '${exercise.name}' must have reps >= 1.`);
  }

  if (!isNumber(exercise.weightKg) || exercise.weightKg < 0) {
    throw new Error(`Exercise '${exercise.name}' must have weightKg >= 0.`);
  }

  return {
    name: exercise.name,
    sets: exercise.sets,
    reps: exercise.reps,
    weightKg: exercise.weightKg,
  };
}

function validateMultiExercise(input: CalculatorInput): ExerciseInput[] {
  if (!input.exercises || !Array.isArray(input.exercises) || input.exercises.length === 0) {
    throw new Error("At least one exercise must be provided for multi-exercise mode.");
  }

  return input.exercises.map(validateExerciseEntry);
}

function determineMode(input: CalculatorInput): "single" | "multi" {
  const hasSingleFields = input.sets !== undefined || input.reps !== undefined || input.weightKg !== undefined;
  const hasMulti = Array.isArray(input.exercises);

  if (hasSingleFields && hasMulti) {
    throw new Error("Provide either single-exercise fields or exercises array, not both.");
  }

  if (hasMulti) {
    return "multi";
  }

  if (hasSingleFields) {
    return "single";
  }

  throw new Error("No input provided. Supply either single-exercise fields or an exercises array.");
}

function calculateSingleExerciseVolume({ sets, reps, weightKg }: SingleExerciseInput): CalculatorOutput {
  const totalVolumeRaw = sets * reps * weightKg;
  const volumePerSetRaw = reps * weightKg;

  return {
    totalVolume: roundVolume(totalVolumeRaw),
    volumePerSet: roundVolume(volumePerSetRaw),
  };
}

function calculateMultiExerciseVolume(exercises: ExerciseInput[]): CalculatorOutput {
  const exerciseVolumes: ExerciseVolume[] = exercises.map((exercise) => {
    const volume = exercise.sets * exercise.reps * exercise.weightKg;
    return {
      name: exercise.name,
      volume: roundVolume(volume),
    };
  });

  const totalVolumeRaw = exerciseVolumes.reduce((sum, entry) => sum + entry.volume, 0);

  return {
    totalVolume: roundVolume(totalVolumeRaw),
    exerciseVolumes,
  };
}

/**
 * Core logic for this calculator.
 */
export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const mode = determineMode(input);

  if (mode === "single") {
    const validated = validateSingleExercise(input);
    return calculateSingleExerciseVolume(validated);
  }

  const exercises = validateMultiExercise(input);
  return calculateMultiExerciseVolume(exercises);
}
