import { CalculatorInput, CalculatorOutput, DifficultyLevel, ExercisePlan, FocusArea } from "./types";

type ExerciseCategory = "upper" | "lower" | "core" | "full-body";

type ExerciseDefinition = {
  name: string;
  category: ExerciseCategory;
  requires?: {
    dumbbells?: boolean;
    pullupBar?: boolean;
    resistanceBands?: boolean;
    chair?: boolean;
  };
};

type DifficultyConfig = { sets: number; reps: string; rest: number };

const difficultyMap: Record<DifficultyLevel, DifficultyConfig> = {
  beginner: { sets: 2, reps: "8–10", rest: 60 },
  novice: { sets: 3, reps: "10–12", rest: 60 },
  intermediate: { sets: 3, reps: "12–15", rest: 45 },
  advanced: { sets: 4, reps: "12–20", rest: 45 },
  elite: { sets: 5, reps: "15–25", rest: 30 },
};

const TIME_PER_SET_SECONDS = 40;
const DEFAULT_DURATION_MINUTES = 20;

const exerciseLibrary: ExerciseDefinition[] = [
  // Bodyweight upper
  { name: "Push-ups", category: "upper" },
  { name: "Pike push-ups", category: "upper" },
  { name: "Dips (chair)", category: "upper", requires: { chair: true } },
  { name: "Inverted rows (chair/table)", category: "upper", requires: { chair: true } },
  { name: "Pull-ups", category: "upper", requires: { pullupBar: true } },
  // Bodyweight lower
  { name: "Squats", category: "lower" },
  { name: "Lunges", category: "lower" },
  { name: "Glute bridges", category: "lower" },
  { name: "Step-ups", category: "lower", requires: { chair: true } },
  { name: "Calf raises", category: "lower" },
  // Bodyweight core
  { name: "Plank", category: "core" },
  { name: "Leg raises", category: "core" },
  { name: "Hollow hold", category: "core" },
  { name: "Bicycle crunches", category: "core" },
  // Full-body
  { name: "Burpees", category: "full-body" },
  { name: "Mountain climbers", category: "full-body" },
  // Equipment: dumbbells
  { name: "DB RDL", category: "lower", requires: { dumbbells: true } },
  { name: "DB goblet squat", category: "lower", requires: { dumbbells: true } },
  { name: "DB shoulder press", category: "upper", requires: { dumbbells: true } },
  { name: "DB row", category: "upper", requires: { dumbbells: true } },
  { name: "DB chest press (floor)", category: "upper", requires: { dumbbells: true } },
  // Equipment: bands
  { name: "Band rows", category: "upper", requires: { resistanceBands: true } },
  { name: "Band chest press", category: "upper", requires: { resistanceBands: true } },
  { name: "Band squats", category: "lower", requires: { resistanceBands: true } },
  // Pull-up bar extras
  { name: "Chin-ups", category: "upper", requires: { pullupBar: true } },
  { name: "Hanging knee raises", category: "core", requires: { pullupBar: true } },
];

const focusSelectionMap: Record<FocusArea, Partial<Record<ExerciseCategory, number>>> = {
  "full-body": { "full-body": 2, upper: 2, lower: 2, core: 2 },
  upper: { upper: 4, "full-body": 2, core: 2 },
  lower: { lower: 4, "full-body": 2, core: 2 },
  core: { core: 3, "full-body": 2, upper: 1, lower: 1 },
};

const defaultSelectionCounts: Partial<Record<ExerciseCategory, number>> = {
  "full-body": 2,
  upper: 2,
  lower: 2,
  core: 2,
};

function isExerciseAvailable(ex: ExerciseDefinition, equipment?: CalculatorInput["equipment"]): boolean {
  if (!ex.requires) return true;
  const requirements = ex.requires;
  return Object.entries(requirements).every(([key, needed]) => {
    if (!needed) return true;
    return Boolean(equipment?.[key as keyof typeof requirements]);
  });
}

function shuffle<T>(list: T[]): T[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickExercises(category: ExerciseCategory, count: number, available: ExerciseDefinition[]): ExerciseDefinition[] {
  const pool = available.filter((ex) => ex.category === category);
  if (pool.length === 0) return [];
  const selected: ExerciseDefinition[] = [];
  const shuffled = shuffle(pool);
  for (let i = 0; i < shuffled.length && selected.length < count; i += 1) {
    selected.push(shuffled[i]);
  }
  return selected;
}

export function getAvailableExercises(input: CalculatorInput): ExerciseDefinition[] {
  return exerciseLibrary.filter((ex) => isExerciseAvailable(ex, input.equipment));
}

export function selectExercises(input: CalculatorInput, available: ExerciseDefinition[]): ExerciseDefinition[] {
  const focus = input.focus ?? "full-body";
  const selectionCounts = focusSelectionMap[focus] ?? defaultSelectionCounts;
  const categories: ExerciseCategory[] = ["full-body", "upper", "lower", "core"];
  const selections: ExerciseDefinition[] = [];

  categories.forEach((category) => {
    const count = selectionCounts[category];
    if (!count) return;
    selections.push(...pickExercises(category, count, available));
  });

  if (selections.length === 0) {
    const fallback = available.slice(0, 4);
    return fallback;
  }

  return selections;
}

export function scaleDifficulty(exercises: ExerciseDefinition[], difficulty: DifficultyLevel): ExercisePlan[] {
  const config = difficultyMap[difficulty];
  return exercises.map((ex) => ({
    name: ex.name,
    sets: config.sets,
    reps: config.reps,
    restSeconds: config.rest,
  }));
}

function estimateDurationSeconds(exercises: ExercisePlan[]): number {
  return exercises.reduce((total, ex) => total + ex.sets * (TIME_PER_SET_SECONDS + ex.restSeconds), 0);
}

function trimExercises(exercises: ExercisePlan[], targetSeconds: number): ExercisePlan[] {
  let current = [...exercises];
  while (current.length > 1 && estimateDurationSeconds(current) > targetSeconds) {
    current.pop();
  }
  return current;
}

function expandExercises(exercises: ExercisePlan[], targetSeconds: number): ExercisePlan[] {
  const expanded = [...exercises];
  let index = 0;
  while (estimateDurationSeconds(expanded) < targetSeconds && expanded.length < 20 && exercises.length > 0) {
    expanded.push({ ...exercises[index % exercises.length] });
    index += 1;
  }
  return expanded;
}

export function applyDurationLimit(exercises: ExercisePlan[], durationMinutes?: number): ExercisePlan[] {
  const targetMinutes = durationMinutes ?? DEFAULT_DURATION_MINUTES;
  const targetSeconds = targetMinutes * 60;
  const estimated = estimateDurationSeconds(exercises);

  if (estimated > targetSeconds) {
    return trimExercises(exercises, targetSeconds);
  }

  if (estimated < targetSeconds && durationMinutes) {
    return expandExercises(exercises, targetSeconds);
  }

  return exercises;
}

function buildWorkoutName(input: CalculatorInput): string {
  const difficulty = input.difficulty.charAt(0).toUpperCase() + input.difficulty.slice(1);
  const focus = (input.focus ?? "full-body").replace("-", " ");
  const equipment = input.equipment;
  let equipmentLabel = "No-Equipment";

  if (equipment?.dumbbells) equipmentLabel = "Dumbbell";
  if (equipment?.pullupBar) equipmentLabel = equipmentLabel ? `${equipmentLabel} + Pull-Up Bar` : "Pull-Up Bar";
  if (equipment?.resistanceBands) equipmentLabel = equipmentLabel ? `${equipmentLabel} + Bands` : "Resistance Bands";

  return `${difficulty} ${focus.charAt(0).toUpperCase() + focus.slice(1)} ${equipmentLabel} Workout`;
}

export function assembleWorkout(input: CalculatorInput): CalculatorOutput {
  const available = getAvailableExercises(input);
  const selected = selectExercises(input, available);
  const scaled = scaleDifficulty(selected, input.difficulty);
  const adjusted = applyDurationLimit(scaled, input.durationMinutes);
  const totalDurationSeconds = estimateDurationSeconds(adjusted);

  return {
    workoutName: buildWorkoutName(input),
    totalDuration: Math.round(totalDurationSeconds / 60),
    exercises: adjusted,
  };
}

export { difficultyMap };
