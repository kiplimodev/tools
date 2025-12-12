# Workout Generator

## Description
Creates a weekly workout program tailored to goal, experience, available equipment, and desired session length. It assembles day-by-day sessions with focus splits, exercise selection, and goal-appropriate set/rep schemes.

## Inputs
- `goal`: "strength" | "hypertrophy" | "endurance" | "fat_loss" | "general"
- `experience`: "beginner" | "intermediate" | "advanced"
- `equipment` (optional, default `"bodyweight"`): "bodyweight" | "dumbbells" | "gym"
- `daysPerWeek` (optional, default `3`)
- `sessionLength` (optional, default `"medium"`): "short" | "medium" | "long"

## Outputs
- `program`: Array of training days with:
  - `day`: day number
  - `focus`: session split descriptor (e.g., Full Body, Push, Pull, Legs)
  - `exercises`: list of `{ name, sets, reps, equipment }`

## Exercise Lists (by equipment)
- **Bodyweight:** pushups, pullups, squats, lunges, glute_bridge, plank, burpees, mountain_climbers, dips
- **Dumbbells:** dumbbell_press, dumbbell_row, dumbbell_squat, dumbbell_lunge, romanian_deadlift, shoulder_press, biceps_curl, triceps_extension
- **Gym:** bench_press, barbell_row, lat_pulldown, deadlift, squat, leg_press, shoulder_press_machine, cable_row, tricep_pushdown, leg_curl

## Splits by Days/Week
- 3 days: Full Body A / Full Body B / Full Body C
- 4 days: Upper / Lower / Upper / Lower
- 5 days: Push / Pull / Legs / Upper / Full Body
- 6 days: Push / Pull / Legs / Push / Pull / Legs (repeat pattern if >6 days)

## Session Length → Exercise Count
- short: 4
- medium: 6
- long: 8

## Goal Templates
- **Strength:** 4–6 sets, reps 3–6
- **Hypertrophy:** 3–5 sets, reps 8–12
- **Endurance:** 2–4 sets, reps 15–25
- **Fat loss:** 3–5 sets, reps 8–15 with conditioning intervals (30–60s)
- **General:** 3–4 sets, reps 8–12

## Example
Input:
```
goal: "hypertrophy"
experience: "intermediate"
equipment: "gym"
daysPerWeek: 5
sessionLength: "medium"
```

Output (excerpt):
```
Day 1 – Push
- bench_press 4 x 8-12
- shoulder_press_machine 4 x 8-12
- tricep_pushdown 4 x 8-12
- leg_press 4 x 8-12
- cable_row 4 x 8-12
- squat 4 x 8-12

Day 2 – Pull
- barbell_row 4 x 8-12
- lat_pulldown 4 x 8-12
- deadlift 4 x 8-12
- leg_curl 4 x 8-12
- shoulder_press_machine 4 x 8-12
- tricep_pushdown 4 x 8-12
```

Sessions auto-scale exercise count by session length and repeat split patterns for higher weekly frequency.
