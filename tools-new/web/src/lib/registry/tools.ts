import type { ToolCategory, Tool } from "./types";

export const TOOLS_BY_CATEGORY: Record<ToolCategory, Tool[]> = {
  activity: [
    { id: "steps-per-day-calculator", name: "Steps Per Day Calculator" },
    { id: "move-goal-calculator", name: "Move Goal Calculator" },
  ],

  "body-composition": [
    { id: "bmi-calculator", name: "BMI Calculator" },
    { id: "body-fat-calculator", name: "Body Fat Calculator" },
    { id: "lean-body-mass-calculator", name: "Lean Body Mass Calculator" },
    { id: "ideal-weight-calculator", name: "Ideal Weight Calculator" },
    { id: "waist-to-height-ratio-calculator", name: "Waist to Height Ratio Calculator" },
    { id: "waist-to-hip-ratio-calculator", name: "Waist to Hip Ratio Calculator" },
    { id: "body-measurement-calculator", name: "Body Measurement Calculator" },
    { id: "body-recomposition-calculator", name: "Body Recomposition Calculator" },
  ],

  calisthenics: [
    { id: "push-up-calculator", name: "Push Up Calculator" },
    { id: "pull-up-calculator", name: "Pull Up Calculator" },
    { id: "home-workout-generator", name: "Home Workout Generator" },
  ],

  calories: [
    { id: "running-calories-burned-calculator", name: "Running Calories Calculator" },
    { id: "bike-calorie-calculator", name: "Bike Calorie Calculator" },
    { id: "swimming-calories-calculator", name: "Swimming Calories Calculator" },
    { id: "walking-calorie-calculator", name: "Walking Calories Calculator" },
    { id: "treadmill-calorie-calculator", name: "Treadmill Calorie Calculator" },
    { id: "steps-to-calories-calculator", name: "Steps to Calories Calculator" },
  ],

  equipment: [
    { id: "dumbbell-weight-calculator", name: "Dumbbell Weight Calculator" },
  ],

  nutrition: [
    { id: "tdee-calculator", name: "TDEE Calculator" },
    { id: "protein-powder-calculator", name: "Protein Powder Calculator" },
    { id: "fat-intake-calculator", name: "Fat Intake Calculator" },
    { id: "creatine-calculator", name: "Creatine Calculator" },
    { id: "bulk-calculator", name: "Bulk Calculator" },
    { id: "lean-bulk-calculator", name: "Lean Bulk Calculator" },
    { id: "intermittent-fasting-calculator", name: "Intermittent Fasting Calculator" },
    { id: "starbucks-macro-calculator", name: "Starbucks Macro Calculator" },
    { id: "carnivore-macro-calculator", name: "Carnivore Macro Calculator" },
    { id: "subway-macro-calculator", name: "Subway Macro Calculator" },
  ],

  planners: [
    { id: "meal-plan-generator", name: "Meal Plan Generator" },
    { id: "workout-generator", name: "Workout Generator" },
  ],

  running: [
    { id: "running-pace-calculator", name: "Running Pace Calculator" },
    { id: "running-splits-calculator", name: "Running Splits Calculator" },
    { id: "split-calculator", name: "Split Calculator" },
    { id: "interval-calculator", name: "Interval Calculator" },
    { id: "vdot-calculator", name: "VDOT Calculator" },
  ],

  strength: [
    { id: "1-rep-max-calculator", name: "1 Rep Max Calculator" },
    { id: "plate-weight-calculator", name: "Plate Weight Calculator" },
    { id: "barbell-calculator", name: "Barbell Calculator" },
    { id: "powerlifting-calculator", name: "Powerlifting Calculator" },
    { id: "training-volume-calculator", name: "Training Volume Calculator" },
    { id: "strength-ratio-calculator", name: "Strength Ratio Calculator" },
    { id: "rpe-calculator", name: "RPE Calculator" },
  ],

  trackers: [
    { id: "weight-tracker", name: "Weight Tracker" },
  ],
};
