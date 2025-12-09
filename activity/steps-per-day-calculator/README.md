# Steps Per Day Calculator

## Description
Estimate daily step targets based on health, weight-loss, or fitness goals, optionally classifying current activity level, and estimating calories for the recommendation when weight is provided.

## Inputs
- `age`: Age of the user in years (required)
- `goal`: One of `"health"`, `"weight-loss"`, or `"fitness"`
- `weightKg`: Optional body weight in kilograms (enables calorie estimate)
- `currentSteps`: Optional current average daily steps

## Outputs
- `recommendedSteps`: Target steps per day for the selected goal
- `category`: Activity category derived from `currentSteps` (or `"unknown"` if not provided)
- `estimatedCalories`: Optional estimated calories for the recommended steps when weight is provided
- `deltaFromCurrent`: Optional difference between recommended and current steps

## Step Guidelines
- Health goal: 7,500 steps/day
- Weight loss goal: 11,000 steps/day
- Fitness goal: 13,500 steps/day

## Activity Categories (based on current steps)
- `< 5,000`: sedentary
- `5,000–7,499`: lightly active
- `7,500–9,999`: active
- `>= 10,000`: highly active

## Formula
- `recommendedSteps` determined by goal midpoint
- `kcalPerStep = weightKg * 0.0005`
- `estimatedCalories = recommendedSteps * kcalPerStep` (rounded to nearest whole number)
- `deltaFromCurrent = recommendedSteps - currentSteps`

## Example
```
age: 30
goal: "weight-loss"
weightKg: 80
currentSteps: 6000

recommendedSteps = 11000
category = "lightly active"
estimatedCalories = 440
deltaFromCurrent = 5000
```
