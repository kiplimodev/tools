export interface PowerliftingScoreResult {
  wilks: number;
  dots: number;
}

const wilksCoefficients = {
  male: [-216.0475144, 16.2606339, -0.002388645, -0.00113732, 7.01863e-06, -1.291e-08],
  female: [594.31747775582, -27.23842536447, 0.82112226871, -0.00930733913, 4.731582e-05, -9.054e-08],
};

export function calculateWilksDots(bodyweightKg: number, totalKg: number, sex: "male" | "female"): PowerliftingScoreResult {
  const coeffs = wilksCoefficients[sex];
  const bodyweight = bodyweightKg;
  const wilksDenominator =
    coeffs[0] + coeffs[1] * bodyweight + coeffs[2] * bodyweight ** 2 + coeffs[3] * bodyweight ** 3 + coeffs[4] * bodyweight ** 4 + coeffs[5] * bodyweight ** 5;
  const wilks = (totalKg * 600) / wilksDenominator;

  // DOTS calculation
  const a = sex === "male" ? -0.000001093 : -0.0000010706;
  const b = sex === "male" ? 0.0007391293 : 0.0005158568;
  const c = sex === "male" ? -0.1918759221 : -0.1542368013;
  const d = sex === "male" ? 24.0900756 : 13.6175032;
  const denominator = a * bodyweight ** 2 + b * bodyweight + c;
  const dots = (totalKg * 500) / (Math.exp(denominator) + d);

  return {
    wilks: parseFloat(wilks.toFixed(1)),
    dots: parseFloat(dots.toFixed(1)),
  };
}
