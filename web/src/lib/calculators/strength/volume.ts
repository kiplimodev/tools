export interface WorkoutVolumeResult {
  totalVolume: number;
  perSetVolume: number;
}

export function workoutVolume(weight: number, reps: number, sets: number): WorkoutVolumeResult {
  const perSetVolume = weight * reps;
  const totalVolume = perSetVolume * sets;
  return {
    totalVolume,
    perSetVolume,
  };
}
