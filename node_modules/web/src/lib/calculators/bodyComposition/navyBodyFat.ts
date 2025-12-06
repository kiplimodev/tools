export interface NavyBodyFatResult {
  bodyFatPercent: number;
}

export function navyBodyFat(
  sex: "male" | "female",
  waistCm: number,
  neckCm: number,
  heightCm: number,
  hipCm?: number,
): NavyBodyFatResult {
  let bodyFat = 0;
  if (sex === "male") {
    bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) - 450;
  } else {
    const hip = hipCm ?? 0;
    bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waistCm + hip - neckCm) + 0.221 * Math.log10(heightCm)) - 450;
  }
  return { bodyFatPercent: parseFloat(bodyFat.toFixed(1)) };
}
