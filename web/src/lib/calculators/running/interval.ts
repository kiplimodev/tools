export interface IntervalResult {
  totalMinutes: number;
  intervals: string[];
}

export function calculateIntervals(
  workMinutes: number,
  restMinutes: number,
  repeats: number
): IntervalResult {
  const intervals: string[] = [];

  for (let i = 1; i <= repeats; i++) {
    intervals.push(
      `Interval ${i}: ${workMinutes} min work / ${restMinutes} min rest`
    );
  }

  const totalMinutes = repeats * (workMinutes + restMinutes);

  return {
    totalMinutes,
    intervals,
  };
}
