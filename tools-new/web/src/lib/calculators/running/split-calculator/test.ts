import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("split-calculator", () => {
  it("calculates correct split time", () => {
    const result = calculator({
      totalDistanceMeters: 5000,
      totalTimeSeconds: 1500,
      splitDistanceMeters: 1000,
    });

    expect(result).toBe(300);
  });

  it("returns null for invalid input", () => {
    expect(
      calculator({
        totalDistanceMeters: 0,
        totalTimeSeconds: 100,
        splitDistanceMeters: 100,
      })
    ).toBeNull();
  });
});
