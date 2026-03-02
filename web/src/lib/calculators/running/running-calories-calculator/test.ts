import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("running-calories-calculator", () => {
  it("returns calories and MET for valid input", () => {
    const result = calculator({ distanceKm: 5, timeMinutes: 30, weightKg: 70 });
    expect(result).not.toBeNull();
    expect(result!.calories).toBeGreaterThan(0);
    expect(result!.met).toBeGreaterThan(0);
  });

  it("returns null for zero weight", () => {
    expect(calculator({ distanceKm: 5, timeMinutes: 30, weightKg: 0 })).toBeNull();
  });
});
