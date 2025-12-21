// src/lib/composition/body-composition/waist-to-hip.ts
import { calculator } from "@/lib/calculators/body-composition/waist-to-hip-ratio-calculator";

export type WaistToHipResult = {
  ratio: number;
};

/**
 * Composition adapter for waist-to-hip ratio.
 */
export function getWaistToHipRatio(input: {
  waistCm: number;
  hipCm: number;
}): WaistToHipResult | null {
  const result = calculator(input);

  if (result === null) return null;

  return {
    ratio: result,
  };
}
