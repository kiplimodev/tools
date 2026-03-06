import type { ToolMeta } from "./types";

export const registry: ToolMeta[] = [
  // ======================
  // RUNNING
  // ======================
  {
    slug: "running-pace-calculator",
    category: "running",
    title: "Running Pace Calculator",
    description: "Use our free running pace calculator to find your pace, speed, and finish time for any distance — 5K to marathon.",
    path: "/running/running-pace-calculator",
  },
  {
    slug: "running-splits-calculator",
    category: "running",
    title: "Running Splits Calculator",
    description: "Use our free running splits calculator to generate per-kilometre and per-mile split times for any race distance and goal pace.",
    path: "/running/running-splits-calculator",
  },
  {
    slug: "split-calculator",
    category: "running",
    title: "Split Calculator",
    description: "Calculate even or negative splits for any race distance and goal time — perfect for pacing strategy on race day.",
    path: "/running/split-calculator",
  },
  {
    slug: "interval-calculator",
    category: "running",
    title: "Interval Calculator",
    description: "Use our free interval training calculator to plan work intervals, rest periods, and total workout duration for any structured session.",
    path: "/running/interval-calculator",
  },
  {
    slug: "vdot-calculator",
    category: "running",
    title: "VDOT Calculator",
    description: "Use our free VDOT calculator to estimate your VDOT score and optimal training pace zones from a recent race time.",
    path: "/running/vdot-calculator",
  },
  {
    slug: "race-time-predictor",
    category: "running",
    title: "Race Time Predictor",
    description: "Use our free race time predictor to forecast your finish time for any distance using a recent race result and the Riegel formula.",
    path: "/running/race-time-predictor",
  },
  {
    slug: "vo2max",
    category: "running",
    title: "VO2 Max Calculator",
    description: "Estimate your VO2 max and aerobic fitness category from a timed run with our free VO2 max calculator.",
    path: "/running/vo2max",
  },

  // ======================
  // CALORIES
  // ======================
  {
    slug: "rowing-calories-calculator",
    category: "calories",
    title: "Rowing Calories Calculator",
    description: "Use our free rowing calories calculator to estimate calories burned on the rowing machine by weight, duration, and intensity.",
    path: "/calories/rowing-calories-calculator",
  },
  {
    slug: "swimming-calories-calculator",
    category: "calories",
    title: "Swimming Calories Calculator",
    description: "Use our free swimming calories calculator to estimate calories burned swimming by stroke, body weight, and session duration.",
    path: "/calories/swimming-calories-calculator",
  },
  {
    slug: "treadmill-calorie-calculator",
    category: "calories",
    title: "Treadmill Calorie Calculator",
    description: "Use our free treadmill calorie calculator to estimate calories burned on the treadmill using speed, incline, weight, and duration.",
    path: "/calories/treadmill-calorie-calculator",
  },
  {
    slug: "walking-calorie-calculator",
    category: "calories",
    title: "Walking Calorie Calculator",
    description: "Use our free walking calorie calculator to estimate calories burned walking based on your weight, pace, and distance.",
    path: "/calories/walking-calorie-calculator",
  },
  {
    slug: "running-calories-burned-calculator",
    category: "calories",
    title: "Running Calories Burned Calculator",
    description: "Use our free calories burned running calculator to estimate total calories burned based on your weight, distance, and running pace.",
    path: "/calories/running-calories-burned-calculator",
  },
  {
    slug: "bike-calorie-calculator",
    category: "calories",
    title: "Bike Calorie Calculator",
    description: "Use our free bike calories calculator to estimate calories burned cycling based on your weight, duration, and effort level.",
    path: "/calories/bike-calorie-calculator",
  },
  {
    slug: "steps-to-calories-calculator",
    category: "calories",
    title: "Steps to Calories Calculator",
    description: "Use our free steps to calories calculator to convert your daily step count into estimated calories burned based on your weight.",
    path: "/calories/steps-to-calories-calculator",
  },

  // ======================
  // BODY COMPOSITION
  // ======================
  {
    slug: "body-fat-calculator",
    category: "body-composition",
    title: "Body Fat Calculator",
    description: "Use our free body fat calculator to estimate your body fat percentage with the US Navy tape measurement method. Instant results.",
    path: "/body-composition/body-fat-calculator",
  },
  {
    slug: "lean-body-mass-calculator",
    category: "body-composition",
    title: "Lean Body Mass Calculator",
    description: "Use our free lean body mass calculator to find your fat-free mass from weight and height using the Boer, James, and Hume formulas.",
    path: "/body-composition/lean-body-mass-calculator",
  },
  {
    slug: "bmi-calculator",
    category: "body-composition",
    title: "BMI Calculator",
    description: "Use our free BMI calculator to calculate your Body Mass Index from weight and height with instant WHO health classification.",
    path: "/body-composition/bmi-calculator",
  },
  {
    slug: "ideal-weight-calculator",
    category: "body-composition",
    title: "Ideal Weight Calculator",
    description: "Use our free ideal weight calculator to find your healthy weight range using Devine, Hamwi, Robinson, and Miller formulas.",
    path: "/body-composition/ideal-weight-calculator",
  },
  {
    slug: "waist-to-height-ratio-calculator",
    category: "body-composition",
    title: "Waist-to-Height Ratio Calculator",
    description: "Use our free waist-to-height ratio calculator to measure cardiovascular health risk — a more accurate predictor than BMI alone.",
    path: "/body-composition/waist-to-height-ratio-calculator",
  },
  {
    slug: "waist-to-hip-ratio-calculator",
    category: "body-composition",
    title: "Waist-to-Hip Ratio Calculator",
    description: "Use our free waist to hip ratio calculator to measure your body shape and assess cardiovascular and metabolic health risk.",
    path: "/body-composition/waist-to-hip-ratio-calculator",
  },
  {
    slug: "body-measurement-calculator",
    category: "body-composition",
    title: "Body Measurement Calculator",
    description: "Estimate body composition from girth measurements using established formulas with our free body measurement calculator.",
    path: "/body-composition/body-measurement-calculator",
  },
  {
    slug: "body-recomposition-calculator",
    category: "body-composition",
    title: "Body Recomposition Calculator",
    description: "Use our free body recomposition calculator to project changes in fat mass and lean mass over time with a personalised plan.",
    path: "/body-composition/body-recomposition-calculator",
  },

  // ======================
  // ACTIVITY
  // ======================
  {
    slug: "steps-per-day-calculator",
    category: "activity",
    title: "Steps Per Day Calculator",
    description: "Use our free steps per day calculator to set a personalised daily step goal based on your activity level and health targets.",
    path: "/activity/steps-per-day-calculator",
  },
  {
    slug: "move-goal-calculator",
    category: "activity",
    title: "Move Goal Calculator",
    description: "Estimate a daily active calorie burn target based on your TDEE and activity level with our free move goal calculator.",
    path: "/activity/move-goal-calculator",
  },

  // ======================
  // STRENGTH
  // ======================
  {
    slug: "barbell-calculator",
    category: "strength",
    title: "Barbell Calculator",
    description: "Use our free barbell calculator to find the exact weight plates needed on each side of the bar for any target load.",
    path: "/strength/barbell-calculator",
  },
  {
    slug: "plate-weight-calculator",
    category: "strength",
    title: "Plate Weight Calculator",
    description: "Find the exact plate combination to load your barbell with our free plate weight calculator — supports all standard plate sizes.",
    path: "/strength/plate-weight-calculator",
  },
  {
    slug: "powerlifting-calculator",
    category: "strength",
    title: "Powerlifting Calculator",
    description: "Use our free powerlifting calculator to calculate your Wilks, DOTS, and IPF GL scores to compare strength across weight classes.",
    path: "/strength/powerlifting-calculator",
  },
  {
    slug: "1-rep-max-calculator",
    category: "strength",
    title: "1 Rep Max Calculator",
    description: "Use our free 1 rep max calculator to estimate your one-rep max using Epley, Brzycki, Lombardi, O'Conner, and Lander formulas.",
    path: "/strength/1-rep-max-calculator",
  },
  {
    slug: "training-volume-calculator",
    category: "strength",
    title: "Training Volume Calculator",
    description: "Use our free training volume calculator to measure total sets, reps, and tonnage for any strength workout or training block.",
    path: "/strength/training-volume-calculator",
  },
  {
    slug: "strength-ratio-calculator",
    category: "strength",
    title: "Strength Ratio Calculator",
    description: "Use our free strength ratio calculator to assess your push, pull, and leg strength ratios relative to your bodyweight.",
    path: "/strength/strength-ratio-calculator",
  },
  {
    slug: "rpe-calculator",
    category: "strength",
    title: "RPE Calculator",
    description: "Use our free RPE calculator to predict your working weight or rep count at any RPE value based on your training max.",
    path: "/strength/rpe-calculator",
  },

  // ======================
  // CALISTHENICS
  // ======================
  {
    slug: "push-up-calculator",
    category: "calisthenics",
    title: "Push-Up Calculator",
    description: "Use our free push-up calculator to calculate push-up volume, relative strength score, and weekly progression targets.",
    path: "/calisthenics/push-up-calculator",
  },
  {
    slug: "pull-up-calculator",
    category: "calisthenics",
    title: "Pull-Up Calculator",
    description: "Use our free pull-up calculator to calculate pull-up volume, weighted equivalents, and weekly progression milestones.",
    path: "/calisthenics/pull-up-calculator",
  },
  {
    slug: "home-workout-generator",
    category: "calisthenics",
    title: "Home Workout Generator",
    description: "Generate a structured bodyweight workout plan tailored to your goal and equipment with our free home workout generator.",
    path: "/calisthenics/home-workout-generator",
  },

  // ======================
  // NUTRITION
  // ======================
  {
    slug: "fat-intake-calculator",
    category: "nutrition",
    title: "Fat Intake Calculator",
    description: "Use our free fat intake calculator to find your optimal daily fat intake in grams based on your total calorie and macro targets.",
    path: "/nutrition/fat-intake-calculator",
  },
  {
    slug: "creatine-calculator",
    category: "nutrition",
    title: "Creatine Calculator",
    description: "Use our free creatine calculator to find your daily creatine maintenance dose and loading phase amount by bodyweight.",
    path: "/nutrition/creatine-calculator",
  },
  {
    slug: "protein-powder-calculator",
    category: "nutrition",
    title: "Protein Powder Calculator",
    description: "Use our free protein powder calculator to find how many scoops per day you need to hit your daily protein target.",
    path: "/nutrition/protein-powder-calculator",
  },
  {
    slug: "bulk-calculator",
    category: "nutrition",
    title: "Bulk Calculator",
    description: "Use our free bulk calculator to find your daily calorie and macro targets for a controlled bulk based on your TDEE and surplus.",
    path: "/nutrition/bulk-calculator",
  },
  {
    slug: "lean-bulk-calculator",
    category: "nutrition",
    title: "Lean Bulk Calculator",
    description: "Use our free lean bulk calculator to calculate calories for a lean bulk with a capped surplus to minimise fat gain.",
    path: "/nutrition/lean-bulk-calculator",
  },
  {
    slug: "intermittent-fasting-calculator",
    category: "nutrition",
    title: "Intermittent Fasting Calculator",
    description: "Use our free intermittent fasting calculator to find your eating and fasting windows for 16:8, 18:6, and other IF protocols.",
    path: "/nutrition/intermittent-fasting-calculator",
  },
  {
    slug: "tdee-calculator",
    category: "nutrition",
    title: "TDEE Calculator",
    description: "Use our free TDEE calculator to find your Total Daily Energy Expenditure, BMR, and daily calorie needs using Mifflin-St Jeor.",
    path: "/nutrition/tdee-calculator",
  },
  {
    slug: "starbucks-macro-calculator",
    category: "nutrition",
    title: "Starbucks Macro Calculator",
    description: "Look up calories, protein, carbs, and fat for any Starbucks drink or food item with our free Starbucks macro calculator.",
    path: "/nutrition/starbucks-macro-calculator",
  },
  {
    slug: "carnivore-macro-calculator",
    category: "nutrition",
    title: "Carnivore Macro Calculator",
    description: "Calculate your macro targets on a carnivore diet from your weight and goals with our free carnivore macro calculator.",
    path: "/nutrition/carnivore-macro-calculator",
  },
  {
    slug: "subway-macro-calculator",
    category: "nutrition",
    title: "Subway Macro Calculator",
    description: "Find the exact calories, protein, carbs, and fat in your custom Subway order with our free Subway macro calculator.",
    path: "/nutrition/subway-macro-calculator",
  },

  // ======================
  // PLANNERS
  // ======================
  {
    slug: "meal-plan-generator",
    category: "planners",
    title: "Meal Plan Generator",
    description: "Generate a structured daily meal plan tailored to your calorie and macro targets with our free meal plan generator.",
    path: "/planners/meal-plan-generator",
  },
  {
    slug: "workout-generator",
    category: "planners",
    title: "Workout Generator",
    description: "Generate a goal-based weekly workout plan based on your training level and equipment with our free workout generator.",
    path: "/planners/workout-generator",
  },

  // ======================
  // TRACKERS
  // ======================
  {
    slug: "weight-tracker",
    category: "trackers",
    title: "Weight Tracker",
    description: "Track your daily weight, view moving averages, and monitor body weight trends over time with our free weight tracker.",
    path: "/trackers/weight-tracker",
  },

  // ======================
  // EQUIPMENT
  // ======================
  {
    slug: "dumbbell-weight-calculator",
    category: "equipment",
    title: "Dumbbell Weight Calculator",
    description: "Calculate total volume lifted with dumbbells across sets and exercises with our free dumbbell weight calculator.",
    path: "/equipment/dumbbell-weight-calculator",
  },
];
