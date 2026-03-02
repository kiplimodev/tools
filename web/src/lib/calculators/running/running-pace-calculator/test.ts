import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("running-pace-calculator", () => {
  it("returns seconds per km for valid input", () => {
    // 10km in 3000 seconds (50 min) = 300 s/km
    const result = calculator({ distance: 10, distanceUnit: "km", timeSeconds: 3000 });
    expect(result).toBe(300);
  });

  it("converts miles to km correctly", () => {
    // 1 mile in 600 seconds → 1.60934 km → ~372.8 s/km
    const result = calculator({ distance: 1, distanceUnit: "mi", timeSeconds: 600 });
    expect(result).not.toBeNull();
    expect(result!).toBeCloseTo(372.8, 0);
  });

  it("returns null for zero distance", () => {
    const result = calculator({ distance: 0, distanceUnit: "km", timeSeconds: 600 });
    expect(result).toBeNull();
  });

  it("returns null for zero time", () => {
    const result = calculator({ distance: 10, distanceUnit: "km", timeSeconds: 0 });
    expect(result).toBeNull();
  });
});
