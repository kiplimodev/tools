export interface RunningVo2Result {
  vo2max: number;
  speedKmh: number;
  category: string;
}

const categorize = (vo2: number): string => {
  if (vo2 >= 60) return "Excellent";
  if (vo2 >= 50) return "Very Good";
  if (vo2 >= 40) return "Good";
  if (vo2 >= 30) return "Average";
  return "Below Average";
};

export function estimateRunningVo2(distanceKm: number, timeMinutes: number): RunningVo2Result {
  const speedKmh = (distanceKm / timeMinutes) * 60;
  // Using a simplified VO2 estimate from running speed: VO2 ≈ (speed_m_per_min * 0.2) + 3.5
  const speedMetersPerMin = speedKmh * 1000 * (1 / 60);
  const vo2max = (speedMetersPerMin * 0.2 + 3.5) * 1.03; // small bump for race effort
  return {
    vo2max: parseFloat(vo2max.toFixed(1)),
    speedKmh: parseFloat(speedKmh.toFixed(2)),
    category: categorize(vo2max),
  };
}
