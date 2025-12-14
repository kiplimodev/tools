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

export function estimateRunningVo2(
  distanceKm: number,
  timeMinutes: number
): RunningVo2Result {
  const speedKmh = (distanceKm / timeMinutes) * 60;
  const speedMetersPerMin = (speedKmh * 1000) / 60;
  const vo2max = (speedMetersPerMin * 0.2 + 3.5) * 1.03;

  return {
    vo2max: Number(vo2max.toFixed(1)),
    speedKmh: Number(speedKmh.toFixed(2)),
    category: categorize(vo2max),
  };
}
