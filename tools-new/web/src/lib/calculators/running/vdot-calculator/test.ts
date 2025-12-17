// src/lib/calculators/running/vdot-calculator/test.ts
import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("vdot calculator", () => {
  it("returns a valid VDOT for a 5k in 20 minutes", () => {
    const result = calculator({
      distanceMeters: 5000,
      timeSeconds: 1200,
    });

    expect(result).not.toBeNull();
    expect(result).toBeGreaterThan(30);
    expect(result).toBeLessThan(80);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      distanceMeters: 0,
      timeSeconds: 1200,
    });

    expect(result).toBeNull();
  });
});
