import { describe, expect, test } from "vitest";
import { calculateRunningPace } from "../lib/calculators/running/pace";

describe("running pace calculator", () => {
  test("calculates pace and speed for 10 km in 50 minutes", () => {
    const result = calculateRunningPace(10, 50);
    expect(result.pacePerKm).toBe("5:00 min");
    expect(result.speedKmh).toBeCloseTo(12);
  });
});
