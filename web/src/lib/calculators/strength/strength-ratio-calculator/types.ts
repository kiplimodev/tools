export type Input = {
  bodyWeightKg: number;
  benchKg: number;
  squatKg: number;
  deadliftKg: number;
  ohpKg?: number;
  rowKg?: number;
};

export type Output = {
  benchToBody: number;
  squatToBody: number;
  deadliftToBody: number;
  pushPullRatio: number | null;
  squatDeadliftRatio: number;
  upperLowerBalance: string;
  benchPercent: number;
  squatPercent: number;
  deadliftPercent: number;
};
