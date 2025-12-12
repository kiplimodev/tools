# Training Volume Calculator

## Description
Calculate total training volume for either a single exercise or a session with multiple exercises. Supports per-set volume for single exercises and aggregated totals for multi-exercise workouts.

## Inputs
### Single Exercise Mode
- `sets`: number of sets performed (>= 1)
- `reps`: repetitions per set (>= 1)
- `weightKg`: load used per rep in kilograms (>= 0)

### Multiple Exercises Mode
- `exercises`: array of exercises with fields:
  - `name`: exercise name (non-empty string)
  - `sets`: sets performed (>= 1)
  - `reps`: repetitions per set (>= 1)
  - `weightKg`: load per rep in kilograms (>= 0)

> Exactly one mode should be used; providing both single and multiple exercise data will throw an error.

## Outputs
- **Single exercise**
  - `totalVolume`: total load moved (sets × reps × weight)
  - `volumePerSet`: per-set volume (reps × weight)
- **Multiple exercises**
  - `totalVolume`: sum of each exercise volume
  - `exerciseVolumes`: list of `{ name, volume }` per exercise

All volume values are rounded to the nearest whole number.

## Formulas
### Single Exercise
- `totalVolume = sets × reps × weightKg`
- `volumePerSet = reps × weightKg`

### Multiple Exercises
- For each exercise: `volume = sets × reps × weightKg`
- `totalVolume = Σ volume`

## Examples
### Single Exercise
- 5 sets × 10 reps × 60 kg
- `totalVolume = 5 × 10 × 60 = 3000 kg`
- `volumePerSet = 10 × 60 = 600 kg`

### Multiple Exercises
- Bench: 5 × 5 × 100 = 2500 kg
- Row: 4 × 10 × 60 = 2400 kg
- Squat: 5 × 5 × 140 = 3500 kg
- `totalVolume = 2500 + 2400 + 3500 = 8400 kg`
