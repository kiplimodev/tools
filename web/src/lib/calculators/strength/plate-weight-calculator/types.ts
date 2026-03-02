export type Input = {
  targetPerSideKg: number;
  availablePlatesKg?: number[];
};

export type Output = {
  plates: number[];
  totalLoaded: number;
  missingWeight: number | null;
};
