export type Input = {
  weight: number; // kg
  protocol: "maintenance" | "loading";
};

export type Output = {
  dailyDose: number;
  loadingDose: number | null;
};
