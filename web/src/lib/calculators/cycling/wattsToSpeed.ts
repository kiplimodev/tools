import { cyclingPower } from "./power";

export interface CyclingSpeedResult {
  speedKmh: number;
}

export function wattsToSpeed(targetWatts: number, weightKg: number, gradePercent: number, crr = 0.005): CyclingSpeedResult {
  let speed = 10;
  for (let i = 0; i < 20; i += 1) {
    const { power } = cyclingPower(speed, weightKg, gradePercent, crr);
    const error = targetWatts - power;
    if (Math.abs(error) < 0.5) break;
    speed += error / 50;
    if (speed < 0) speed = 0;
  }
  return { speedKmh: parseFloat(speed.toFixed(2)) };
}
