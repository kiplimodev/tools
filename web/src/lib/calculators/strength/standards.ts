export interface StrengthStandardResult {
  ratio: number;
  category: string;
}

const thresholds: Record<string, number[]> = {
  bench: [0.75, 1.0, 1.25, 1.5],
  squat: [1.0, 1.25, 1.75, 2.0],
  deadlift: [1.25, 1.75, 2.25, 2.5],
};

const labels = ["Beginner", "Novice", "Intermediate", "Advanced", "Elite"];

export function strengthStandard(bodyweight: number, lift: number, movement: keyof typeof thresholds): StrengthStandardResult {
  const ratio = lift / bodyweight;
  const bars = thresholds[movement];
  let category = labels[0];
  if (ratio >= bars[3]) category = labels[4];
  else if (ratio >= bars[2]) category = labels[3];
  else if (ratio >= bars[1]) category = labels[2];
  else if (ratio >= bars[0]) category = labels[1];

  return {
    ratio: parseFloat(ratio.toFixed(2)),
    category,
  };
}
