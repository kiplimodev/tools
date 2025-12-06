export interface Percent1RMResult {
  targetWeight: number;
  estimatedReps: number;
}

export function percentOfOneRm(oneRm: number, percentage: number): Percent1RMResult {
  const targetWeight = (oneRm * percentage) / 100;
  // Epley-derived rep estimate
  const estimatedReps = Math.max(1, Math.round(((percentage / 100) * 30) / (1 - percentage / 100)));
  return {
    targetWeight: parseFloat(targetWeight.toFixed(1)),
    estimatedReps,
  };
}
