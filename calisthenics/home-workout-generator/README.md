# Home Workout Generator

A lightweight TypeScript utility for assembling time-bound home workouts based on difficulty, equipment on hand, and target focus. It selects available moves, scales volume for the requested level, and trims or expands to fit the desired session length.

## Supported inputs
- Difficulty: `beginner`, `novice`, `intermediate`, `advanced`, `elite`
- Focus: `full-body`, `upper`, `lower`, `core` (optional; defaults to full-body)
- Duration: optional minutes target (defaults to ~20 minutes)
- Equipment flags: dumbbells, pull-up bar, resistance bands, chair

## How it works
1. Filter exercises by available equipment (bodyweight defaults plus dumbbell/band/bar options).
2. Select a balanced set per focus.
3. Apply difficulty scaling for sets/reps/rest.
4. Adjust the exercise list to meet the target duration using a simple time estimate.
5. Return a named workout with estimated total duration.

Difficulty scaling reference:
- beginner: 2 sets, 8–10 reps, 60s rest
- novice: 3 sets, 10–12 reps, 60s rest
- intermediate: 3 sets, 12–15 reps, 45s rest
- advanced: 4 sets, 12–20 reps, 45s rest
- elite: 5 sets, 15–25 reps, 30s rest

## Example output
Workout: Intermediate Full Body No-Equipment Workout

1. Push-ups — 3 × 12–15 (rest 45s)
2. Squats — 3 × 12–15 (rest 45s)
3. Burpees — 3 × 12–15 (rest 45s)
4. Plank — 3 × 12–15 (rest 45s)

Total duration ≈ 22 minutes
