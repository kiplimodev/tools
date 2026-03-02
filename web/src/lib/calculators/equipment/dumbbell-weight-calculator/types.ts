export type Input = {
  targetWeightKg: number;
  availableWeightsKg?: number[];
};

export type Output = {
  selectedWeight: number;
  missingWeight: number | null;
};
