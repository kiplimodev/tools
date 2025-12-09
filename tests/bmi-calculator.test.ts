import { describe, expect, test } from "vitest";
import { getTool } from "../registry/getTool";

describe("bmi calculator", () => {
  test("computes BMI and category for 70kg and 175cm", () => {
    const calculate = getTool("bmi-calculator");

    const result = calculate({
      weightKg: 70,
      heightCm: 175,
    });

    expect(result.bmi).toBeCloseTo(22.9, 1);
    expect(result.category).toBe("normal");
  });
});
