export interface RaceTimeResult {
  predictedMinutes: number;
  formatted: string;
  pacePerKm: string;
}

const formatTime = (minutes: number): string => {
  const hrs = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);
  const secs = Math.round((minutes - Math.floor(minutes)) * 60);
  const padded = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  return hrs > 0 ? `${hrs}:${padded}` : padded;
};

const formatPace = (minutesPerKm: number): string => {
  const whole = Math.floor(minutesPerKm);
  const seconds = Math.round((minutesPerKm - whole) * 60);
  return `${whole}:${seconds.toString().padStart(2, "0")} min/km`;
};

export function predictRaceTime(distanceKm: number, timeMinutes: number, targetDistanceKm: number): RaceTimeResult {
  const exponent = 1.06; // Riegel formula exponent for endurance events
  const predictedMinutes = timeMinutes * (targetDistanceKm / distanceKm) ** exponent;
  const pacePerKm = predictedMinutes / targetDistanceKm;
  return {
    predictedMinutes,
    formatted: formatTime(predictedMinutes),
    pacePerKm: formatPace(pacePerKm),
  };
}
