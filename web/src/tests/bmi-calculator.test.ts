import { describe, expect, test } from "vitest";
import { calculator } from "../lib/calculators/body-composition/bmi-calculator";

describe("bmi calculator", () => {
  test("computes BMI and category for 70kg and 175cm", () => {
    const result = calculator({ weightKg: 70, heightCm: 175 });
    expect(result).not.toBeNull();
    expect(result!.bmi).toBeCloseTo(22.9, 1);
    expect(result!.category).toBe("Normal weight");
  });
});
