import type { Input, Output } from "./types";

function round2(v: number): number {
  return Math.round(v * 100) / 100;
}

function dots(total: number, w: number, gender: "male" | "female"): number {
  const c = gender === "male"
    ? { a: -0.000001093, b: 0.0007391293, c: -0.1918759221, d: 24.0900756, e: -307.75076, f: 2880 }
    : { a: -0.0000010706, b: 0.0005158568, c: -0.1126655495, d: 13.6175032, e: -57.96288, f: 320 };
  const d = c.a * w ** 5 + c.b * w ** 4 + c.c * w ** 3 + c.d * w ** 2 + c.e * w + c.f;
  return (total * 500) / d;
}

function wilks(total: number, w: number, gender: "male" | "female"): number {
  const c = gender === "male"
    ? { a: -216.0475144, b: 16.2606339, c: -0.002388645, d: -0.00113732, e: 0.00000701863, f: -0.00000001291 }
    : { a: 594.31747775582, b: -27.23842536447, c: 0.82112226871, d: -0.00930733913, e: 0.00004731582, f: -0.00000009054 };
  const d = c.a + c.b * w + c.c * w ** 2 + c.d * w ** 3 + c.e * w ** 4 + c.f * w ** 5;
  return (total * 500) / d;
}

function ipfGL(total: number, w: number, gender: "male" | "female"): number {
  const c = gender === "male"
    ? { a: 1199.72839, b: 1025.21504, c: 0.00921 }
    : { a: 610.32796, b: 1045.59282, c: 0.03048 };
  return (total * 100) / (c.a - c.b * Math.exp(-c.c * w));
}

export function calculator(input: Input): Output | null {
  const { gender, bodyWeightKg, squatKg, benchKg, deadliftKg } = input;
  if (bodyWeightKg <= 0) return null;
  if (squatKg < 0 || benchKg < 0 || deadliftKg < 0) return null;

  const total = squatKg + benchKg + deadliftKg;
  return {
    totalKg: round2(total),
    dots: round2(dots(total, bodyWeightKg, gender)),
    wilks: round2(wilks(total, bodyWeightKg, gender)),
    ipfGL: round2(ipfGL(total, bodyWeightKg, gender)),
  };
}
