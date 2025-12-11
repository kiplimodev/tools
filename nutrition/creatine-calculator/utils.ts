import { CalculatorInput, CalculatorOutput } from "./types";

const DEFAULT_LOADING_DAYS = 5;
const DEFAULT_SCOOP_SIZE = 5;
const SATURATION_DAYS_NO_LOADING = 28;

function roundToDecimal(value: number, decimals = 1): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function validateInputs(input: CalculatorInput): Required<Pick<CalculatorInput, "weightKg" | "useLoadingPhase" | "loadingDays" | "scoopsPerServing">> {
  const weightKg = input.weightKg;
  if (!(weightKg > 0)) {
    throw new Error("weightKg must be greater than 0");
  }

  const useLoadingPhase = input.useLoadingPhase ?? false;
  const loadingDays = input.loadingDays ?? DEFAULT_LOADING_DAYS;
  if (!(loadingDays > 0)) {
    throw new Error("loadingDays must be greater than 0");
  }

  const scoopsPerServing = input.scoopsPerServing ?? DEFAULT_SCOOP_SIZE;
  if (!(scoopsPerServing > 0)) {
    throw new Error("scoopsPerServing must be greater than 0");
  }

  return { weightKg, useLoadingPhase, loadingDays, scoopsPerServing };
}

function calculateMaintenanceDose(weightKg: number): number {
  const maintenance = Math.max(weightKg * 0.03, 3);
  return Math.min(maintenance, 10);
}

function calculateLoadingDose(weightKg: number): number {
  const loading = Math.max(weightKg * 0.3, 15);
  return loading;
}

function calculateTotalCreatine(
  maintenance: number,
  useLoading: boolean,
  loadingDose: number,
  loadingDays: number
) {
  const weeklyMaintenance = maintenance * 7;
  if (!useLoading) {
    return {
      totalPerWeek: weeklyMaintenance,
      totalForLoading: undefined,
    };
  }

  const totalForLoading = loadingDose * loadingDays;
  return {
    totalPerWeek: weeklyMaintenance + totalForLoading,
    totalForLoading,
  };
}

function calculateSaturationTime(useLoading: boolean, loadingDays: number): number {
  return useLoading ? loadingDays : SATURATION_DAYS_NO_LOADING;
}

function calculateServingsPerDay(maintenance: number, scoopSize: number): number {
  return maintenance / scoopSize;
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  const { weightKg, useLoadingPhase, loadingDays, scoopsPerServing } = validateInputs(input);

  const maintenanceDose = calculateMaintenanceDose(weightKg);
  const loadingDose = useLoadingPhase ? calculateLoadingDose(weightKg) : undefined;

  const { totalPerWeek, totalForLoading } = calculateTotalCreatine(
    maintenanceDose,
    useLoadingPhase,
    loadingDose ?? 0,
    loadingDays
  );

  const servingsPerDay = calculateServingsPerDay(maintenanceDose, scoopsPerServing);
  const estimatedSaturationDays = calculateSaturationTime(useLoadingPhase, loadingDays);

  return {
    loadingDosePerDay: loadingDose !== undefined ? roundToDecimal(loadingDose) : undefined,
    maintenanceDosePerDay: roundToDecimal(maintenanceDose),
    totalCreatineForLoading: totalForLoading !== undefined ? roundToDecimal(totalForLoading) : undefined,
    totalCreatinePerWeek: roundToDecimal(totalPerWeek),
    servingsPerDay: roundToDecimal(servingsPerDay),
    estimatedSaturationDays: roundToDecimal(estimatedSaturationDays),
  };
}
