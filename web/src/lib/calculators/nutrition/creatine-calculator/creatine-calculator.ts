export type CreatineProtocol = "maintenance" | "loading";

export interface CreatineInput {
  weight: number;
  protocol: CreatineProtocol;
}

export interface CreatineResult {
  dailyDose: number;
  loadingDose?: number;
}

export function calculateCreatine(
  input: CreatineInput
): CreatineResult | null {
  if (input.weight <= 0) return null;

  const dailyDose = Math.round(input.weight * 0.03);

  if (input.protocol === "loading") {
    return {
      dailyDose,
      loadingDose: Math.round(input.weight * 0.3),
    };
  }

  return { dailyDose };
}
