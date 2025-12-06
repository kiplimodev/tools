export interface WeightedRatioResult {
  ratio: number;
  category: string;
}

export function weightedCalisthenicsRatio(bodyweight: number, addedWeight: number): WeightedRatioResult {
  const total = bodyweight + addedWeight;
  const ratio = total / bodyweight;
  let category = "Baseline";
  if (ratio >= 1.8) category = "Elite";
  else if (ratio >= 1.6) category = "Advanced";
  else if (ratio >= 1.4) category = "Strong";
  else if (ratio >= 1.2) category = "Developing";

  return {
    ratio: parseFloat(ratio.toFixed(2)),
    category,
  };
}
