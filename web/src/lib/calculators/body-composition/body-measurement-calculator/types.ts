export type Input = {
  sex: "male" | "female";
  weightKg: number;
  waistCm: number;
  hipCm?: number; // required for female
  forearmCm?: number; // female only (extended YMCA)
  wristCm?: number; // female only (extended YMCA)
};

export type Output = {
  bodyFatPercent: number;
  fatMassKg: number;
  leanMassKg: number;
};
