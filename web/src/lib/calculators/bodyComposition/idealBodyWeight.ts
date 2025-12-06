export interface IdealBodyWeightResult {
  devine: number;
  robinson: number;
}

export function idealBodyWeight(sex: "male" | "female", heightCm: number): IdealBodyWeightResult {
  const heightInches = heightCm / 2.54;
  const baseInches = Math.max(0, heightInches - 60);
  const devine = (sex === "male" ? 50 : 45.5) + 2.3 * baseInches;
  const robinson = (sex === "male" ? 52 : 49) + 1.9 * baseInches;
  return {
    devine: parseFloat(devine.toFixed(1)),
    robinson: parseFloat(robinson.toFixed(1)),
  };
}
