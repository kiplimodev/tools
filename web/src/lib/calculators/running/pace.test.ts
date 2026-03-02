import { describe, it, expect } from "vitest";
import { calculateRunningPace } from "./pace";

describe("calculateRunningPace", () => {
  it("calculates pace and speed for a 10k in 50 minutes", () => {
    const result = calculateRunningPace(10, 50);
    expect(result.pacePerKm).toBe("5:00 min");
    expect(result.speedKmh).toBe(12);
  });

  it("rounds seconds up when they hit 60", () => {
    const result = calculateRunningPace(1, 3.999);
    expect(result.pacePerKm).toBe("4:00 min");
  });
});
