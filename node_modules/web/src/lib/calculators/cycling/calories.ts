export interface CyclingCaloriesResult {
  calories: number;
  met: number;
}

const metFromSpeed = (speedKmh: number): number => {
  if (speedKmh < 16) return 6.8;
  if (speedKmh < 19) return 8.0;
  if (speedKmh < 22) return 10.0;
  if (speedKmh < 25) return 12.0;
  return 15.8;
};

export function cyclingCalories(speedKmh: number, timeMinutes: number, weightKg: number): CyclingCaloriesResult {
  const met = metFromSpeed(speedKmh);
  const calories = (met * 3.5 * weightKg * timeMinutes) / 200;
  return {
    calories: Math.round(calories),
    met,
  };
}
