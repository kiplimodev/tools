export interface RunningCaloriesResult {
  calories: number;
  met: number;
}

const runningMetFromPace = (speedKmh: number): number => {
  if (speedKmh < 8) return 7.0;
  if (speedKmh < 10) return 9.8;
  if (speedKmh < 11) return 10.5;
  if (speedKmh < 12) return 11.0;
  if (speedKmh < 13) return 11.5;
  if (speedKmh < 14) return 11.8;
  return 12.3;
};

export function estimateRunningCalories(distanceKm: number, timeMinutes: number, weightKg: number): RunningCaloriesResult {
  const speedKmh = (distanceKm / timeMinutes) * 60;
  const met = runningMetFromPace(speedKmh);
  const calories = (met * 3.5 * weightKg * timeMinutes) / 200;
  return {
    calories: Math.round(calories),
    met,
  };
}
