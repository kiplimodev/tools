import {
  CalculatorInput,
  CalculatorOutput,
  DifficultyLevel,
  ExercisePlan,
  FocusArea,
} from "./types";

type ExerciseCategory = "full-body" | "upper" | "lower" | "core";

interface ExerciseDefinition {
  name: string;
  category: ExerciseCategory;
  requires?: (keyof NonNullable<CalculatorInput["equipment"]>)[];
}

const difficultyMap: Record<
  DifficultyLevel,
  { sets: number; reps: string; rest: number }
> = {
  beginner: { sets: 2, reps: "8–10", rest: 60 },
  novice: { sets: 3, reps: "10–12", rest: 60 },
  intermediate: { sets: 3, reps: "12–15", rest: 45 },
  advanced: { sets: 4, reps: "12–20", rest: 45 },
  elite: { sets: 5, reps: "15–25", rest: 30 },
};

const baseExercises: ExerciseDefinition[] = [
  // Full body
  { name: "Burpees", category: "full-body" },
  { name: "Mountain climbers", category: "full-body" },
  // Upper
  { name: "Push-ups", category: "upper" },
  { name: "Pike push-ups", category: "upper" },
  { name: "Dips (chair)", category: "upper", requires: ["chair"] },
  {
    name: "Inverted rows (chair/table)",
    category: "upper",
    requires: ["chair"],
  },
  { name: "Pull-ups", category: "upper", requires: ["pullupBar"] },
  // Lower
  { name: "Squats", category: "lower" },
  { name: "Lunges", category: "lower" },
  { name: "Glute bridges", category: "lower" },
  { name: "Step-ups", category: "lower", requires: ["chair"] },
  { name: "Calf raises", category: "lower" },
  // Core
  { name: "Plank", category: "core" },
  { name: "Leg raises", category: "core" },
  { name: "Hollow hold", category: "core" },
  { name: "Bicycle crunches", category: "core" },
];

const equipmentExercises: ExerciseDefinition[] = [
  // Dumbbells
  { name: "DB RDL", category: "lower", requires: ["dumbbells"] },
  {
    name: "DB goblet squat",
    category: "lower",
    requires: ["dumbbells"],
  },
  {
    name: "DB shoulder press",
    category: "upper",
    requires: ["dumbbells"],
  },
  { name: "DB row", category: "upper", requires: ["dumbbells"] },
  {
    name: "DB chest press (floor)",
    category: "upper",
    requires: ["dumbbells"],
  },
  // Bands
  { name: "Band rows", category: "upper", requires: ["resistanceBands"] },
  {
    name: "Band chest press",
    category: "upper",
    requires: ["resistanceBands"],
  },
  { name: "Band squats", category: "lower", requires: ["resistanceBands"] },
  // Pull-up bar extras
  { name: "Chin-ups", category: "upper", requires: ["pullupBar"] },
  {
    name: "Hanging knee raises",
    category: "core",
    requires: ["pullupBar"],
  },
];

const focusSelection: Record<FocusArea, Record<ExerciseCategory, number>> = {
  "full-body": { "full-body": 4, upper: 3, lower: 3, core: 3 },
  upper: { "full-body": 2, upper: 5, lower: 2, core: 3 },
  lower: { "full-body": 2, upper: 2, lower: 5, core: 3 },
  core: { "full-body": 2, upper: 2, lower: 2, core: 5 },
};

const DEFAULT_TIME_PER_SET_SECONDS = 40;
const DEFAULT_DURATION_MINUTES = 20;

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);
  const focus: FocusArea = input.focus ?? "full-body";
  const equipment = input.equipment ?? {};
  const durationMinutes = input.durationMinutes ?? DEFAULT_DURATION_MINUTES;

  const selectedExercises = assembleWorkoutExercises(
    input.difficulty,
    focus,
    equipment,
    durationMinutes
  );

  const totalDuration = calculateDuration(selectedExercises);
  const workoutName = buildWorkoutName(input.difficulty, focus, equipment);

  return {
    workoutName,
    totalDuration,
    exercises: selectedExercises,
  };
}

function validateInputs(input: CalculatorInput): void {
  if (!input.difficulty || !(input.difficulty in difficultyMap)) {
    throw new Error("Invalid difficulty level provided.");
  }
  if (input.durationMinutes !== undefined && input.durationMinutes <= 0) {
    throw new Error("Duration must be greater than zero minutes.");
  }
}

function buildWorkoutName(
  difficulty: DifficultyLevel,
  focus: FocusArea,
  equipment: NonNullable<CalculatorInput["equipment"]>
): string {
  const difficultyLabel = capitalize(difficulty);
  const focusLabel = focus === "full-body" ? "Full-Body" : capitalize(focus);
  const equipmentLabel = deriveEquipmentLabel(equipment);
  return `${difficultyLabel} ${focusLabel} ${equipmentLabel}`.trim();
}

function deriveEquipmentLabel(
  equipment: NonNullable<CalculatorInput["equipment"]>
): string {
  if (equipment.pullupBar) return "Pull-Up Bar Workout";
  if (equipment.dumbbells) return "Dumbbell Workout";
  if (equipment.resistanceBands) return "Band Workout";
  return "No-Equipment Workout";
}

function assembleWorkoutExercises(
  difficulty: DifficultyLevel,
  focus: FocusArea,
  equipment: NonNullable<CalculatorInput["equipment"]>,
  desiredDuration: number
): ExercisePlan[] {
  const available = getAvailableExercises(equipment);
  const counts = focusSelection[focus];
  const chosen: ExerciseDefinition[] = [];

  (Object.keys(counts) as ExerciseCategory[]).forEach((category) => {
    const count = counts[category];
    const pool = available.filter((ex) => ex.category === category);
    chosen.push(...selectExercises(pool, count));
  });

  const scaled = chosen.map((exercise) =>
    applyDifficultySettings(exercise.name, difficulty)
  );

  return applyDurationLimit(scaled, desiredDuration);
}

function getAvailableExercises(
  equipment: NonNullable<CalculatorInput["equipment"]>
): ExerciseDefinition[] {
  const has = (req?: (keyof typeof equipment)[]) =>
    !req || req.every((r) => equipment[r]);

  const all = [...baseExercises, ...equipmentExercises];
  return all.filter((ex) => has(ex.requires));
}

function selectExercises(
  pool: ExerciseDefinition[],
  count: number
): ExerciseDefinition[] {
  if (pool.length === 0) return [];
  const shuffled = shuffle([...pool]);
  const results: ExerciseDefinition[] = [];
  for (let i = 0; i < count; i++) {
    results.push(shuffled[i % shuffled.length]);
  }
  return results;
}

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function applyDifficultySettings(
  name: string,
  difficulty: DifficultyLevel
): ExercisePlan {
  const settings = difficultyMap[difficulty];
  return {
    name,
    sets: settings.sets,
    reps: settings.reps,
    restSeconds: settings.rest,
  };
}

function applyDurationLimit(
  exercises: ExercisePlan[],
  desiredMinutes: number
): ExercisePlan[] {
  const currentDuration = calculateDuration(exercises);
  if (currentDuration <= desiredMinutes) {
    return exercises;
  }

  const ratio = desiredMinutes / currentDuration;
  const targetCount = Math.max(1, Math.round(exercises.length * ratio));
  return exercises.slice(0, targetCount);
}

function calculateDuration(exercises: ExercisePlan[]): number {
  const totalSeconds = exercises.reduce((acc, ex) => {
    const perExercise = ex.sets * (DEFAULT_TIME_PER_SET_SECONDS + ex.restSeconds);
    return acc + perExercise;
  }, 0);
  return Math.round(totalSeconds / 60);
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
