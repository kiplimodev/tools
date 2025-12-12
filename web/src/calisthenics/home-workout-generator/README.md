# Home Workout Generator

## Description
Create a time-efficient home workout plan that adapts to difficulty, available equipment, and preferred focus area (full body, upper, lower, or core).

## Inputs
- `difficulty`: "beginner" | "novice" | "intermediate" | "advanced" | "elite"
- `equipment` (optional): availability of `dumbbells`, `pullupBar`, `resistanceBands`, `chair`
- `durationMinutes` (optional): target session length, defaults to 20 minutes
- `focus` (optional): "full-body" | "upper" | "lower" | "core"

## Outputs
- `workoutName`: descriptive workout title
- `totalDuration`: estimated duration in minutes
- `exercises`: list of exercises with `sets`, `reps`, and `restSeconds`

## Difficulty Scaling
| Difficulty | Sets | Reps     | Rest (s) |
| --- | --- | --- | --- |
| beginner | 2 | 8–10 | 60 |
| novice | 3 | 10–12 | 60 |
| intermediate | 3 | 12–15 | 45 |
| advanced | 4 | 12–20 | 45 |
| elite | 5 | 15–25 | 30 |

## Logic Overview
1. Validate inputs and set defaults (focus defaults to full-body, duration defaults to 20 minutes).
2. Build an exercise pool from bodyweight movements and add equipment variations when available (dumbbells, bands, pull-up bar, chair).
3. Select a balanced set of exercises by focus (mix of full-body, upper, lower, and core), then scale sets/reps/rest based on difficulty.
4. Estimate total duration assuming ~40 seconds per set plus programmed rest; trim the exercise list if it exceeds the target duration.
5. Generate a descriptive workout name reflecting difficulty, focus, and equipment.

## Example
**Input**
```
difficulty: "intermediate"
equipment: { dumbbells: true }
focus: "full-body"
durationMinutes: 20
```

**Output (sample)**
```
Workout: Intermediate Full-Body Dumbbell Workout
1. Push-ups — 3 × 12–15 (rest 45s)
2. DB goblet squat — 3 × 12–15 (rest 45s)
3. Burpees — 3 × 12–15 (rest 45s)
4. Plank — 3 × 12–15 (rest 45s)
Total duration ≈ 20 minutes
```
