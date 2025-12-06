export interface CyclingPowerResult {
  power: number;
  rolling: number;
  aero: number;
}

export function cyclingPower(speedKmh: number, weightKg: number, gradePercent: number, crr = 0.005): CyclingPowerResult {
  const speedMps = speedKmh / 3.6;
  const theta = Math.atan(gradePercent / 100);
  const g = 9.8067;
  const rho = 1.226; // air density
  const cda = 0.3;

  const rolling = crr * weightKg * g * speedMps;
  const gravity = weightKg * g * Math.sin(theta) * speedMps;
  const aero = 0.5 * rho * cda * speedMps ** 3;
  const total = rolling + gravity + aero;

  return {
    power: parseFloat(total.toFixed(1)),
    rolling: parseFloat(rolling.toFixed(1)),
    aero: parseFloat(aero.toFixed(1)),
  };
}
