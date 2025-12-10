export interface CalculatorInput {
  weightKg: number;
  useLoadingPhase?: boolean;
  loadingDays?: number;
  scoopsPerServing?: number;
}

export interface CalculatorOutput {
  loadingDosePerDay?: number;
  maintenanceDosePerDay: number;
  totalCreatineForLoading?: number;
  totalCreatinePerWeek: number;
  servingsPerDay: number;
  estimatedSaturationDays: number;
}
