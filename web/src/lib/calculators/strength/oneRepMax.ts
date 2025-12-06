export interface OneRepMaxResult {
  epley: number;
  brzycki: number;
  lander: number;
}

export function oneRepMax(weight: number, reps: number): OneRepMaxResult {
  const epley = weight * (1 + reps / 30);
  const brzycki = weight * (36 / (37 - reps));
  const lander = (100 * weight) / (101.3 - 2.67123 * reps);

  return {
    epley: parseFloat(epley.toFixed(1)),
    brzycki: parseFloat(brzycki.toFixed(1)),
    lander: parseFloat(lander.toFixed(1)),
  };
}
