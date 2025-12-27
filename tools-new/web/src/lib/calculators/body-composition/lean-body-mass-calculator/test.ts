import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("lean body mass calculator", () => {
  it("returns lean body mass for valid input", () => {
    const result = calculator({
      weightKg: 80,
      bodyFatPercentage: 20,
    });

    expect(result).toBe(64);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      bodyFatPercentage: 20,
    });

    expect(result).toBeNull();
  });
});
