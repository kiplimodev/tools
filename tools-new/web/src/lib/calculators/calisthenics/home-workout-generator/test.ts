import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("home-workout-generator", () => {
  it("returns exercise count for valid input", () => {
    const result = calculator({
      level: "beginner",
      durationMinutes: 30,
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      level: "beginner",
      durationMinutes: 0,
    });

    expect(result).toBeNull();
  });
});
