import {
  CalculatorInput,
  CalculatorOutput,
  EquipmentType,
  Experience,
  ExercisePlan,
  Goal,
  ProgramDay,
  SessionLength,
} from "./types";

type ExerciseCategory = "push" | "pull" | "legs" | "core" | "conditioning";

interface ExerciseDefinition {
  name: string;
  category: ExerciseCategory;
  equipment: EquipmentType;
}

const exerciseDatabase: Record<EquipmentType, ExerciseDefinition[]> = {
  bodyweight: [
    { name: "pushups", category: "push", equipment: "bodyweight" },
    { name: "pullups", category: "pull", equipment: "bodyweight" },
    { name: "squats", category: "legs", equipment: "bodyweight" },
    { name: "lunges", category: "legs", equipment: "bodyweight" },
    { name: "glute_bridge", category: "legs", equipment: "bodyweight" },
    { name: "plank", category: "core", equipment: "bodyweight" },
    { name: "burpees", category: "conditioning", equipment: "bodyweight" },
    { name: "mountain_climbers", category: "conditioning", equipment: "bodyweight" },
    { name: "dips", category: "push", equipment: "bodyweight" },
  ],
  dumbbells: [
    { name: "dumbbell_press", category: "push", equipment: "dumbbells" },
    { name: "dumbbell_row", category: "pull", equipment: "dumbbells" },
    { name: "dumbbell_squat", category: "legs", equipment: "dumbbells" },
    { name: "dumbbell_lunge", category: "legs", equipment: "dumbbells" },
    { name: "romanian_deadlift", category: "legs", equipment: "dumbbells" },
    { name: "shoulder_press", category: "push", equipment: "dumbbells" },
    { name: "biceps_curl", category: "pull", equipment: "dumbbells" },
    { name: "triceps_extension", category: "push", equipment: "dumbbells" },
  ],
  gym: [
    { name: "bench_press", category: "push", equipment: "gym" },
    { name: "barbell_row", category: "pull", equipment: "gym" },
    { name: "lat_pulldown", category: "pull", equipment: "gym" },
    { name: "deadlift", category: "legs", equipment: "gym" },
    { name: "squat", category: "legs", equipment: "gym" },
    { name: "leg_press", category: "legs", equipment: "gym" },
    { name: "shoulder_press_machine", category: "push", equipment: "gym" },
    { name: "cable_row", category: "pull", equipment: "gym" },
    { name: "tricep_pushdown", category: "push", equipment: "gym" },
    { name: "leg_curl", category: "legs", equipment: "gym" },
  ],
};

const sessionExerciseTargets: Record<SessionLength, number> = {
  short: 4,
  medium: 6,
  long: 8,
};

const focusSplits: Record<number, string[]> = {
  3: ["Full Body A", "Full Body B", "Full Body C"],
  4: ["Upper", "Lower", "Upper", "Lower"],
  5: ["Push", "Pull", "Legs", "Upper", "Full Body"],
  6: ["Push", "Pull", "Legs", "Push", "Pull", "Legs"],
};

interface TemplateScheme {
  sets: number;
  reps: number | string;
}

const goalTemplates: Record<Goal, (experience: Experience) => TemplateScheme> = {
  strength: (experience) => ({
    sets: experience === "beginner" ? 4 : experience === "intermediate" ? 5 : 6,
    reps: "3-6",
  }),
  hypertrophy: (experience) => ({
    sets: experience === "beginner" ? 3 : experience === "intermediate" ? 4 : 5,
    reps: "8-12",
  }),
  endurance: (experience) => ({
    sets: experience === "beginner" ? 2 : experience === "intermediate" ? 3 : 4,
    reps: "15-25",
  }),
  fat_loss: (experience) => ({
    sets: experience === "beginner" ? 3 : experience === "intermediate" ? 4 : 5,
    reps: "8-15",
  }),
  general: (experience) => ({
    sets: experience === "beginner" ? 3 : experience === "intermediate" ? 4 : 4,
    reps: "8-12",
  }),
};

const conditioningReps = "30-60s";

function validateInputs(input: CalculatorInput): void {
  if (!input.goal) {
    throw new Error("Goal is required.");
  }
  if (!input.experience) {
    throw new Error("Experience level is required.");
  }
  if (input.daysPerWeek !== undefined && input.daysPerWeek <= 0) {
    throw new Error("daysPerWeek must be greater than zero.");
  }
}

function normalizeInput(input: CalculatorInput): Required<CalculatorInput> {
  const defaults: Required<Pick<CalculatorInput, "equipment" | "daysPerWeek" | "sessionLength">> = {
    equipment: "bodyweight",
    daysPerWeek: 3,
    sessionLength: "medium",
  };

  return {
    goal: input.goal,
    experience: input.experience,
    equipment: input.equipment ?? defaults.equipment,
    daysPerWeek: input.daysPerWeek ?? defaults.daysPerWeek,
    sessionLength: input.sessionLength ?? defaults.sessionLength,
  };
}

function getFocusList(daysPerWeek: number): string[] {
  if (focusSplits[daysPerWeek]) {
    return focusSplits[daysPerWeek];
  }
  if (daysPerWeek < 3) {
    return focusSplits[3].slice(0, daysPerWeek);
  }

  const base = focusSplits[6];
  const result: string[] = [];
  for (let i = 0; i < daysPerWeek; i += 1) {
    result.push(base[i % base.length]);
  }
  return result;
}

function getExercisesForFocus(
  equipment: EquipmentType,
  focus: string,
  requiredCount: number,
  goal: Goal
): ExerciseDefinition[] {
  const pool = exerciseDatabase[equipment];
  const selected: ExerciseDefinition[] = [];

  const priorityMap: Record<string, ExerciseCategory[]> = {
    "Full Body": ["push", "pull", "legs", "core", "conditioning"],
    "Full Body A": ["push", "pull", "legs", "core", "conditioning"],
    "Full Body B": ["pull", "legs", "push", "core", "conditioning"],
    "Full Body C": ["legs", "push", "pull", "core", "conditioning"],
    Upper: ["push", "pull", "core"],
    Lower: ["legs", "core", "conditioning"],
    Push: ["push", "push", "legs", "core"],
    Pull: ["pull", "pull", "legs", "core"],
    Legs: ["legs", "legs", "core", "conditioning"],
  };

  const categories = priorityMap[focus] ?? priorityMap["Full Body"];

  let index = 0;
  while (selected.length < requiredCount) {
    const category = categories[index % categories.length];
    const poolCandidates = pool.filter((exercise) => exercise.category === category);
    let candidate: ExerciseDefinition | undefined;
    if (poolCandidates.length > 0) {
      const alreadySelectedInCategory = selected.filter((e) => e.category === category).length;
      candidate = poolCandidates[alreadySelectedInCategory % poolCandidates.length];
    }

    if (candidate) {
      selected.push(candidate);
    } else {
      // fallback to any exercise if category empty
      selected.push(pool[selected.length % pool.length]);
    }
    index += 1;
  }

  // Ensure fat loss includes at least one conditioning move when available
  if (goal === "fat_loss" && !selected.some((ex) => ex.category === "conditioning")) {
    const conditioning = pool.find((ex) => ex.category === "conditioning");
    if (conditioning) {
      selected[selected.length - 1] = conditioning;
    }
  }

  return selected;
}

function assignSetsAndReps(exercise: ExerciseDefinition, goal: Goal, experience: Experience): TemplateScheme {
  const template = goalTemplates[goal](experience);
  if (goal === "fat_loss" && exercise.category === "conditioning") {
    return { sets: template.sets, reps: conditioningReps };
  }
  if (goal === "endurance") {
    if (exercise.category === "conditioning") {
      return { sets: template.sets, reps: conditioningReps };
    }
    return template;
  }
  return template;
}

function buildProgramDay(
  dayIndex: number,
  focus: string,
  normalized: Required<CalculatorInput>
): ProgramDay {
  const exerciseCount = sessionExerciseTargets[normalized.sessionLength];
  const exercises = getExercisesForFocus(normalized.equipment, focus, exerciseCount, normalized.goal);
  const plans: ExercisePlan[] = exercises.map((exercise) => {
    const scheme = assignSetsAndReps(exercise, normalized.goal, normalized.experience);
    return {
      name: exercise.name,
      sets: scheme.sets,
      reps: scheme.reps,
      equipment: exercise.equipment,
    };
  });

  return {
    day: dayIndex + 1,
    focus,
    exercises: plans,
  };
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);
  const normalized = normalizeInput(input);
  const focusList = getFocusList(normalized.daysPerWeek);
  const program: ProgramDay[] = focusList.map((focus, index) =>
    buildProgramDay(index, focus, normalized)
  );

  return { program };
}
