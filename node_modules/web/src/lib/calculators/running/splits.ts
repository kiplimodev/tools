export interface SplitResult {
  totalMinutes: number;
  formatted: string;
  splits: string[];
}

const formatTime = (minutes: number): string => {
  const hrs = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);
  const secs = Math.round((minutes - Math.floor(minutes)) * 60);
  const padded = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  return hrs > 0 ? `${hrs}:${padded}` : padded;
};

export function planRunSplits(distanceKm: number, paceMinutesPerKm: number): SplitResult {
  const splits: string[] = [];
  for (let km = 1; km <= Math.ceil(distanceKm); km += 1) {
    const splitTime = paceMinutesPerKm * km;
    splits.push(`${km} km → ${formatTime(splitTime)}`);
  }
  const totalMinutes = distanceKm * paceMinutesPerKm;
  return {
    totalMinutes,
    formatted: formatTime(totalMinutes),
    splits,
  };
}
