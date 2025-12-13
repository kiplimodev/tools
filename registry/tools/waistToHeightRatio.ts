export function calculateWaistToHeightRatio({
  waistCm,
  heightCm,
}: {
  waistCm: number;
  heightCm: number;
}) {
  const ratio = waistCm / heightCm;

  let category = "Healthy";

  if (ratio < 0.4) category = "Underweight";
  else if (ratio < 0.5) category = "Healthy";
  else if (ratio < 0.6) category = "Overweight";
  else category = "Obese";

  return {
    ratio: Number(ratio.toFixed(2)),
    category,
  };
}
