import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("vo2max-calculator", () => {
  it("returns VO2 max estimate for valid input", () => {
    const result = calculator({ distanceKm: 5, timeMinutes: 25 });
    expect(result).not.toBeNull();
    expect(typeof result!.vo2max).toBe("number");
    expect(result!.vo2max).toBeGreaterThan(0);
    expect(typeof result!.category).toBe("string");
  });

  it("returns null for zero distance", () => {
    expect(calculator({ distanceKm: 0, timeMinutes: 25 })).toBeNull();
  });
});
