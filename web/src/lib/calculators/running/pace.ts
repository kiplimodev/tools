// src/lib/calculators/running/pace.ts

export interface PaceResult {
  pacePerKm: string;
  pacePerMile: string;
  speedKmh: number;
  speedMph: number;
}

export function calculateRunningPace(distanceKm: number, timeMinutes: number): PaceResult {
  const paceMinutesPerKm = timeMinutes / distanceKm;
  const pacePerKm = formatPace(paceMinutesPerKm);

  const paceMinutesPerMile = timeMinutes / (distanceKm * 0.621371);
  const pacePerMile = formatPace(paceMinutesPerMile);

  const speedKmh = (distanceKm / timeMinutes) * 60;
  const speedMph = speedKmh * 0.621371;

  return {
    pacePerKm,
    pacePerMile,
    speedKmh: parseFloat(speedKmh.toFixed(2)),
    speedMph: parseFloat(speedMph.toFixed(2)),
  };
}

function formatPace(minutes: number): string {
  const whole = Math.floor(minutes);
  const seconds = Math.round((minutes - whole) * 60);
  return `${whole}:${seconds.toString().padStart(2, "0")} min`;
}
