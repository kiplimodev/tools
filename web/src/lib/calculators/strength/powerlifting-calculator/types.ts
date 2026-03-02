export type Input = {
  gender: "male" | "female";
  bodyWeightKg: number;
  squatKg: number;
  benchKg: number;
  deadliftKg: number;
};

export type Output = {
  totalKg: number;
  dots: number;
  wilks: number;
  ipfGL: number;
};
