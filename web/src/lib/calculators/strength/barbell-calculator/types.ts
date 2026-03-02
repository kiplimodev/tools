export type Input = {
  barWeightKg: number;
  targetWeightKg: number;
  availablePlatesKg?: number[];
};

export type Output = {
  perSideWeight: number;
  platesPerSide: number[];
  missingWeight: number | null;
};
