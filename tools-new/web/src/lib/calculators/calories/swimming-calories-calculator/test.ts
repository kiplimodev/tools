import { describe, expect, it } from "vitest";
import { calculator } from "./index";

describe("swimming calories calculator", () => {
  it("returns calories for valid input", () => {
    const result = calculator({
      weightKg: 70,
      durationMinutes: 30,
      met: 8,
    });

    expect(result).toBe(280);
  });

  it("returns null for invalid input", () => {
    expect(
      calculator({
        weightKg: 0,
        durationMinutes: 30,
        met: 8,
      })
    ).toBeNull();
  });
});
