import { describe, expect, test } from "vitest";
import { getTool } from "../registry/getTool";

describe("bmi calculator", () => {
  test("computes BMI for 70kg and 1.75m", () => {
    const calculate = getTool("bmi-calculator");

    const result = calculate({
      weightKg: 70,
      heightM: 1.75,
    });

    expect(result.bmi).toBeCloseTo(22.86, 2);
  });
});
