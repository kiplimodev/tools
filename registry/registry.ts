import { ZodSchema } from "zod";

import { calculate as runningPaceCalculate } from "../running/running-pace-calculator";
import {
  inputSchema as runningPaceInputSchema,
  outputSchema as runningPaceOutputSchema,
} from "../running/running-pace-calculator/schemas";
import { calculate as runningSplitsCalculate } from "../running/running-splits-calculator";
import {
  inputSchema as runningSplitsInputSchema,
  outputSchema as runningSplitsOutputSchema,
} from "../running/running-splits-calculator/schemas";
import { calculate as splitCalculate } from "../running/split-calculator";
import {
  inputSchema as splitInputSchema,
  outputSchema as splitOutputSchema,
} from "../running/split-calculator/schemas";
import { calculate as intervalCalculate } from "../running/interval-calculator";
import {
  inputSchema as intervalInputSchema,
  outputSchema as intervalOutputSchema,
} from "../running/interval-calculator/schemas";
import { calculate as vdotCalculate } from "../running/vdot-calculator";
import {
  inputSchema as vdotInputSchema,
  outputSchema as vdotOutputSchema,
} from "../running/vdot-calculator/schemas";

import { calculate as rowingCaloriesCalculate } from "../calories/rowing-calories-calculator";
import {
  inputSchema as rowingCaloriesInputSchema,
  outputSchema as rowingCaloriesOutputSchema,
} from "../calories/rowing-calories-calculator/schemas";
import { calculate as swimmingCaloriesCalculate } from "../calories/swimming-calories-calculator";
import {
  inputSchema as swimmingCaloriesInputSchema,
  outputSchema as swimmingCaloriesOutputSchema,
} from "../calories/swimming-calories-calculator/schemas";
import { calculate as treadmillCalorieCalculate } from "../calories/treadmill-calorie-calculator";
import {
  inputSchema as treadmillCalorieInputSchema,
  outputSchema as treadmillCalorieOutputSchema,
} from "../calories/treadmill-calorie-calculator/schemas";
import { calculate as walkingCalorieCalculate } from "../calories/walking-calorie-calculator";
import {
  inputSchema as walkingCalorieInputSchema,
  outputSchema as walkingCalorieOutputSchema,
} from "../calories/walking-calorie-calculator/schemas";
import { calculate as runningCaloriesCalculate } from "../calories/running-calories-burned-calculator";
import {
  inputSchema as runningCaloriesInputSchema,
  outputSchema as runningCaloriesOutputSchema,
} from "../calories/running-calories-burned-calculator/schemas";
import { calculate as bikeCalorieCalculate } from "../calories/bike-calorie-calculator";
import {
  inputSchema as bikeCalorieInputSchema,
  outputSchema as bikeCalorieOutputSchema,
} from "../calories/bike-calorie-calculator/schemas";
import { calculate as stepsToCaloriesCalculate } from "../calories/steps-to-calories-calculator";
import {
  inputSchema as stepsToCaloriesInputSchema,
  outputSchema as stepsToCaloriesOutputSchema,
} from "../calories/steps-to-calories-calculator/schemas";

import { calculate as bodyFatCalculate } from "../body-composition/body-fat-calculator";
import {
  inputSchema as bodyFatInputSchema,
  outputSchema as bodyFatOutputSchema,
} from "../body-composition/body-fat-calculator/schemas";
import { calculate as leanBodyMassCalculate } from "../body-composition/lean-body-mass-calculator";
import {
  inputSchema as leanBodyMassInputSchema,
  outputSchema as leanBodyMassOutputSchema,
} from "../body-composition/lean-body-mass-calculator/schemas";
import { calculate as bmiCalculate } from "../body-composition/bmi-calculator";
import {
  inputSchema as bmiInputSchema,
  outputSchema as bmiOutputSchema,
} from "../body-composition/bmi-calculator/schemas";
import { calculate as idealWeightCalculate } from "../body-composition/ideal-weight-calculator";
import {
  inputSchema as idealWeightInputSchema,
  outputSchema as idealWeightOutputSchema,
} from "../body-composition/ideal-weight-calculator/schemas";
import { calculate as waistToHeightCalculate } from "../body-composition/waist-to-height-ratio-calculator";
import {
  inputSchema as waistToHeightInputSchema,
  outputSchema as waistToHeightOutputSchema,
} from "../body-composition/waist-to-height-ratio-calculator/schemas";
import { calculate as waistToHipCalculate } from "../body-composition/waist-to-hip-ratio-calculator";
import {
  inputSchema as waistToHipInputSchema,
  outputSchema as waistToHipOutputSchema,
} from "../body-composition/waist-to-hip-ratio-calculator/schemas";
import { calculate as bodyMeasurementCalculate } from "../body-composition/body-measurement-calculator";
import {
  inputSchema as bodyMeasurementInputSchema,
  outputSchema as bodyMeasurementOutputSchema,
} from "../body-composition/body-measurement-calculator/schemas";
import { calculate as bodyRecompositionCalculate } from "../body-composition/body-recomposition-calculator";
import {
  inputSchema as bodyRecompositionInputSchema,
  outputSchema as bodyRecompositionOutputSchema,
} from "../body-composition/body-recomposition-calculator/schemas";

import { calculate as stepsPerDayCalculate } from "../activity/steps-per-day-calculator";
import {
  inputSchema as stepsPerDayInputSchema,
  outputSchema as stepsPerDayOutputSchema,
} from "../activity/steps-per-day-calculator/schemas";
import { calculate as moveGoalCalculate } from "../activity/move-goal-calculator";
import {
  inputSchema as moveGoalInputSchema,
  outputSchema as moveGoalOutputSchema,
} from "../activity/move-goal-calculator/schemas";

import { calculate as barbellCalculate } from "../strength/barbell-calculator";
import {
  inputSchema as barbellInputSchema,
  outputSchema as barbellOutputSchema,
} from "../strength/barbell-calculator/schemas";
import { calculate as plateWeightCalculate } from "../strength/plate-weight-calculator";
import {
  inputSchema as plateWeightInputSchema,
  outputSchema as plateWeightOutputSchema,
} from "../strength/plate-weight-calculator/schemas";
import { calculate as powerliftingCalculate } from "../strength/powerlifting-calculator";
import {
  inputSchema as powerliftingInputSchema,
  outputSchema as powerliftingOutputSchema,
} from "../strength/powerlifting-calculator/schemas";
import { calculate as oneRepMaxCalculate } from "../strength/1-rep-max-calculator";
import {
  inputSchema as oneRepMaxInputSchema,
  outputSchema as oneRepMaxOutputSchema,
} from "../strength/1-rep-max-calculator/schemas";
import { calculate as trainingVolumeCalculate } from "../strength/training-volume-calculator";
import {
  inputSchema as trainingVolumeInputSchema,
  outputSchema as trainingVolumeOutputSchema,
} from "../strength/training-volume-calculator/schemas";
import { calculate as strengthRatioCalculate } from "../strength/strength-ratio-calculators";
import {
  inputSchema as strengthRatioInputSchema,
  outputSchema as strengthRatioOutputSchema,
} from "../strength/strength-ratio-calculators/schemas";
import { calculate as rpeCalculate } from "../strength/rpe-calculator";
import {
  inputSchema as rpeInputSchema,
  outputSchema as rpeOutputSchema,
} from "../strength/rpe-calculator/schemas";
import { calculate as alternateOneRepMaxCalculate } from "../strength/one-rep-max-calculator";
import {
  inputSchema as alternateOneRepMaxInputSchema,
  outputSchema as alternateOneRepMaxOutputSchema,
} from "../strength/one-rep-max-calculator/schemas";

import { calculate as pushUpCalculate } from "../calisthenics/push-up-calculator";
import {
  inputSchema as pushUpInputSchema,
  outputSchema as pushUpOutputSchema,
} from "../calisthenics/push-up-calculator/schemas";
import { calculate as pullUpCalculate } from "../calisthenics/pull-up-calculator";
import {
  inputSchema as pullUpInputSchema,
  outputSchema as pullUpOutputSchema,
} from "../calisthenics/pull-up-calculator/schemas";
import { calculate as homeWorkoutCalculate } from "../calisthenics/home-workout-generator";
import {
  inputSchema as homeWorkoutInputSchema,
  outputSchema as homeWorkoutOutputSchema,
} from "../calisthenics/home-workout-generator/schemas";

import { calculate as fatIntakeCalculate } from "../nutrition/fat-intake-calculator";
import {
  inputSchema as fatIntakeInputSchema,
  outputSchema as fatIntakeOutputSchema,
} from "../nutrition/fat-intake-calculator/schemas";
import { calculate as creatineCalculate } from "../nutrition/creatine-calculator";
import {
  inputSchema as creatineInputSchema,
  outputSchema as creatineOutputSchema,
} from "../nutrition/creatine-calculator/schemas";
import { calculate as proteinPowderCalculate } from "../nutrition/protein-powder-calculator";
import {
  inputSchema as proteinPowderInputSchema,
  outputSchema as proteinPowderOutputSchema,
} from "../nutrition/protein-powder-calculator/schemas";
import { calculate as bulkCalculate } from "../nutrition/bulk-calculator";
import {
  inputSchema as bulkInputSchema,
  outputSchema as bulkOutputSchema,
} from "../nutrition/bulk-calculator/schemas";
import { calculate as leanBulkCalculate } from "../nutrition/lean-bulk-calculator";
import {
  inputSchema as leanBulkInputSchema,
  outputSchema as leanBulkOutputSchema,
} from "../nutrition/lean-bulk-calculator/schemas";
import { calculate as intermittentFastingCalculate } from "../nutrition/intermittent-fasting-calculator";
import {
  inputSchema as intermittentFastingInputSchema,
  outputSchema as intermittentFastingOutputSchema,
} from "../nutrition/intermittent-fasting-calculator/schemas";
import { calculate as tdeeCalculate } from "../nutrition/tdee-calculator";
import {
  inputSchema as tdeeInputSchema,
  outputSchema as tdeeOutputSchema,
} from "../nutrition/tdee-calculator/schemas";
import { calculate as starbucksMacroCalculate } from "../nutrition/starbucks-macro-calculator";
import {
  inputSchema as starbucksMacroInputSchema,
  outputSchema as starbucksMacroOutputSchema,
} from "../nutrition/starbucks-macro-calculator/schemas";
import { calculate as carnivoreMacroCalculate } from "../nutrition/carnivore-macro-calculator";
import {
  inputSchema as carnivoreMacroInputSchema,
  outputSchema as carnivoreMacroOutputSchema,
} from "../nutrition/carnivore-macro-calculator/schemas";
import { calculate as subwayMacroCalculate } from "../nutrition/subway-macro-calculator";
import {
  inputSchema as subwayMacroInputSchema,
  outputSchema as subwayMacroOutputSchema,
} from "../nutrition/subway-macro-calculator/schemas";

import { calculate as mealPlanCalculate } from "../planners/meal-plan-generator";
import {
  inputSchema as mealPlanInputSchema,
  outputSchema as mealPlanOutputSchema,
} from "../planners/meal-plan-generator/schemas";
import { calculate as workoutPlanCalculate } from "../planners/workout-generator";
import {
  inputSchema as workoutPlanInputSchema,
  outputSchema as workoutPlanOutputSchema,
} from "../planners/workout-generator/schemas";

import { calculate as weightTrackerCalculate } from "../trackers/weight-tracker";
import {
  inputSchema as weightTrackerInputSchema,
  outputSchema as weightTrackerOutputSchema,
} from "../trackers/weight-tracker/schemas";

import { calculate as dumbbellWeightCalculate } from "../equipment/dumbbell-weight-calculator";
import {
  inputSchema as dumbbellWeightInputSchema,
  outputSchema as dumbbellWeightOutputSchema,
} from "../equipment/dumbbell-weight-calculator/schemas";

export interface ToolDefinition {
  id: string;
  name: string;
  category: string;
  path: string;
  description: string;
  inputSchema: ZodSchema<any>;
  outputSchema: ZodSchema<any>;
  calculate: (input: any) => any;
}

export const tools: ToolDefinition[] = [
  {
    id: "running-pace-calculator",
    name: "Running Pace Calculator",
    category: "running",
    path: "/tools/running/running-pace-calculator",
    description: "Calculate running pace using distance and time inputs to plan training sessions.",
    inputSchema: runningPaceInputSchema,
    outputSchema: runningPaceOutputSchema,
    calculate: runningPaceCalculate,
  },
  {
    id: "running-splits-calculator",
    name: "Running Splits Calculator",
    category: "running",
    path: "/tools/running/running-splits-calculator",
    description: "Break a run into consistent splits based on distance and time goals.",
    inputSchema: runningSplitsInputSchema,
    outputSchema: runningSplitsOutputSchema,
    calculate: runningSplitsCalculate,
  },
  {
    id: "split-calculator",
    name: "Split Calculator",
    category: "running",
    path: "/tools/running/split-calculator",
    description: "Compute split pacing for segments of a run using distance and time targets.",
    inputSchema: splitInputSchema,
    outputSchema: splitOutputSchema,
    calculate: splitCalculate,
  },
  {
    id: "interval-calculator",
    name: "Interval Calculator",
    category: "running",
    path: "/tools/running/interval-calculator",
    description: "Plan interval workouts with target paces and rest durations for each repeat.",
    inputSchema: intervalInputSchema,
    outputSchema: intervalOutputSchema,
    calculate: intervalCalculate,
  },
  {
    id: "vdot-calculator",
    name: "VDOT Calculator",
    category: "running",
    path: "/tools/running/vdot-calculator",
    description: "Estimate VDOT score and recommended training paces from recent race results.",
    inputSchema: vdotInputSchema,
    outputSchema: vdotOutputSchema,
    calculate: vdotCalculate,
  },
  {
    id: "rowing-calories-calculator",
    name: "Rowing Calories Calculator",
    category: "calories",
    path: "/tools/calories/rowing-calories-calculator",
    description: "Estimate calories burned during rowing sessions based on effort and duration.",
    inputSchema: rowingCaloriesInputSchema,
    outputSchema: rowingCaloriesOutputSchema,
    calculate: rowingCaloriesCalculate,
  },
  {
    id: "swimming-calories-calculator",
    name: "Swimming Calories Calculator",
    category: "calories",
    path: "/tools/calories/swimming-calories-calculator",
    description: "Calculate swimming calorie burn considering stroke type, pace, and time spent.",
    inputSchema: swimmingCaloriesInputSchema,
    outputSchema: swimmingCaloriesOutputSchema,
    calculate: swimmingCaloriesCalculate,
  },
  {
    id: "treadmill-calorie-calculator",
    name: "Treadmill Calorie Calculator",
    category: "calories",
    path: "/tools/calories/treadmill-calorie-calculator",
    description: "Compute treadmill calories burned using speed, incline, and workout duration.",
    inputSchema: treadmillCalorieInputSchema,
    outputSchema: treadmillCalorieOutputSchema,
    calculate: treadmillCalorieCalculate,
  },
  {
    id: "walking-calorie-calculator",
    name: "Walking Calorie Calculator",
    category: "calories",
    path: "/tools/calories/walking-calorie-calculator",
    description: "Estimate calories burned from walking based on distance, speed, and body weight.",
    inputSchema: walkingCalorieInputSchema,
    outputSchema: walkingCalorieOutputSchema,
    calculate: walkingCalorieCalculate,
  },
  {
    id: "running-calories-burned-calculator",
    name: "Running Calories Burned Calculator",
    category: "calories",
    path: "/tools/calories/running-calories-burned-calculator",
    description: "Calculate calorie expenditure for runs factoring pace, distance, and weight.",
    inputSchema: runningCaloriesInputSchema,
    outputSchema: runningCaloriesOutputSchema,
    calculate: runningCaloriesCalculate,
  },
  {
    id: "bike-calorie-calculator",
    name: "Bike Calorie Calculator",
    category: "calories",
    path: "/tools/calories/bike-calorie-calculator",
    description: "Estimate calories burned while cycling using speed, duration, and rider weight.",
    inputSchema: bikeCalorieInputSchema,
    outputSchema: bikeCalorieOutputSchema,
    calculate: bikeCalorieCalculate,
  },
  {
    id: "steps-to-calories-calculator",
    name: "Steps to Calories Calculator",
    category: "calories",
    path: "/tools/calories/steps-to-calories-calculator",
    description: "Translate step counts into estimated calorie burn with stride and weight inputs.",
    inputSchema: stepsToCaloriesInputSchema,
    outputSchema: stepsToCaloriesOutputSchema,
    calculate: stepsToCaloriesCalculate,
  },
  {
    id: "body-fat-calculator",
    name: "Body Fat Calculator",
    category: "body-composition",
    path: "/tools/body-composition/body-fat-calculator",
    description: "Estimate body fat percentage from circumference and skinfold measurements.",
    inputSchema: bodyFatInputSchema,
    outputSchema: bodyFatOutputSchema,
    calculate: bodyFatCalculate,
  },
  {
    id: "lean-body-mass-calculator",
    name: "Lean Body Mass Calculator",
    category: "body-composition",
    path: "/tools/body-composition/lean-body-mass-calculator",
    description: "Calculate lean body mass using weight and body fat estimates.",
    inputSchema: leanBodyMassInputSchema,
    outputSchema: leanBodyMassOutputSchema,
    calculate: leanBodyMassCalculate,
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    category: "body-composition",
    path: "/tools/body-composition/bmi-calculator",
    description: "Compute Body Mass Index from height and weight to gauge weight status.",
    inputSchema: bmiInputSchema,
    outputSchema: bmiOutputSchema,
    calculate: bmiCalculate,
  },
  {
    id: "ideal-weight-calculator",
    name: "Ideal Weight Calculator",
    category: "body-composition",
    path: "/tools/body-composition/ideal-weight-calculator",
    description: "Estimate ideal body weight ranges using height and body frame information.",
    inputSchema: idealWeightInputSchema,
    outputSchema: idealWeightOutputSchema,
    calculate: idealWeightCalculate,
  },
  {
    id: "waist-to-height-ratio-calculator",
    name: "Waist-to-Height Ratio Calculator",
    category: "body-composition",
    path: "/tools/body-composition/waist-to-height-ratio-calculator",
    description: "Assess health risk using waist-to-height ratio derived from circumference data.",
    inputSchema: waistToHeightInputSchema,
    outputSchema: waistToHeightOutputSchema,
    calculate: waistToHeightCalculate,
  },
  {
    id: "waist-to-hip-ratio-calculator",
    name: "Waist-to-Hip Ratio Calculator",
    category: "body-composition",
    path: "/tools/body-composition/waist-to-hip-ratio-calculator",
    description: "Evaluate fat distribution through the ratio of waist and hip measurements.",
    inputSchema: waistToHipInputSchema,
    outputSchema: waistToHipOutputSchema,
    calculate: waistToHipCalculate,
  },
  {
    id: "body-measurement-calculator",
    name: "Body Measurement Calculator",
    category: "body-composition",
    path: "/tools/body-composition/body-measurement-calculator",
    description: "Summarize key circumference measurements for tracking physique changes.",
    inputSchema: bodyMeasurementInputSchema,
    outputSchema: bodyMeasurementOutputSchema,
    calculate: bodyMeasurementCalculate,
  },
  {
    id: "body-recomposition-calculator",
    name: "Body Recomposition Calculator",
    category: "body-composition",
    path: "/tools/body-composition/body-recomposition-calculator",
    description: "Plan body recomposition by balancing calorie needs for fat loss and muscle gain.",
    inputSchema: bodyRecompositionInputSchema,
    outputSchema: bodyRecompositionOutputSchema,
    calculate: bodyRecompositionCalculate,
  },
  {
    id: "steps-per-day-calculator",
    name: "Steps Per Day Calculator",
    category: "activity",
    path: "/tools/activity/steps-per-day-calculator",
    description: "Estimate daily step targets based on activity level and movement goals.",
    inputSchema: stepsPerDayInputSchema,
    outputSchema: stepsPerDayOutputSchema,
    calculate: stepsPerDayCalculate,
  },
  {
    id: "move-goal-calculator",
    name: "Move Goal Calculator",
    category: "activity",
    path: "/tools/activity/move-goal-calculator",
    description: "Set personalized move goals using calorie targets and activity preferences.",
    inputSchema: moveGoalInputSchema,
    outputSchema: moveGoalOutputSchema,
    calculate: moveGoalCalculate,
  },
  {
    id: "barbell-calculator",
    name: "Barbell Calculator",
    category: "strength",
    path: "/tools/strength/barbell-calculator",
    description: "Break down barbell loading with plate counts for a desired total weight.",
    inputSchema: barbellInputSchema,
    outputSchema: barbellOutputSchema,
    calculate: barbellCalculate,
  },
  {
    id: "plate-weight-calculator",
    name: "Plate Weight Calculator",
    category: "strength",
    path: "/tools/strength/plate-weight-calculator",
    description: "Determine plate combinations needed to reach a target lift weight.",
    inputSchema: plateWeightInputSchema,
    outputSchema: plateWeightOutputSchema,
    calculate: plateWeightCalculate,
  },
  {
    id: "powerlifting-calculator",
    name: "Powerlifting Calculator",
    category: "strength",
    path: "/tools/strength/powerlifting-calculator",
    description: "Estimate powerlifting totals and wilks-like scores from individual lifts.",
    inputSchema: powerliftingInputSchema,
    outputSchema: powerliftingOutputSchema,
    calculate: powerliftingCalculate,
  },
  {
    id: "1-rep-max-calculator",
    name: "1 Rep Max Calculator",
    category: "strength",
    path: "/tools/strength/1-rep-max-calculator",
    description: "Project one-repetition max from recent training sets and reps completed.",
    inputSchema: oneRepMaxInputSchema,
    outputSchema: oneRepMaxOutputSchema,
    calculate: oneRepMaxCalculate,
  },
  {
    id: "training-volume-calculator",
    name: "Training Volume Calculator",
    category: "strength",
    path: "/tools/strength/training-volume-calculator",
    description: "Compute total training volume across sets, reps, and weight lifted.",
    inputSchema: trainingVolumeInputSchema,
    outputSchema: trainingVolumeOutputSchema,
    calculate: trainingVolumeCalculate,
  },
  {
    id: "strength-ratio-calculators",
    name: "Strength Ratio Calculators",
    category: "strength",
    path: "/tools/strength/strength-ratio-calculators",
    description: "Compare lifts using common strength ratios to assess balance across movements.",
    inputSchema: strengthRatioInputSchema,
    outputSchema: strengthRatioOutputSchema,
    calculate: strengthRatioCalculate,
  },
  {
    id: "rpe-calculator",
    name: "RPE Calculator",
    category: "strength",
    path: "/tools/strength/rpe-calculator",
    description: "Estimate weight targets based on Rate of Perceived Exertion and reps in reserve.",
    inputSchema: rpeInputSchema,
    outputSchema: rpeOutputSchema,
    calculate: rpeCalculate,
  },
  {
    id: "one-rep-max-calculator",
    name: "One Rep Max Calculator",
    category: "strength",
    path: "/tools/strength/one-rep-max-calculator",
    description: "Alternate one-rep max projection using simplified rep and weight inputs.",
    inputSchema: alternateOneRepMaxInputSchema,
    outputSchema: alternateOneRepMaxOutputSchema,
    calculate: alternateOneRepMaxCalculate,
  },
  {
    id: "push-up-calculator",
    name: "Push-Up Calculator",
    category: "calisthenics",
    path: "/tools/calisthenics/push-up-calculator",
    description: "Estimate push-up performance, volume, and targets from current ability.",
    inputSchema: pushUpInputSchema,
    outputSchema: pushUpOutputSchema,
    calculate: pushUpCalculate,
  },
  {
    id: "pull-up-calculator",
    name: "Pull-Up Calculator",
    category: "calisthenics",
    path: "/tools/calisthenics/pull-up-calculator",
    description: "Project pull-up capacity and progression using body weight and reps data.",
    inputSchema: pullUpInputSchema,
    outputSchema: pullUpOutputSchema,
    calculate: pullUpCalculate,
  },
  {
    id: "home-workout-generator",
    name: "Home Workout Generator",
    category: "calisthenics",
    path: "/tools/calisthenics/home-workout-generator",
    description: "Generate home-friendly workouts tailored to equipment availability and goals.",
    inputSchema: homeWorkoutInputSchema,
    outputSchema: homeWorkoutOutputSchema,
    calculate: homeWorkoutCalculate,
  },
  {
    id: "fat-intake-calculator",
    name: "Fat Intake Calculator",
    category: "nutrition",
    path: "/tools/nutrition/fat-intake-calculator",
    description: "Recommend daily fat intake based on calories, macros, and dietary goals.",
    inputSchema: fatIntakeInputSchema,
    outputSchema: fatIntakeOutputSchema,
    calculate: fatIntakeCalculate,
  },
  {
    id: "creatine-calculator",
    name: "Creatine Calculator",
    category: "nutrition",
    path: "/tools/nutrition/creatine-calculator",
    description: "Determine creatine dosing strategies including loading and maintenance phases.",
    inputSchema: creatineInputSchema,
    outputSchema: creatineOutputSchema,
    calculate: creatineCalculate,
  },
  {
    id: "protein-powder-calculator",
    name: "Protein Powder Calculator",
    category: "nutrition",
    path: "/tools/nutrition/protein-powder-calculator",
    description: "Calculate protein powder servings and cost per serving for supplementation.",
    inputSchema: proteinPowderInputSchema,
    outputSchema: proteinPowderOutputSchema,
    calculate: proteinPowderCalculate,
  },
  {
    id: "bulk-calculator",
    name: "Bulk Calculator",
    category: "nutrition",
    path: "/tools/nutrition/bulk-calculator",
    description: "Plan bulking calories and macros to support weight gain and muscle growth.",
    inputSchema: bulkInputSchema,
    outputSchema: bulkOutputSchema,
    calculate: bulkCalculate,
  },
  {
    id: "lean-bulk-calculator",
    name: "Lean Bulk Calculator",
    category: "nutrition",
    path: "/tools/nutrition/lean-bulk-calculator",
    description: "Create lean bulk targets balancing surplus calories with controlled fat gain.",
    inputSchema: leanBulkInputSchema,
    outputSchema: leanBulkOutputSchema,
    calculate: leanBulkCalculate,
  },
  {
    id: "intermittent-fasting-calculator",
    name: "Intermittent Fasting Calculator",
    category: "nutrition",
    path: "/tools/nutrition/intermittent-fasting-calculator",
    description: "Outline fasting windows, eating periods, and calorie needs for IF protocols.",
    inputSchema: intermittentFastingInputSchema,
    outputSchema: intermittentFastingOutputSchema,
    calculate: intermittentFastingCalculate,
  },
  {
    id: "tdee-calculator",
    name: "TDEE Calculator",
    category: "nutrition",
    path: "/tools/nutrition/tdee-calculator",
    description: "Estimate Total Daily Energy Expenditure from BMR and activity multiplier.",
    inputSchema: tdeeInputSchema,
    outputSchema: tdeeOutputSchema,
    calculate: tdeeCalculate,
  },
  {
    id: "starbucks-macro-calculator",
    name: "Starbucks Macro Calculator",
    category: "nutrition",
    path: "/tools/nutrition/starbucks-macro-calculator",
    description: "Calculate calories and macros for Starbucks drinks with customizations.",
    inputSchema: starbucksMacroInputSchema,
    outputSchema: starbucksMacroOutputSchema,
    calculate: starbucksMacroCalculate,
  },
  {
    id: "carnivore-macro-calculator",
    name: "Carnivore Macro Calculator",
    category: "nutrition",
    path: "/tools/nutrition/carnivore-macro-calculator",
    description: "Build carnivore diet macros using protein targets and chosen food sources.",
    inputSchema: carnivoreMacroInputSchema,
    outputSchema: carnivoreMacroOutputSchema,
    calculate: carnivoreMacroCalculate,
  },
  {
    id: "subway-macro-calculator",
    name: "Subway Macro Calculator",
    category: "nutrition",
    path: "/tools/nutrition/subway-macro-calculator",
    description: "Compute calories and macros for custom Subway sandwich builds.",
    inputSchema: subwayMacroInputSchema,
    outputSchema: subwayMacroOutputSchema,
    calculate: subwayMacroCalculate,
  },
  {
    id: "meal-plan-generator",
    name: "Meal Plan Generator",
    category: "planners",
    path: "/tools/planners/meal-plan-generator",
    description: "Generate meal plans matching calorie goals and dietary preferences.",
    inputSchema: mealPlanInputSchema,
    outputSchema: mealPlanOutputSchema,
    calculate: mealPlanCalculate,
  },
  {
    id: "workout-generator",
    name: "Workout Generator",
    category: "planners",
    path: "/tools/planners/workout-generator",
    description: "Create workout templates tailored to training focus, days, and equipment.",
    inputSchema: workoutPlanInputSchema,
    outputSchema: workoutPlanOutputSchema,
    calculate: workoutPlanCalculate,
  },
  {
    id: "weight-tracker",
    name: "Weight Tracker",
    category: "trackers",
    path: "/tools/trackers/weight-tracker",
    description: "Track weight changes over time and summarize progress statistics.",
    inputSchema: weightTrackerInputSchema,
    outputSchema: weightTrackerOutputSchema,
    calculate: weightTrackerCalculate,
  },
  {
    id: "dumbbell-weight-calculator",
    name: "Dumbbell Weight Calculator",
    category: "equipment",
    path: "/tools/equipment/dumbbell-weight-calculator",
    description: "Determine adjustable dumbbell settings to hit target lift weights.",
    inputSchema: dumbbellWeightInputSchema,
    outputSchema: dumbbellWeightOutputSchema,
    calculate: dumbbellWeightCalculate,
  },
];
