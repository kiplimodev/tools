import type { ToolMeta } from "./types";

export const registry: ToolMeta[] = [
  // ======================
  // RUNNING
  // ======================
  {
    slug: "running-pace-calculator",
    category: "running",
    title: "Running Pace Calculator",
    description: "Calculate your running pace, speed, and finish time for any distance.",
    path: "/running/running-pace-calculator",
  },
  {
    slug: "running-splits-calculator",
    category: "running",
    title: "Running Splits Calculator",
    description: "Generate per-kilometre and per-mile split times for your target race pace.",
    path: "/running/running-splits-calculator",
  },
  {
    slug: "split-calculator",
    category: "running",
    title: "Split Calculator",
    description: "Calculate even or negative splits for any race distance and goal time.",
    path: "/running/split-calculator",
  },
  {
    slug: "interval-calculator",
    category: "running",
    title: "Interval Calculator",
    description: "Calculate interval times, rest periods, and total workout duration for structured training.",
    path: "/running/interval-calculator",
  },
  {
    slug: "vdot-calculator",
    category: "running",
    title: "VDOT Calculator",
    description: "Estimate your VDOT score and training pace zones from a recent race time.",
    path: "/running/vdot-calculator",
  },
  {
    slug: "race-time-predictor",
    category: "running",
    title: "Race Time Predictor",
    description: "Predict your finish time for any race distance using a recent performance and the Riegel formula.",
    path: "/running/race-time-predictor",
  },
  {
    slug: "vo2max",
    category: "running",
    title: "VO2 Max Calculator",
    description: "Estimate your VO2 max and aerobic fitness category from a timed running distance.",
    path: "/running/vo2max",
  },

  // ======================
  // CALORIES
  // ======================
  {
    slug: "rowing-calories-calculator",
    category: "calories",
    title: "Rowing Calories Calculator",
    description: "Estimate calories burned during rowing based on weight, duration, and intensity.",
    path: "/calories/rowing-calories-calculator",
  },
  {
    slug: "swimming-calories-calculator",
    category: "calories",
    title: "Swimming Calories Calculator",
    description: "Estimate calories burned swimming based on stroke, weight, and duration.",
    path: "/calories/swimming-calories-calculator",
  },
  {
    slug: "treadmill-calorie-calculator",
    category: "calories",
    title: "Treadmill Calorie Calculator",
    description: "Estimate calories burned on the treadmill using speed, incline, weight, and duration.",
    path: "/calories/treadmill-calorie-calculator",
  },
  {
    slug: "walking-calorie-calculator",
    category: "calories",
    title: "Walking Calorie Calculator",
    description: "Estimate calories burned walking based on your weight, pace, and distance.",
    path: "/calories/walking-calorie-calculator",
  },
  {
    slug: "running-calories-burned-calculator",
    category: "calories",
    title: "Running Calories Burned Calculator",
    description: "Estimate total calories burned running based on weight, distance, and pace.",
    path: "/calories/running-calories-burned-calculator",
  },
  {
    slug: "bike-calorie-calculator",
    category: "calories",
    title: "Bike Calorie Calculator",
    description: "Estimate calories burned cycling based on weight, duration, and effort level.",
    path: "/calories/bike-calorie-calculator",
  },
  {
    slug: "steps-to-calories-calculator",
    category: "calories",
    title: "Steps to Calories Calculator",
    description: "Convert daily step count into estimated calories burned based on your weight.",
    path: "/calories/steps-to-calories-calculator",
  },

  // ======================
  // BODY COMPOSITION
  // ======================
  {
    slug: "body-fat-calculator",
    category: "body-composition",
    title: "Body Fat Calculator",
    description: "Estimate your body fat percentage using the US Navy tape measurement method.",
    path: "/body-composition/body-fat-calculator",
  },
  {
    slug: "lean-body-mass-calculator",
    category: "body-composition",
    title: "Lean Body Mass Calculator",
    description: "Calculate your lean body mass using the Boer formula from weight and height.",
    path: "/body-composition/lean-body-mass-calculator",
  },
  {
    slug: "bmi-calculator",
    category: "body-composition",
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index from weight and height with health classification.",
    path: "/body-composition/bmi-calculator",
  },
  {
    slug: "ideal-weight-calculator",
    category: "body-composition",
    title: "Ideal Weight Calculator",
    description: "Find your ideal weight range using Devine, Hamwi, Robinson, and Miller formulas.",
    path: "/body-composition/ideal-weight-calculator",
  },
  {
    slug: "waist-to-height-ratio-calculator",
    category: "body-composition",
    title: "Waist-to-Height Ratio Calculator",
    description: "Calculate your waist-to-height ratio and assess cardiovascular health risk.",
    path: "/body-composition/waist-to-height-ratio-calculator",
  },
  {
    slug: "waist-to-hip-ratio-calculator",
    category: "body-composition",
    title: "Waist-to-Hip Ratio Calculator",
    description: "Calculate your waist-to-hip ratio and determine health risk classification.",
    path: "/body-composition/waist-to-hip-ratio-calculator",
  },
  {
    slug: "body-measurement-calculator",
    category: "body-composition",
    title: "Body Measurement Calculator",
    description: "Estimate body composition from girth measurements using established formulas.",
    path: "/body-composition/body-measurement-calculator",
  },
  {
    slug: "body-recomposition-calculator",
    category: "body-composition",
    title: "Body Recomposition Calculator",
    description: "Project changes to fat mass and lean mass over time with a recomposition plan.",
    path: "/body-composition/body-recomposition-calculator",
  },

  // ======================
  // ACTIVITY
  // ======================
  {
    slug: "steps-per-day-calculator",
    category: "activity",
    title: "Steps Per Day Calculator",
    description: "Calculate a personalised daily step goal based on your activity level and health targets.",
    path: "/activity/steps-per-day-calculator",
  },
  {
    slug: "move-goal-calculator",
    category: "activity",
    title: "Move Goal Calculator",
    description: "Estimate a daily active calorie burn target based on your TDEE and activity level.",
    path: "/activity/move-goal-calculator",
  },

  // ======================
  // STRENGTH
  // ======================
  {
    slug: "barbell-calculator",
    category: "strength",
    title: "Barbell Calculator",
    description: "Calculate the weight plates needed on each side of a barbell for any target load.",
    path: "/strength/barbell-calculator",
  },
  {
    slug: "plate-weight-calculator",
    category: "strength",
    title: "Plate Weight Calculator",
    description: "Find the exact plate combination needed to load a barbell to your target weight.",
    path: "/strength/plate-weight-calculator",
  },
  {
    slug: "powerlifting-calculator",
    category: "strength",
    title: "Powerlifting Calculator",
    description: "Calculate your Wilks, DOTS, and IPF GL scores to compare strength across weight classes.",
    path: "/strength/powerlifting-calculator",
  },
  {
    slug: "1-rep-max-calculator",
    category: "strength",
    title: "1 Rep Max Calculator",
    description: "Estimate your one-rep max using Epley, Brzycki, Lombardi, O'Conner, and Lander formulas.",
    path: "/strength/1-rep-max-calculator",
  },
  {
    slug: "training-volume-calculator",
    category: "strength",
    title: "Training Volume Calculator",
    description: "Calculate total training volume in sets, reps, and tonnage for any workout.",
    path: "/strength/training-volume-calculator",
  },
  {
    slug: "strength-ratio-calculator",
    category: "strength",
    title: "Strength Ratio Calculator",
    description: "Assess your push, pull, and leg strength ratios relative to your bodyweight.",
    path: "/strength/strength-ratio-calculator",
  },
  {
    slug: "rpe-calculator",
    category: "strength",
    title: "RPE Calculator",
    description: "Predict your working weight or rep count at any RPE based on your training max.",
    path: "/strength/rpe-calculator",
  },

  // ======================
  // CALISTHENICS
  // ======================
  {
    slug: "push-up-calculator",
    category: "calisthenics",
    title: "Push-Up Calculator",
    description: "Calculate push-up volume, relative strength, and weekly progression targets.",
    path: "/calisthenics/push-up-calculator",
  },
  {
    slug: "pull-up-calculator",
    category: "calisthenics",
    title: "Pull-Up Calculator",
    description: "Calculate pull-up volume, weighted equivalents, and progression milestones.",
    path: "/calisthenics/pull-up-calculator",
  },
  {
    slug: "home-workout-generator",
    category: "calisthenics",
    title: "Home Workout Generator",
    description: "Generate a structured bodyweight workout plan based on your goal and available equipment.",
    path: "/calisthenics/home-workout-generator",
  },

  // ======================
  // NUTRITION
  // ======================
  {
    slug: "fat-intake-calculator",
    category: "nutrition",
    title: "Fat Intake Calculator",
    description: "Calculate your optimal daily fat intake in grams based on total calorie targets.",
    path: "/nutrition/fat-intake-calculator",
  },
  {
    slug: "creatine-calculator",
    category: "nutrition",
    title: "Creatine Calculator",
    description: "Calculate your daily creatine maintenance dose and loading phase amounts by bodyweight.",
    path: "/nutrition/creatine-calculator",
  },
  {
    slug: "protein-powder-calculator",
    category: "nutrition",
    title: "Protein Powder Calculator",
    description: "Find out how many protein powder scoops you need to hit your daily protein target.",
    path: "/nutrition/protein-powder-calculator",
  },
  {
    slug: "bulk-calculator",
    category: "nutrition",
    title: "Bulk Calculator",
    description: "Calculate daily calorie intake for a controlled bulk based on TDEE and surplus size.",
    path: "/nutrition/bulk-calculator",
  },
  {
    slug: "lean-bulk-calculator",
    category: "nutrition",
    title: "Lean Bulk Calculator",
    description: "Calculate calories for a lean bulk with capped surplus to minimise fat gain.",
    path: "/nutrition/lean-bulk-calculator",
  },
  {
    slug: "intermittent-fasting-calculator",
    category: "nutrition",
    title: "Intermittent Fasting Calculator",
    description: "Calculate your eating and fasting windows based on your chosen IF protocol.",
    path: "/nutrition/intermittent-fasting-calculator",
  },
  {
    slug: "tdee-calculator",
    category: "nutrition",
    title: "TDEE Calculator",
    description: "Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor equation.",
    path: "/nutrition/tdee-calculator",
  },
  {
    slug: "starbucks-macro-calculator",
    category: "nutrition",
    title: "Starbucks Macro Calculator",
    description: "Look up calories, protein, carbs, and fat for popular Starbucks drinks and food items.",
    path: "/nutrition/starbucks-macro-calculator",
  },
  {
    slug: "carnivore-macro-calculator",
    category: "nutrition",
    title: "Carnivore Macro Calculator",
    description: "Calculate your macro targets on a carnivore diet from your weight and goals.",
    path: "/nutrition/carnivore-macro-calculator",
  },
  {
    slug: "subway-macro-calculator",
    category: "nutrition",
    title: "Subway Macro Calculator",
    description: "Find the calories, protein, carbs, and fat in your custom Subway order.",
    path: "/nutrition/subway-macro-calculator",
  },

  // ======================
  // PLANNERS
  // ======================
  {
    slug: "meal-plan-generator",
    category: "planners",
    title: "Meal Plan Generator",
    description: "Generate a structured daily meal plan tailored to your calorie and macro targets.",
    path: "/planners/meal-plan-generator",
  },
  {
    slug: "workout-generator",
    category: "planners",
    title: "Workout Generator",
    description: "Generate a goal-based weekly workout plan based on your training level and equipment.",
    path: "/planners/workout-generator",
  },

  // ======================
  // TRACKERS
  // ======================
  {
    slug: "weight-tracker",
    category: "trackers",
    title: "Weight Tracker",
    description: "Track your daily weight, view moving averages, and monitor trends over time.",
    path: "/trackers/weight-tracker",
  },

  // ======================
  // EQUIPMENT
  // ======================
  {
    slug: "dumbbell-weight-calculator",
    category: "equipment",
    title: "Dumbbell Weight Calculator",
    description: "Calculate total volume lifted with dumbbells across sets and exercises.",
    path: "/equipment/dumbbell-weight-calculator",
  },
];
