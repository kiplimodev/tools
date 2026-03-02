import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("bmi-calculator", () => {
  it("returns normal weight for 70kg 175cm", () => {
    const result = calculator({ weightKg: 70, heightCm: 175 });
    expect(result).not.toBeNull();
    expect(result!.bmi).toBeCloseTo(22.9, 1);
    expect(result!.category).toBe("Normal weight");
  });

  it("returns null for zero weight", () => {
    const result = calculator({ weightKg: 0, heightCm: 175 });
    expect(result).toBeNull();
  });
});
