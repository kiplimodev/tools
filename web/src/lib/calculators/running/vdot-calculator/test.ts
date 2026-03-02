import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("vdot-calculator", () => {
  it("returns VDOT and predicted times for valid input", () => {
    const result = calculator({ distanceKm: 10, timeMinutes: 45 });
    expect(result).not.toBeNull();
    expect(typeof result!.vdot).toBe("number");
    expect(result!.vdot).toBeGreaterThan(0);
    expect(result!.fiveKMinutes).toBeGreaterThan(0);
  });

  it("returns null for zero distance", () => {
    expect(calculator({ distanceKm: 0, timeMinutes: 45 })).toBeNull();
  });

  it("returns null for zero time", () => {
    expect(calculator({ distanceKm: 10, timeMinutes: 0 })).toBeNull();
  });
});
