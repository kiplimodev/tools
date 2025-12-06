export interface LeanBodyMassResult {
  leanMass: number;
}

export function leanBodyMass(sex: "male" | "female", weightKg: number, heightCm: number): LeanBodyMassResult {
  const leanMass =
    sex === "male"
      ? 0.407 * weightKg + 0.267 * heightCm - 19.2
      : 0.252 * weightKg + 0.473 * heightCm - 48.3;
  return { leanMass: parseFloat(leanMass.toFixed(1)) };
}
